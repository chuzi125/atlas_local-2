// Atlas Local — analytics endpoint. Receives two event types from the
// tracker on the landing page:
//   { type: "pageview" }            -> counts one visit
//   { type: "session", durationSec, sections: { "Hero": 12, ... } }
//        -> counts one finished visit + its stay time + time per section
// Nothing personal is stored. No cookies.

import { NextResponse } from "next/server";
import { recordPageview, recordSession } from "@/lib/stats-store";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (body?.type === "pageview") {
      await recordPageview();
    } else if (body?.type === "session") {
      const duration = Math.max(0, Math.round(Number(body.durationSec) || 0));
      const sections: Record<string, number> = {};
      if (body.sections && typeof body.sections === "object") {
        for (const [key, value] of Object.entries(body.sections)) {
          const s = Math.round(Number(value) || 0);
          if (s > 0) sections[String(key)] = s;
        }
      }
      await recordSession(duration, sections);
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
