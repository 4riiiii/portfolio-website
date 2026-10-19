# Arika Kashyap — Chapters

My personal site: a full-screen, looping carousel of "chapters" from my life, with a scrambling **ARIKA** title, soft UI sounds, and an image that expands into each chapter page.

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion. Fonts (Space Grotesk and Inter Tight) are self-hosted from `@fontsource`. The carousel, scramble effect and sound engine (Web Audio, no audio files) are hand-written.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
npm run lint && npm run typecheck
```

## Editing content

Everything lives in **`content/chapters.ts`**: site info, every chapter (carousel slide + page), About, Contact and the accent colour.

- Slide order is the order of the `chapters` array. Add a chapter by adding an object; its page is generated automatically.
- Add `hidden: true` to a chapter to keep it in the file but leave it off the site.
- On the Projects chapter, set `showProjectLinks: true` to show each project's link buttons.
- Strings starting with `TODO` render as dashed placeholders, so they're easy to spot while drafting.

## Images

Put files in `public/chapters/<slug>/` (for example `hero.jpg`, `1.jpg`) and point to them from `content/chapters.ts`:

```ts
image: "/chapters/delhi/hero.jpg",
gallery: [{ src: "/chapters/delhi/1.jpg" }],
```

`fit: "contain"` and `bg` show an illustration whole on a solid colour; `position` sets the crop focus; `galleryLayout` can be `"portrait"`, `"natural"` or the default landscape.

## Behaviour notes

- Respects `prefers-reduced-motion`: no intro, scramble, inertia, sounds or transitions.
- Sound is synthesised in the browser and stays silent until the first click or key press. The On/Off toggle is remembered.
- Slides are real links and work with the keyboard (Tab, arrow keys, Enter). The custom cursor only appears with a mouse.

## Deploy to Vercel

Import the repo on vercel.com with the default settings. Optionally set `NEXT_PUBLIC_SITE_URL` (e.g. `https://yourname.com`) for canonical URLs, the sitemap and social cards.
