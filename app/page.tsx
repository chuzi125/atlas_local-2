"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

const WA_LINK =
  "https://wa.me/2349134099397?text=Hi%20Atlas%20Local%2C%20I%27d%20like%20a%20free%20audit%20of%20my%20Google%20Business%20Profile.";
const EMAIL = "hello@atlaslocal.bond";

const FACES = [
  "'Archivo', sans-serif",
  "'Playfair Display', serif",
  "'Source Serif 4', serif",
  "'Cormorant Garamond', serif",
  "'Archivo', sans-serif",
  "'Playfair Display', serif",
  "'Source Serif 4', serif",
];

type Sector = {
  img: string;
  alt: string;
  kicker: string;
  title: string;
  text: string;
  search: string;
};

const SECTORS: Sector[] = [
  {
    img: "/images/sector-clinic.webp",
    alt: "A bright, modern dental treatment room with a patient chair",
    kicker: "Sector 01",
    title: "Clinics & practices",
    text: "A patient in pain searches once and calls the first credible result. Reviews, hours and a working phone number decide who gets that call.",
    search: "dentist near me",
  },
  {
    img: "/images/sector-hotel.webp",
    alt: "Pool terrace of a Lagos boutique hotel under a bright sky",
    kicker: "Sector 02",
    title: "Hotels & shortlets",
    text: "Guests — especially December’s visitors from abroad — book straight from the map. Photos and review counts are your brochure now.",
    search: "shortlet in Lekki",
  },
  {
    img: "/images/sector-event.jpg",
    alt: "A Lagos event hall set with round tables and gold chairs for a celebration",
    kicker: "Sector 03",
    title: "Event centres",
    text: "Weddings and parties are booked months ahead, and the shortlist is built on Google. If your hall isn’t on it, the date goes to a rival venue.",
    search: "event centre near me",
  },
  {
    img: "/images/sector-real-estate.jpg",
    alt: "A modern apartment block for sale in the Oniru and Lekki area of Lagos",
    kicker: "Sector 04",
    title: "Real estate",
    text: "Buyers and tenants — including diaspora clients viewing from abroad — vet agencies on Google first. A thin profile reads as a small operation.",
    search: "real estate agent Lekki",
  },
  {
    img: "/images/sector-law.jpg",
    alt: "A lawyer working at a desk in a bright Lagos law office",
    kicker: "Sector 05",
    title: "Law firms",
    text: "Nobody refers a lawyer the way they used to. Clients search, compare ratings, and call the firm that looks established and reachable.",
    search: "law firm in Lekki",
  },
  {
    img: "/images/sector-plumber.jpg",
    alt: "A plumber smiling while fixing a faucet under a bathroom sink",
    kicker: "Sector 06",
    title: "Home services",
    text: "A burst pipe or a dead generator is an emergency search. The first trusted name on the map gets the job — and the repeat business after it.",
    search: "plumber near me",
  },
];

type ScorerQuestion = {
  text: string;
  options: { label: string; value: number }[];
};

const SCORER_QUESTIONS: ScorerQuestion[] = [
  {
    text: "Is your Google profile claimed and verified by you?",
    options: [
      { label: "Yes", value: 2 },
      { label: "Not sure", value: 1 },
      { label: "No", value: 0 },
    ],
  },
  {
    text: "How many Google reviews do you have?",
    options: [
      { label: "50+", value: 2 },
      { label: "10–49", value: 1 },
      { label: "Under 10", value: 0 },
    ],
  },
  {
    text: "Is your rating 4.3 stars or higher?",
    options: [
      { label: "Yes", value: 2 },
      { label: "Close", value: 1 },
      { label: "No / none", value: 0 },
    ],
  },
  {
    text: "Are your phone number, hours and map pin correct today?",
    options: [
      { label: "Yes", value: 2 },
      { label: "Mostly", value: 1 },
      { label: "No / unsure", value: 0 },
    ],
  },
  {
    text: "Do you ask happy customers for reviews — and reply to them?",
    options: [
      { label: "Always", value: 2 },
      { label: "Sometimes", value: 1 },
      { label: "Never", value: 0 },
    ],
  },
];

function scoreMessage(total: number): string {
  if (total >= 8) {
    return "Strong shape — you’re ahead of most Lekki profiles. The full audit finds the last gaps: competitor review counts, category tweaks and the December-season polish.";
  }
  if (total >= 5) {
    return "A workable profile with real leaks. The full audit shows exactly which of the 31 checks you’re failing — and which fixes move the needle first.";
  }
  if (total >= 2) {
    return "Google is quietly sending your customers elsewhere. The good news: these are the fastest gaps to close, and the full audit is free.";
  }
  return "You’re effectively invisible on the map right now. Start with the free audit — claim, verify, rebuild — before the December season does its searching without you.";
}

export default function Home() {
  const reduceMotionRef = useRef(false);

  /* ----- load intro ----- */
  const [loaderDone, setLoaderDone] = useState(false);
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    reduceMotionRef.current = reduce;
    if (reduce) {
      setLoaderDone(true);
      return;
    }
    const onLoad = () => {
      window.setTimeout(() => setLoaderDone(true), 450);
    };
    window.addEventListener("load", onLoad);
    const fallback = window.setTimeout(() => setLoaderDone(true), 1600); /* never trap the page */
    return () => {
      window.removeEventListener("load", onLoad);
      window.clearTimeout(fallback);
    };
  }, []);

  /* ----- hero blurb: typeface montage, then it settles ----- */
  const [faceIdx, setFaceIdx] = useState(0);
  const [ledeSettled, setLedeSettled] = useState(false);
  useEffect(() => {
    if (reduceMotionRef.current) {
      setLedeSettled(true);
      return;
    }
    let i = 0;
    const tick = window.setInterval(() => {
      if (i < FACES.length) {
        setFaceIdx(i);
        i++;
      } else {
        window.clearInterval(tick);
        setLedeSettled(true);
      }
    }, 170);
    return () => window.clearInterval(tick);
  }, []);

  /* ----- scroll reveal ----- */
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".rv"));
    if ("IntersectionObserver" in window && !reduceMotionRef.current) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              (e.target as HTMLElement).classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }
    els.forEach((el) => el.classList.add("in"));
  }, []);

  /* ----- hero card count-up ----- */
  const rateRef = useRef<HTMLSpanElement>(null);
  const revRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const rateEl = rateRef.current;
    const revEl = revRef.current;
    if (!rateEl || !revEl || reduceMotionRef.current) return;
    let started = false;
    const cio = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;
          cio.disconnect();
          let t0: number | null = null;
          const dur = 1300;
          const frame = (ts: number) => {
            if (t0 === null) t0 = ts;
            const p = Math.min((ts - t0) / dur, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            rateEl.textContent = (4.9 * ease).toFixed(1);
            revEl.textContent = String(Math.round(120 * ease));
            if (p < 1) requestAnimationFrame(frame);
          };
          requestAnimationFrame(frame);
        }
      },
      { threshold: 0.4 }
    );
    cio.observe(rateEl);
    return () => cio.disconnect();
  }, []);

  /* ----- sectors carousel ----- */
  const trackRef = useRef<HTMLDivElement>(null);
  const [carIdx, setCarIdx] = useState(0);
  const idxRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const scrollRafRef = useRef<number | null>(null);

  const cardStep = useCallback((): number => {
    const track = trackRef.current;
    if (!track) return 360;
    const card = track.querySelector<HTMLElement>(".car-card");
    return card ? card.offsetWidth + 22 : 360;
  }, []);

  const goTo = useCallback(
    (n: number) => {
      const track = trackRef.current;
      if (!track) return;
      const clamped = Math.max(0, Math.min(SECTORS.length - 1, n));
      idxRef.current = clamped;
      setCarIdx(clamped);
      track.scrollTo({
        left: clamped * cardStep(),
        behavior: reduceMotionRef.current ? "auto" : "smooth",
      });
    },
    [cardStep]
  );

  const stopAutoplay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    if (reduceMotionRef.current) return;
    stopAutoplay();
    timerRef.current = setInterval(() => {
      goTo(idxRef.current >= SECTORS.length - 1 ? 0 : idxRef.current + 1);
    }, 4200);
  }, [goTo, stopAutoplay]);

  useEffect(() => {
    startAutoplay();
    const onVis = () => {
      if (document.hidden) stopAutoplay();
      else startAutoplay();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      stopAutoplay();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [startAutoplay, stopAutoplay]);

  const onTrackScroll = () => {
    if (scrollRafRef.current) return;
    scrollRafRef.current = requestAnimationFrame(() => {
      scrollRafRef.current = null;
      const track = trackRef.current;
      if (!track) return;
      const i = Math.round(track.scrollLeft / cardStep());
      idxRef.current = i;
      setCarIdx(i);
    });
  };

  /* ----- magnetic scorer teaser ----- */
  const magnetRef = useRef<HTMLAnchorElement>(null);
  const [magnetAway, setMagnetAway] = useState(false);
  useEffect(() => {
    const magnet = magnetRef.current;
    if (!magnet) return;
    let onMove: ((e: PointerEvent) => void) | null = null;
    if (!reduceMotionRef.current) {
      onMove = (e: PointerEvent) => {
        const r = magnet.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);
        if (dist < 190) {
          const pull = (1 - dist / 190) * 16;
          magnet.style.transform = `translateX(-50%) translate(${(dx / dist) * pull || 0}px,${(dy / dist) * pull || 0}px)`;
        } else {
          magnet.style.transform = "translateX(-50%)";
        }
      };
      document.addEventListener("pointermove", onMove, { passive: true });
    }
    const scoreSec = document.getElementById("score");
    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window && scoreSec) {
      io = new IntersectionObserver(
        (entries) => {
          setMagnetAway(entries[0].isIntersecting);
        },
        { threshold: 0.15 }
      );
      io.observe(scoreSec);
    }
    return () => {
      if (onMove) document.removeEventListener("pointermove", onMove);
      io?.disconnect();
    };
  }, []);

  /* ----- scorer ----- */
  const [answers, setAnswers] = useState<(number | null)[]>([
    null,
    null,
    null,
    null,
    null,
  ]);
  const complete = answers.every((a) => a !== null);
  const total = answers.reduce<number>((a, b) => a + (b ?? 0), 0);
  const scoreCtaHref = complete
    ? `https://wa.me/2349134099397?text=${encodeURIComponent(
        `Hi Atlas Local, I scored ${total}/10 on the profile self-check on your site. I’d like the free full audit.`
      )}`
    : WA_LINK;

  const answerQuestion = (qi: number, value: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[qi] = value;
      return next;
    });
  };

  const ledeStyle: CSSProperties | undefined = ledeSettled
    ? undefined
    : {
        fontFamily: FACES[faceIdx],
        fontStyle: faceIdx % 2 === 1 ? "italic" : "normal",
        transition: "none",
      };

  return (
    <>
      <div
        id="loader"
        className={loaderDone ? "done" : undefined}
        aria-hidden="true"
      >
        <div className="l-brand">
          Atlas <em>Local</em>
        </div>
        <div className="l-bar">
          <i></i>
        </div>
        <div className="l-sub">Lekki · Lagos</div>
      </div>

      <header className="topbar">
        <div className="wrap topbar-in">
          <a className="brand" href="#top" aria-label="Atlas Local — home">
            <img src="/images/atlas-local-logo-dark.png" alt="Atlas Local" />
          </a>
          <nav className="topnav" aria-label="Page sections">
            <a href="#problem">The problem</a>
            <a href="#sectors">Who we help</a>
            <a href="#audit">Free audit</a>
            <a href="#services">Services</a>
            <a href="#season">Detty December</a>
            <a href="#pricing">Pricing</a>
          </nav>
          <a
            className="btn btn-wa"
            href={WA_LINK}
            target="_blank"
            rel="noopener"
          >
            Free audit
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <div className="hero" data-section="Hero">
          <div className="wrap hero-in">
            <div>
              <p className="where">Local search · Lekki, Lagos</p>
              <h1>
                Your next customer is searching Google right now.{" "}
                <span className="hl">
                  They’ll find whoever shows up first.
                </span>
              </h1>
              <p
                className={`lede${ledeSettled ? " settled" : ""}`}
                id="lede"
                style={ledeStyle}
              >
                Atlas Local fixes the Google presence of Lekki businesses —
                your Business Profile, your reviews, your place on the map —
                so{" "}
                <span className="gold">the call, the booking and the visit</span>{" "}
                come to you instead of the place down the road.
              </p>
              <div className="hero-ctas">
                <a
                  className="btn btn-wa"
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener"
                >
                  Get my free audit
                </a>
                <a className="btn btn-ghost" href="#score">
                  Score my profile first
                </a>
              </div>
              <p className="hero-note">
                Free audit, no obligation. One-time setup if you want it
                fixed. No contracts.
              </p>
            </div>
            <div className="hero-photo">
              <div className="ph">
                <img
                  src="/images/hero-bridge.jpg"
                  alt="Aerial view of the Lekki–Ikoyi Link Bridge over the Lagos Lagoon"
                />
              </div>
              <span className="gbp-tag">What a fixed profile looks like</span>
              <div
                className="gbp-card"
                aria-label="Example of a completed Google Business Profile listing"
              >
                <div className="g-name">Your Business</div>
                <div className="g-sub">Lekki Phase 1, Lagos</div>
                <div className="g-stars">
                  ★★★★★{" "}
                  <b>
                    <span ref={rateRef} id="rateNum">
                      4.9
                    </span>
                  </b>{" "}
                  <span>
                    (
                    <span ref={revRef} id="revNum">
                      120
                    </span>
                    + reviews)
                  </span>
                </div>
                <div className="g-open">
                  Open now <span>· Closes 9:00 pm · 4 min away</span>
                </div>
                <div className="gbp-actions">
                  <span>Call</span>
                  <span>WhatsApp</span>
                  <span>Directions</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROBLEM */}
        <section id="problem" data-section="The problem">
          <div className="wrap">
            <div className="sec-head rv">
              <h2>The problem isn’t your business. It’s your listing.</h2>
              <p>
                Most Lekki businesses are losing customers they never hear
                about — people who searched, saw a competitor first, and never
                knew you existed. Three patterns show up in almost every
                audit:
              </p>
            </div>
            <div className="pain-grid">
              <div className="pain rv">
                <div className="dot"></div>
                <h3>Unclaimed or broken profiles</h3>
                <p>
                  Google auto-creates listings for businesses that never
                  claimed them. Wrong phone number, wrong pin on the map,
                  hours from two years ago — and the owner can’t fix any of
                  it, because it isn’t theirs yet.
                </p>
              </div>
              <div className="pain rv" style={{ "--d": ".1s" } as CSSProperties}>
                <div className="dot"></div>
                <h3>Reviews that don’t compete</h3>
                <p>
                  Your competitor has 200 reviews and a 4.8 rating. You have
                  three — one of them from your cousin. Searchers don’t read
                  the reviews; they read the count, and they pick the business
                  that looks established.
                </p>
              </div>
              <div className="pain rv" style={{ "--d": ".2s" } as CSSProperties}>
                <div className="dot"></div>
                <h3>Invisible at the moment of intent</h3>
                <p>
                  “Dentist near me.” “Shortlet in Lekki.” “Event centre near
                  me.” These searches end in a call within minutes. If you’re
                  not in the top results on the map, that money walks past
                  you daily.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTORS CAROUSEL */}
        <section id="sectors" className="alt tight" data-section="Sectors">
          <div className="wrap">
            <div className="car-head rv">
              <div className="sec-head">
                <h2>Made for businesses people search for</h2>
                <p>
                  If a customer would Google you before they visit you, your
                  profile is a storefront. These are the storefronts we think
                  about most — swipe through.
                </p>
              </div>
              <div className="car-nav">
                <button
                  className="car-btn"
                  type="button"
                  aria-label="Previous sector"
                  disabled={carIdx === 0}
                  onClick={() => {
                    goTo(carIdx - 1);
                    startAutoplay();
                  }}
                >
                  ←
                </button>
                <button
                  className="car-btn"
                  type="button"
                  aria-label="Next sector"
                  disabled={carIdx === SECTORS.length - 1}
                  onClick={() => {
                    goTo(carIdx + 1);
                    startAutoplay();
                  }}
                >
                  →
                </button>
              </div>
            </div>
            <div
              className="car-track"
              ref={trackRef}
              tabIndex={0}
              aria-label="Sectors Atlas Local helps"
              onScroll={onTrackScroll}
              onPointerEnter={stopAutoplay}
              onPointerLeave={startAutoplay}
              onFocus={stopAutoplay}
              onBlur={startAutoplay}
            >
              {SECTORS.map((s) => (
                <article className="car-card" key={s.kicker}>
                  <img src={s.img} alt={s.alt} loading="lazy" />
                  <div className="cc-body">
                    <span className="cc-k">{s.kicker}</span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    <p className="cc-search">
                      They search: <b>“{s.search}”</b>
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div
              className="car-dots"
              role="tablist"
              aria-label="Choose a sector"
            >
              {SECTORS.map((s, i) => (
                <button
                  key={s.kicker}
                  type="button"
                  aria-label={`Show sector ${i + 1} of ${SECTORS.length}`}
                  aria-current={carIdx === i ? "true" : "false"}
                  onClick={() => {
                    goTo(i);
                    startAutoplay();
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* AUDIT */}
        <section id="audit" data-section="Free audit">
          <div className="wrap">
            <div className="sec-head rv">
              <h2>Start with the free audit</h2>
              <p>
                Before you pay for anything, see exactly where you stand. The
                Atlas Local audit runs 31 checks across your whole profile and
                scores it — the same checks, in plain language, that decide
                whether Google shows you or skips you.
              </p>
            </div>
            <ul className="check-grid">
              <li className="rv">
                <span className="tick">✓</span>
                <div>
                  <b>Claimed &amp; verified</b>
                  <span>
                    Do you actually own your listing — and can you prove it to
                    Google?
                  </span>
                </div>
              </li>
              <li className="rv" style={{ "--d": ".05s" } as CSSProperties}>
                <span className="tick">✓</span>
                <div>
                  <b>Name, address &amp; phone accuracy</b>
                  <span>
                    One wrong digit and the customer calls somebody else.
                  </span>
                </div>
              </li>
              <li className="rv" style={{ "--d": ".1s" } as CSSProperties}>
                <span className="tick">✓</span>
                <div>
                  <b>Categories &amp; services</b>
                  <span>
                    The labels Google uses to match you to searches like
                    “dentist near me”.
                  </span>
                </div>
              </li>
              <li className="rv" style={{ "--d": ".15s" } as CSSProperties}>
                <span className="tick">✓</span>
                <div>
                  <b>Hours &amp; holiday hours</b>
                  <span>
                    “Closed” on Google while you’re open is a silent revenue
                    leak.
                  </span>
                </div>
              </li>
              <li className="rv" style={{ "--d": ".2s" } as CSSProperties}>
                <span className="tick">✓</span>
                <div>
                  <b>Photos</b>
                  <span>
                    Real photos of your space, your team, your work — not a
                    logo and a prayer.
                  </span>
                </div>
              </li>
              <li className="rv" style={{ "--d": ".25s" } as CSSProperties}>
                <span className="tick">✓</span>
                <div>
                  <b>Reviews &amp; replies</b>
                  <span>
                    How many, how recent, how rated — and whether anyone
                    answers them.
                  </span>
                </div>
              </li>
              <li className="rv" style={{ "--d": ".3s" } as CSSProperties}>
                <span className="tick">✓</span>
                <div>
                  <b>Competitor gap</b>
                  <span>
                    Your score next to the top three businesses fighting for
                    the same search.
                  </span>
                </div>
              </li>
              <li className="rv" style={{ "--d": ".35s" } as CSSProperties}>
                <span className="tick">✓</span>
                <div>
                  <b>The full 31 points</b>
                  <span>
                    Plus attributes, booking links, Q&amp;A, posts and
                    everything else Google quietly ranks you on.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="alt" data-section="How it works">
          <div className="wrap">
            <div className="sec-head rv">
              <h2>How it works</h2>
              <p>
                One step at a time. You see the problem before you’re asked to
                pay for anything, and you can stop after any step.
              </p>
            </div>
            <div className="steps">
              <div className="step rv">
                <div className="n">1</div>
                <h3>Free audit</h3>
                <p>
                  We run the 31-point check on your Google presence and send
                  it to you on WhatsApp. Yours to keep either way.
                </p>
                <div className="price">₦0</div>
              </div>
              <div className="step rv" style={{ "--d": ".1s" } as CSSProperties}>
                <div className="n">2</div>
                <h3>The problem, in numbers</h3>
                <p>
                  Your score beside your competitors’. Exactly which gaps are
                  costing you calls — and which ones don’t matter.
                </p>
                <div className="price">Still ₦0</div>
              </div>
              <div className="step rv" style={{ "--d": ".2s" } as CSSProperties}>
                <div className="n">3</div>
                <h3>One-time setup</h3>
                <p>
                  We claim, verify and rebuild your profile properly:
                  categories, services, photos, copy — and a review flow that
                  keeps working after we leave.
                </p>
                <div className="price">₦50,000 one-time · pilot rate</div>
              </div>
              <div className="step rv" style={{ "--d": ".3s" } as CSSProperties}>
                <div className="n">4</div>
                <h3>Keep it growing</h3>
                <p>
                  Monthly maintenance keeps the profile fresh, the reviews
                  flowing and the reports coming — then we talk about the other
                  services, only if you want them.
                </p>
                <div className="price">₦25,000 / month</div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" data-section="Services">
          <div className="wrap">
            <div className="sec-head rv">
              <h2>Everything we do</h2>
              <p>
                Eight services, one goal: when someone nearby searches for
                what you sell, they find you first — and everything after the
                search works too.
              </p>
            </div>
            <div className="svc-list">
              <div className="svc flag rv">
                <div className="num">01</div>
                <div>
                  <h3>Google Business Profile setup</h3>
                  <p>
                    Claiming, verification, categories, services, photos and
                    copy — the full rebuild, done right and done fast, with a
                    review flow installed before we hand it back.
                  </p>
                </div>
                <div className="svc-price">
                  ₦50,000<small>one-time · pilot rate</small>
                </div>
              </div>
              <div className="svc rv">
                <div className="num">02</div>
                <div>
                  <h3>Profile maintenance</h3>
                  <p>
                    Monthly posts, photo updates, review replies, holiday
                    hours and a simple report: searches, calls and direction
                    requests, month on month.
                  </p>
                </div>
                <div className="svc-price">
                  ₦25,000<small>per month</small>
                </div>
              </div>
              <div className="svc rv">
                <div className="num">03</div>
                <div>
                  <h3>Website &amp; landing page design</h3>
                  <p>
                    A fast, credible page that turns the Google click into a
                    call or a booking — built to match your profile, not fight
                    it.
                  </p>
                </div>
                <div className="svc-price">
                  Scoped<small>after your audit</small>
                </div>
              </div>
              <div className="svc rv">
                <div className="num">04</div>
                <div>
                  <h3>Social management &amp; consulting</h3>
                  <p>
                    Instagram-first content that supports the search strategy:
                    real photos, real proof, a posting rhythm you can sustain.
                  </p>
                </div>
                <div className="svc-price">
                  Scoped<small>after your audit</small>
                </div>
              </div>
              <div className="svc rv">
                <div className="num">05</div>
                <div>
                  <h3>WhatsApp &amp; email automation</h3>
                  <p>
                    Reception and follow-up that never sleeps: instant
                    replies, booking confirmations, review requests and a
                    simple CRM, on the channels your customers already use.
                  </p>
                </div>
                <div className="svc-price">
                  Scoped<small>after your audit</small>
                </div>
              </div>
              <div className="svc rv">
                <div className="num">06</div>
                <div>
                  <h3>Website SEO</h3>
                  <p>
                    The pages, words and structure that make your site rank
                    for the searches your profile can’t cover alone.
                  </p>
                </div>
                <div className="svc-price">
                  Scoped<small>after your audit</small>
                </div>
              </div>
              <div className="svc rv">
                <div className="num">07</div>
                <div>
                  <h3>Local &amp; digital ads</h3>
                  <p>
                    Targeted spend for when you need demand faster than
                    search alone delivers — pointed at a profile and page that
                    can actually convert it.
                  </p>
                </div>
                <div className="svc-price">
                  Scoped<small>after your audit</small>
                </div>
              </div>
              <div className="svc rv">
                <div className="num">08</div>
                <div>
                  <h3>Consultancy</h3>
                  <p>
                    Straight answers on branding, platforms and copy for
                    owners who run their own marketing and want a second,
                    honest pair of eyes.
                  </p>
                </div>
                <div className="svc-price">
                  Scoped<small>after your audit</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEASON */}
        <section id="season" className="season" data-section="Detty December season">
          <div className="wrap">
            <div className="season-grid">
              <div className="rv">
                <div className="sec-head" style={{ marginBottom: 0 }}>
                  <h2>
                    The IJGB season is coming. Google is how they’ll find
                    you.
                  </h2>
                  <p>
                    From late November through early January, Nigerians abroad
                    come home for Detty December — and they are the
                    highest-spending customers of the year. They don’t ask
                    around. They search: hotels and shortlets, restaurants,
                    event centres, a dentist while they’re home, property to
                    view. If your profile is unclaimed, thin or out of date
                    when they land, the season passes through your
                    competitors’ doors.
                  </p>
                </div>
                <ul className="timeline">
                  <li>
                    <span className="when">November</span>
                    <p>
                      <b>Prepare.</b> Audit, claim, rebuild. This is the last
                      calm month to get verified and photo-ready.
                    </p>
                  </li>
                  <li>
                    <span className="when">December</span>
                    <p>
                      <b>Peak.</b> The visitors arrive and the searches spike.
                      Profiles fixed in November collect the calls.
                    </p>
                  </li>
                  <li>
                    <span className="when">Early January</span>
                    <p>
                      <b>The tail.</b> Last bookings, last appointments, last
                      viewings before flights home — and reviews that carry
                      you into the new year.
                    </p>
                  </li>
                </ul>
              </div>
              <img
                className="rv"
                style={{ "--d": ".15s" } as CSSProperties}
                src="/images/sector-hotel.webp"
                alt="A boutique hotel pool and waterfall in Lagos at dusk"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="alt" data-section="Pricing">
          <div className="wrap">
            <div className="sec-head rv">
              <h2>Honest pricing</h2>
              <p>
                Two numbers, up front. Everything else is scoped after your
                free audit, once we both know what you actually need.
              </p>
            </div>
            <div className="price-grid">
              <div className="price-card main rv">
                <h3>Profile setup — pilot rate</h3>
                <div className="amt">
                  ₦50,000 <small>one-time</small>
                </div>
                <p>
                  Full claim, verification and rebuild of your Google Business
                  Profile, with the review flow installed. The pilot rate is
                  for our first clients while we build our portfolio — it will
                  not stay this low.
                </p>
              </div>
              <div className="price-card rv" style={{ "--d": ".12s" } as CSSProperties}>
                <h3>Maintenance</h3>
                <div className="amt">
                  ₦25,000 <small>/ month</small>
                </div>
                <p>
                  Posts, photos, review replies, seasonal hours and a monthly
                  report on searches, calls and direction requests. Offered
                  once your setup is in place. Cancel anytime.
                </p>
              </div>
            </div>
            <p className="honest rv">
              <b>The honest part:</b> you could claim a profile yourself,
              free, and YouTube would teach you. What you’re paying for is the
              verification minefield handled, copy that turns a search into a
              call, a review system that keeps running — and it being done
              this week instead of “eventually.” Busy owners don’t have an
              eventually.
            </p>
          </div>
        </section>

        {/* SCORER — lives at the bottom, teased by the floating pill */}
        <section id="score" data-section="Profile scorer">
          <div className="wrap">
            <div
              className="sec-head rv"
              style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
            >
              <h2>Before you go: score your own profile</h2>
              <p>
                Five questions, thirty seconds. A rough version of the audit —
                the full 31-point one is free on WhatsApp.
              </p>
            </div>
            <div className="scorer-wrap rv">
              <div className="scorer" id="scorer">
                <h3>Your profile, honestly scored</h3>
                <p className="sub">
                  Answer like a customer would find you today — not like you
                  plan to fix it next month.
                </p>
                {SCORER_QUESTIONS.map((q, qi) => (
                  <div className="q" data-q={qi} key={qi}>
                    <p>{q.text}</p>
                    <div className="q-opts">
                      {q.options.map((opt) => (
                        <button
                          key={opt.label}
                          type="button"
                          data-v={opt.value}
                          aria-pressed={
                            answers[qi] === opt.value ? "true" : "false"
                          }
                          onClick={() => answerQuestion(qi, opt.value)}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                <div
                  className={`score-out${complete ? " show" : ""}`}
                  id="scoreOut"
                  aria-live="polite"
                >
                  <div className="score-num">
                    <span id="scoreNum">{total}</span>
                    <small> / 10</small>
                  </div>
                  <p className="score-msg" id="scoreMsg">
                    {complete ? scoreMessage(total) : ""}
                  </p>
                  <a
                    className="btn btn-wa"
                    id="scoreCta"
                    href={scoreCtaHref}
                    target="_blank"
                    rel="noopener"
                  >
                    Get the full 31-point audit — free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="tight alt" data-section="FAQ">
          <div className="wrap">
            <div className="sec-head rv">
              <h2>Fair questions</h2>
            </div>
            <div className="faq-list">
              <details>
                <summary>Can’t I just do this myself for free?</summary>
                <p>
                  You can — claiming a profile costs nothing. Most owners
                  still don’t, or stall at verification, pick the wrong
                  categories, and never build the review habit that makes it
                  pay. You’re paying for done-right and done-this-week. If
                  you’d rather do it yourself, our seven free video guides
                  will walk you through claiming your profile and adding a
                  manager.
                </p>
              </details>
              <details>
                <summary>How long does setup take?</summary>
                <p>
                  The rebuild itself is quick; the variable is Google’s
                  verification, which can take days and occasionally demands a
                  video check. We handle that process with you — it’s half the
                  reason the service exists.
                </p>
              </details>
              <details>
                <summary>Do I need a website first?</summary>
                <p>
                  No. Your Google profile is the storefront; a website is
                  service 03, for when the profile is already bringing people
                  to your door and you want somewhere better to send them.
                </p>
              </details>
              <details>
                <summary>Where do you work?</summary>
                <p>
                  Lekki and the wider Lagos Island axis, entirely remotely —
                  audits, setup and reporting all happen over WhatsApp, email
                  and your Google account. No site visit needed.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER CTA */}
      <footer data-section="Footer">
        <div className="wrap">
          <h2>Find out what Google says about your business.</h2>
          <p>
            The audit is free, it’s yours to keep, and it takes one message
            to start. December’s customers are already planning their trips —
            be ready before they start searching.
          </p>
          <div className="foot-ctas">
            <a
              className="btn btn-wa"
              href={WA_LINK}
              target="_blank"
              rel="noopener"
            >
              Start my free audit on WhatsApp
            </a>
            <a className="btn btn-amber" href={`mailto:${EMAIL}`}>
              Email {EMAIL}
            </a>
          </div>
          <div className="foot-meta">
            <span>
              WhatsApp{" "}
              <a
                href="https://wa.me/2349134099397"
                target="_blank"
                rel="noopener"
              >
                +234 913 409 9397
              </a>
            </span>
            <span>
              Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </span>
            <span>
              Web{" "}
              <a
                href="https://atlaslocal.bond"
                target="_blank"
                rel="noopener"
              >
                atlaslocal.bond
              </a>
            </span>
            <span>Lekki · Lagos · Nigeria</span>
          </div>
        </div>
      </footer>

      {/* Magnetic scorer teaser: always in reach, steps aside at the scorer itself */}
      <a
        className={`magnet${magnetAway ? " away" : ""}`}
        id="magnet"
        ref={magnetRef}
        href="#score"
        aria-label="Score your own Google profile — five questions, thirty seconds"
      >
        <span className="pulse"></span> Score your profile{" "}
        <small>· 5 questions, 30 seconds</small>
      </a>
    </>
  );
}
