# Atlas Local — Landing Page

Landing page for **Atlas Local**, a local SEO service for businesses in
Lekki, Lagos. Built with Next.js (App Router) + TypeScript + React.

This is the approved v2 of the landing page: deep-green / warm-ivory / amber
design, sectors carousel, 31-point audit checklist, Detty December / IJGB
season section, honest pricing, and the 5-question profile self-check
(“Score your own profile”) at the bottom of the page with a magnetic
floating teaser pill.

## Run locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this folder to a git repo (GitHub, GitLab or Bitbucket).
2. In Vercel, **Add New → Project**, import the repo.
3. The defaults work — no build settings to change (`npm install`,
   `npm run build`). Vercel detects Next.js automatically.
4. Add the `atlaslocal.bond` domain under the project’s **Settings →
   Domains** (the apex domain redirects to `www` as before).

## Built-in analytics (your own, no Vercel Analytics)

The site tracks its own basics — no third party, no cookies, no personal
data:

- **Visits** (page loads), **average stay time**, **average time per
  section** (Hero, The problem, Sectors, Free audit, How it works,
  Services, Detty December season, Pricing, Profile scorer, FAQ, Footer).
- How: `components/Tracker.tsx` (invisible, runs on every page) records a
  pageview on load and the visit length + per-section screen time when the
  visitor leaves, via `navigator.sendBeacon`. `app/api/track/route.ts`
  receives it; `lib/stats-store.ts` keeps the counters.
- View the numbers at **`/stats`** (unlisted — share the URL only with
  people who should see it).

### To keep the numbers permanently, add an Upstash Redis store (2 minutes, free)

Without it the counters live in server memory and reset when the site
restarts — the `/stats` page says so. To make them permanent:

1. In Vercel, open the project → **Storage → Create Database** and pick
   **Upstash** ("Serverless DB (Redis, Vector, Queue, Search)"). There is
   no plain "KV" tile any more — Upstash is the Redis store behind it.
   Ignore Postgres, Blob and the rest.
2. Create it and connect it to this project (Vercel injects the Redis URL
   and token automatically).
3. Redeploy. That is it — the tracker and `/stats` pick the store up with
   no code change. The free tier is far more than a landing page needs.

## Notes

- All photos and the logo live in `public/images/` as real files (they were
  inlined base64 in the original single-file export).
- The header logo is the recoloured Atlas Local mark (ivory pin + amber
  ring, trimmed to content), displayed at 44px tall in the deep-green
  header.
- WhatsApp CTAs point to +234 913 409 9397; email is
  hello@atlaslocal.bond.
- All motion (loader, font montage, scroll reveals, count-up, carousel
  autoplay, magnetic pill) respects `prefers-reduced-motion`.
