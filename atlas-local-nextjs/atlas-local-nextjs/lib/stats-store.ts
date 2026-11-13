// Atlas Local — simple first-party analytics store.
// Counts only: visits, total stay time, and time per page section.
// No personal data, no cookies, no third party.
// Uses Vercel KV (Upstash Redis) when KV_REST_API_URL / KV_REST_API_TOKEN
// are set (Vercel injects them when you attach a KV store). Otherwise it
// falls back to in-memory counters, which reset when the server restarts —
// the stats page says so plainly when that is the case.

import { kv } from "@vercel/kv";

const KV_OK = Boolean(
  process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
);

export type SectionTotals = Record<string, { seconds: number; views: number }>;

export type Snapshot = {
  configured: boolean;
  visits: number;
  sessions: number;
  totalSeconds: number;
  sections: SectionTotals;
};

// In-memory fallback. Stored on globalThis so the /api/track route and the
// /stats page share the same counters even though Next.js bundles each
// route separately (a plain module-level object would be duplicated).
// Still per-process: it resets on redeploy/cold start, and on Vercel each
// serverless invocation is its own process, so without KV the numbers do
// not persist. The stats page says so plainly when that is the case.
type MemStore = Snapshot;
const g = globalThis as unknown as { __atlasMem?: MemStore };
if (!g.__atlasMem) {
  g.__atlasMem = {
    configured: false,
    visits: 0,
    sessions: 0,
    totalSeconds: 0,
    sections: {},
  };
}
const mem: MemStore = g.__atlasMem;

const K = {
  visits: "atlas:visits",
  sessions: "atlas:sessions",
  totalSeconds: "atlas:totalSeconds",
  sectionNames: "atlas:sectionNames",
  sectionSeconds: (name: string) => `atlas:section:${name}:seconds`,
  sectionViews: (name: string) => `atlas:section:${name}:views`,
};

export async function recordPageview(): Promise<void> {
  if (KV_OK) {
    try {
      await kv.incr(K.visits);
      return;
    } catch {
      // fall through to memory
    }
  }
  mem.visits += 1;
}

export async function recordSession(
  durationSec: number,
  sections: Record<string, number>
): Promise<void> {
  if (KV_OK) {
    try {
      await kv.incr(K.sessions);
      await kv.incrby(K.totalSeconds, Math.max(0, Math.round(durationSec)));
      for (const [name, secs] of Object.entries(sections)) {
        const s = Math.max(0, Math.round(secs));
        if (s <= 0) continue;
        await kv.sadd(K.sectionNames, name);
        await kv.incrby(K.sectionSeconds(name), s);
        await kv.incr(K.sectionViews(name));
      }
      return;
    } catch {
      // fall through to memory
    }
  }
  mem.sessions += 1;
  mem.totalSeconds += Math.max(0, Math.round(durationSec));
  for (const [name, secs] of Object.entries(sections)) {
    const s = Math.max(0, Math.round(secs));
    if (s <= 0) continue;
    const cur = (mem.sections[name] ??= { seconds: 0, views: 0 });
    cur.seconds += s;
    cur.views += 1;
  }
}

export async function getSnapshot(): Promise<Snapshot> {
  if (KV_OK) {
    try {
      const [visits, sessions, totalSeconds, names] = await Promise.all([
        kv.get<number>(K.visits),
        kv.get<number>(K.sessions),
        kv.get<number>(K.totalSeconds),
        kv.smembers(K.sectionNames),
      ]);
      const sections: SectionTotals = {};
      for (const name of names ?? []) {
        const [seconds, views] = await Promise.all([
          kv.get<number>(K.sectionSeconds(name)),
          kv.get<number>(K.sectionViews(name)),
        ]);
        sections[name] = { seconds: seconds ?? 0, views: views ?? 0 };
      }
      return {
        configured: true,
        visits: visits ?? 0,
        sessions: sessions ?? 0,
        totalSeconds: totalSeconds ?? 0,
        sections,
      };
    } catch {
      // fall through to memory
    }
  }
  return { ...mem, sections: { ...mem.sections } };
}
