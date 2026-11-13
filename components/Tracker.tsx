// Atlas Local — tiny first-party tracker. Invisible to visitors.
// What it records:
//   - one pageview when the page loads
//   - how long the visit lasts, and how long each [data-section] of the
//     page is on screen (via IntersectionObserver)
// It sends the finished visit once, when the tab is closed or navigated
// away, using navigator.sendBeacon so the numbers land even on a fast exit.
// No cookies, no personal data, no third party.

"use client";

import { useEffect } from "react";

const ENDPOINT = "/api/track";

function send(type: string, payload: Record<string, unknown>) {
  const body = JSON.stringify({ type, ...payload });
  try {
    if (typeof navigator !== "undefined" && navigator.sendBeacon) {
      navigator.sendBeacon(
        ENDPOINT,
        new Blob([body], { type: "application/json" })
      );
      return;
    }
  } catch {
    // fall through to fetch
  }
  fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {});
}

export default function Tracker() {
  useEffect(() => {
    // Guard against double-mounting (e.g. React dev StrictMode).
    if ((window as unknown as { __atlasTracked?: boolean }).__atlasTracked)
      return;
    (window as unknown as { __atlasTracked?: boolean }).__atlasTracked = true;

    const startedAt = Date.now();

    // Pageview
    send("pageview", {
      path: window.location.pathname,
      referrer: document.referrer || "",
    });

    // Section timing: accumulate seconds each [data-section] is on screen.
    const sectionMs = new Map<string, number>();
    const visibleSince = new Map<string, number>();
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section]")
    );
    const io = new IntersectionObserver(
      (entries) => {
        const now = Date.now();
        for (const entry of entries) {
          const name =
            (entry.target as HTMLElement).dataset.section || "section";
          if (entry.isIntersecting) {
            if (!visibleSince.has(name)) visibleSince.set(name, now);
          } else {
            const since = visibleSince.get(name);
            if (since !== undefined) {
              sectionMs.set(
                name,
                (sectionMs.get(name) || 0) + (now - since)
              );
              visibleSince.delete(name);
            }
          }
        }
      },
      { threshold: 0.25 }
    );
    els.forEach((el) => io.observe(el));

    let sent = false;
    const sendSession = () => {
      if (sent) return;
      sent = true;
      const now = Date.now();
      for (const [name, since] of visibleSince) {
        sectionMs.set(name, (sectionMs.get(name) || 0) + (now - since));
      }
      visibleSince.clear();
      const sections: Record<string, number> = {};
      for (const [name, ms] of sectionMs) {
        sections[name] = Math.round(ms / 1000);
      }
      send("session", {
        durationSec: Math.round((now - startedAt) / 1000),
        sections,
      });
      io.disconnect();
    };

    window.addEventListener("pagehide", sendSession);
    return () => {
      window.removeEventListener("pagehide", sendSession);
      io.disconnect();
    };
  }, []);

  return null;
}
