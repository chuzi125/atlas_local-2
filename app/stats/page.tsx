// Atlas Local — private stats page. Just the numbers, no clutter:
// total visits, average stay time, average time per section.
// Unlisted URL — share it only with people who should see the numbers.
// Reads live from the store on every load (never cached).

import { getSnapshot } from "@/lib/stats-store";

export const dynamic = "force-dynamic";

function fmt(seconds: number): string {
  const s = Math.max(0, Math.round(seconds));
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  const r = s % 60;
  return r ? `${m}m ${r}s` : `${m}m`;
}

export default async function StatsPage() {
  const snap = await getSnapshot();
  const avgStay = snap.sessions > 0 ? snap.totalSeconds / snap.sessions : 0;
  const rows = Object.entries(snap.sections)
    .map(([name, v]) => ({
      name,
      avg: v.views > 0 ? v.seconds / v.views : 0,
      views: v.views,
    }))
    .sort((a, b) => b.avg - a.avg);

  return (
    <main
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "48px 20px",
        fontFamily: "system-ui, sans-serif",
        color: "#1a1a1a",
        background: "#fff",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: 28, marginBottom: 4 }}>Atlas Local — site stats</h1>
      <p style={{ color: "#666", marginTop: 0 }}>
        atlaslocal.bond · updated every time you load this page
      </p>

      {!snap.configured && (
        <p
          style={{
            background: "#fff7e0",
            border: "1px solid #e8c33d",
            borderRadius: 8,
            padding: "12px 16px",
          }}
        >
          Storage not connected yet — these numbers are temporary and reset
          when the site restarts. In Vercel, add a KV store (Storage →
          Create → KV) and redeploy to keep them permanently.
        </p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 12,
          margin: "24px 0",
        }}
      >
        <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16 }}>
          <div style={{ fontSize: 32, fontWeight: 700 }}>{snap.visits}</div>
          <div style={{ color: "#666" }}>Visits (page loads)</div>
        </div>
        <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16 }}>
          <div style={{ fontSize: 32, fontWeight: 700 }}>{snap.sessions}</div>
          <div style={{ color: "#666" }}>Finished visits counted</div>
        </div>
        <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16 }}>
          <div style={{ fontSize: 32, fontWeight: 700 }}>{fmt(avgStay)}</div>
          <div style={{ color: "#666" }}>Average stay time</div>
        </div>
      </div>

      <h2 style={{ fontSize: 20 }}>Average time per section</h2>
      {rows.length === 0 ? (
        <p style={{ color: "#666" }}>
          No finished visits yet — numbers appear once visitors leave the page.
        </p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "2px solid #ddd" }}>
              <th style={{ padding: "8px 4px" }}>Section</th>
              <th style={{ padding: "8px 4px" }}>Avg time</th>
              <th style={{ padding: "8px 4px" }}>Seen in visits</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.name} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "8px 4px" }}>{r.name}</td>
                <td style={{ padding: "8px 4px", fontWeight: 600 }}>{fmt(r.avg)}</td>
                <td style={{ padding: "8px 4px", color: "#666" }}>{r.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <p style={{ color: "#888", fontSize: 13, marginTop: 32 }}>
        First-party only — no cookies, no personal data, nothing sent to a
        third party. A visit counts when the page loads; stay time counts
        when the visitor leaves.
      </p>
    </main>
  );
}
