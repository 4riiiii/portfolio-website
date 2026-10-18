# Arika Kashyap — Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS, with Framer Motion and Lenis. Fonts (Instrument Serif + Inter Tight) are self-hosted via `@fontsource`, so there are no third-party font requests.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint && npm run typecheck
```

## Editing content

Everything lives in **`content/site.ts`**: name, email, links, hero text, about copy, stats, experience, awards, projects, playground cards, contact links and credits. No component edits needed.

- Any string starting with `TODO` shows on the site as a dashed orange placeholder. Replace the text and the marking disappears.
- Links with `todo: true` render a button pointing to `#`. Put in the real URL and delete the flag.
- In headlines, wrap words in `*asterisks*` to set them in the accent italic.
- **Accent colour:** change `theme.accent` at the top of `content/site.ts`. UI, favicon and social card all follow.
- **Images:** placeholder blocks are `<Placeholder />` components. Swap them for `next/image` when you have real photos.
- **CV:** drop your PDF into `public/resume.pdf`.

## Deploy to Vercel

1. Push this repo to GitHub, then "Add New Project" on vercel.com and import it. No settings needed.
2. Add an env var `NEXT_PUBLIC_SITE_URL` (e.g. `https://yourname.com`) so canonical URLs, sitemap and OG tags use your domain.

## TODO list (things only you can fill in)

**Files / config**
- [ ] Add `public/resume.pdf`
- [ ] Set `NEXT_PUBLIC_SITE_URL` in Vercel
- [ ] Choose your final accent colour (`theme.accent`)
- [ ] Replace image placeholders (About portrait, impact photos, project screenshots)

**About (`about` in site.ts)**
- [ ] Quirky one-liners #4, #5, #6
- [ ] Auditor, UCD International Students Society: dates
- [ ] Database Administrator, Vaayu Clinic: dates and one-line description

**Projects (`projects` in site.ts)**
- [ ] Mysl: live link
- [ ] Dockway: status, outcome, link
- [ ] SentinelAI: repo link (and result/placement if you want to mention one)
- [ ] PersonaSim: exact repo link, outcome sentence
- [ ] Distributed URL Shortener: description, problem, outcome, stack, repo link
- [ ] Go North: stack, play link

**Playground**
- [ ] MCU watch-order link
- [ ] Songwriting, poetry, small-build and photo cards (all `TODO` placeholders)

**Please review the copy I drafted.** I only used facts you gave me, but I wrote the surrounding sentences, so check these still sound true to you: the "problem" paragraphs for each project, the "Approach & process" descriptions, and the Impact section narrative.

## Notes

- Respects `prefers-reduced-motion` (no smooth scroll, reveals, counters or custom cursor).
- The custom cursor only appears on devices with a fine pointer and hover.
- The ambient sound is synthesised with the Web Audio API (no audio files) and is off until the visitor turns it on.
