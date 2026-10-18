# Arika — Chapters

A one-screen portfolio: an infinitely looping carousel of "chapters" with a scrambling **ARIKA** title, soft UI sounds, and a shared-element transition into each chapter page.

Next.js (App Router) · TypeScript · Tailwind · Framer Motion. Fonts (Space Grotesk + Inter Tight) are self-hosted via `@fontsource`.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
npm run lint && npm run typecheck
```

## Edit content (one file)

Everything lives in **`content/chapters.ts`**: site info, the 16 chapters (slide + detail page), About and Contact copy, and the accent colour (`theme.accent`).

- **Order** of slides = order of the `chapters` array. Add a chapter by adding an object; its page is generated automatically.
- Strings starting with `TODO` render as dashed orange placeholders on the site. Replace the text and the marking disappears.
- Links with `todo: true` render a button pointing to `#`. Add the real URL and delete the flag.

## Swap images

Right now every image is a demo from `picsum.photos` (allowed in `next.config.mjs`).

1. Put your files in `public/chapters/<slug>/`, e.g. `public/chapters/mysl/hero.jpg`, `1.jpg`, `2.jpg`.
2. In `content/chapters.ts`, change the paths:
   ```ts
   image: "/chapters/mysl/hero.jpg",
   gallery: [{ src: "/chapters/mysl/1.jpg", caption: "…" }, …],
   ```
3. For the About portrait, set `about.portrait` to e.g. `"/about/portrait.jpg"`.

Hero images look best around 1920×1080 or larger. If any image fails to load, a generated gradient is shown instead.

## Sound

Sounds (slide tick, hover blip, page whoosh) are synthesised with the Web Audio API, so there are no audio files. Browsers only allow audio after a click/key/touch, so it starts silent until the first interaction. The "Sound On/Off" toggle (bottom right) is remembered in `localStorage`. Sound is also muted automatically for `prefers-reduced-motion`.

## Accessibility & motion

Slides are real links (keyboard: Tab to focus, ← → to move, Enter to open). With `prefers-reduced-motion` the scramble, sweep-in, inertia, sounds and transitions are turned off. The custom cursor only appears on devices with a mouse.

## Deploy to Vercel

1. Push to GitHub, then "Add New Project" on vercel.com and import it. No settings needed.
2. Optional: set `NEXT_PUBLIC_SITE_URL` (e.g. `https://yourname.com`) for canonical URLs, sitemap and social cards.

## TODO list (for you)

- [ ] Replace demo images (all chapters, gallery, About portrait)
- [ ] Jamshedpur, Deoghar, Kitchen, Mountains: gallery captions
- [ ] Dockway: status + link · Mysl: live link · SentinelAI: repo link · Go North: stack + play link
- [ ] Songs & Poems: lyrics / poems / voice memo in the notebook cards
- [ ] Kitchen: favourite dish
- [ ] Set `NEXT_PUBLIC_SITE_URL` in Vercel

Please also read the chapter copy once: it's written from the facts you gave me, but check it sounds like you.
