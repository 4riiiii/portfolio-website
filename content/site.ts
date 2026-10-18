/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  EVERYTHING you'd want to edit lives in this file: text, links, projects.
 *
 *  Convention: any string that starts with "TODO" is rendered as a visibly
 *  marked placeholder on the site (dashed outline). Replace it with real copy
 *  and the marking disappears automatically. Links marked `todo: true` render a
 *  button that points to "#" until you swap in the real URL and delete the flag.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ── Theme ────────────────────────────────────────────────────────────────────
// The ONE accent colour. Change this hex and the whole site (UI, favicon,
// social card) follows. Warm orange by default.
export const theme = {
  accent: "#FF5B1F",
};

// ── Types ────────────────────────────────────────────────────────────────────
export type LinkItem = {
  label: string;
  href: string;
  /** Link not decided yet: button renders, but points to "#". */
  todo?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  /** Featured projects appear on the home page grid. */
  featured: boolean;
  /** Placeholder image tone until real images are added. */
  tone: "accent" | "ink" | "sand" | "mist";
  problem: string;
  built: string;
  stack: string[];
  outcome: string;
  status?: string;
  links: LinkItem[];
};

// ── Identity ─────────────────────────────────────────────────────────────────
export const site = {
  name: "Arika Kashyap",
  initials: "AK",
  role: "Software engineer & builder",
  title: "Arika Kashyap — Software engineer & builder",
  description:
    "Arika Kashyap is a Computer Science student at University College Dublin who builds software for startups, communities and the people they serve.",
  // Set NEXT_PUBLIC_SITE_URL in Vercel once you have your domain.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://arika-kashyap.vercel.app",
  email: "arikakashyap911@gmail.com",
  timezone: "Europe/Dublin",
  city: "Dublin",
  social: {
    github: "https://github.com/4riiiii",
    linkedin: "https://www.linkedin.com/in/arika-kashyap/",
  },
  // Drop your CV into /public as resume.pdf.
  resume: "/resume.pdf",
};

export const nav = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Playground", href: "/playground" },
  { label: "Contact", href: "/contact" },
];

// ── Home ─────────────────────────────────────────────────────────────────────
// Wrap words in *asterisks* to set them in the accent italic.
export const home = {
  headline:
    "Software engineer & builder making things that help people *land on their feet.*",
  sub: "CS @ UCD · Based in Dublin, from Jamshedpur.",
  workTitle: "Selected work",
  workIntro:
    "A few things I've built: some for startups, some for hackathons, all because I couldn't help myself.",
  aboutTeaser:
    "I'm Arika, a Computer Science student at UCD who builds software, leads a society of 6,500+ members, writes songs on the side and cooks more than I probably should.",
  aboutCta: "More about me",
};

// ── About ────────────────────────────────────────────────────────────────────
export const about = {
  statement:
    "Building software with *clarity, intention* and a lot of curiosity, for startups, communities and the people they serve.",

  quirks: [
    "From Jamshedpur, now in Dublin",
    "Writes songs and poetry on the side",
    "Cooks more than I probably should",
    "TODO: quirky one-liner #4 (first person, e.g. 'Will happily argue about …')",
    "TODO: quirky one-liner #5",
    "TODO: quirky one-liner #6",
  ],

  stats: [
    { value: 6500, prefix: "", suffix: "+", label: "members in the society I lead" },
    { value: 196, prefix: "", suffix: "", label: "devices collected and redistributed" },
    { value: 500, prefix: "", suffix: "+", label: "people taught computer basics" },
    { value: 5000, prefix: "€", suffix: "", label: "raised for internet and power access" },
  ],

  experience: [
    {
      role: "Software Engineering Intern",
      org: "Team Pumpkin",
      dates: "May 2026 – present",
      line: "React/JS on the frontend, Python on the backend. Built and shipped a full client website.",
    },
    {
      role: "Auditor",
      org: "UCD International Students Society",
      dates: "TODO: dates",
      line: "Elected to lead a society of 6,500+ members.",
    },
    {
      role: "Events Officer",
      org: "UCD Netsoc",
      dates: "Sept 2025 – present",
      line: "Organised an AMD office visit together with Elecsoc.",
    },
    {
      role: "Direct Sales Representative",
      org: "CPM Ireland",
      dates: "Jan – Apr 2026",
      line: "Landed at roughly 110% of the sales target.",
    },
    {
      role: "Database Administrator",
      org: "Vaayu Chest & Respiratory Clinic",
      dates: "TODO: dates",
      line: "TODO: one line on what you did here",
    },
  ],

  awards: [
    { title: "Aryabhatta Scholar", detail: "Merit scholarship" },
    { title: "Winner, PITCH Makerthon", detail: "Go North" },
    { title: "Microsoft Student Ambassador", detail: "Microsoft" },
    { title: "Member, Rewriting the Code", detail: "Community" },
  ],

  capabilities: [
    { title: "Frontend", items: ["React", "TypeScript", "Next.js"] },
    { title: "Backend", items: ["Python", "FastAPI", "Flask", "Supabase"] },
    {
      title: "AI / LLM apps",
      items: ["Claude API", "Gemini", "Google ADK", "Multi-agent systems"],
    },
    { title: "Systems", items: ["Distributed systems", "C"] },
    { title: "Product & community", items: ["Product thinking", "Community building"] },
  ],

  process: [
    {
      id: "P1",
      title: "Understand the problem",
      text: "Before I open an editor I want to know who this is for and what's actually in their way. Most of my best ideas started as someone else's headache.",
    },
    {
      id: "P2",
      title: "Ship something small",
      text: "A rough thing that works beats a perfect thing that doesn't exist. I get a tiny version in front of people as early as I can.",
    },
    {
      id: "P3",
      title: "Talk to real users",
      text: "I'd rather hear 'I got lost on this screen' from a real person than guess from my desk.",
    },
    {
      id: "P4",
      title: "Iterate fast",
      text: "Listen, change, repeat. Small loops, honest feedback, no precious feelings about last week's code.",
    },
    {
      id: "P5",
      title: "Polish what matters",
      text: "Not everything needs to shine. The first impression, the core flow and the moments people actually notice do.",
    },
    {
      id: "P6",
      title: "Launch and learn",
      text: "Shipping isn't the finish line, it's when the real feedback starts. Then I go back to P1.",
    },
  ],

  impact: {
    eyebrow: "Digital access work",
    title: "Some of my favourite work doesn't live in a repo.",
    paragraphs: [
      "Back in India I ran a device drive: 196 devices collected from people who no longer needed them and passed on to people who did. Along the way we raised around €5,000 for internet and power, because a laptop with no connection and no electricity is just a very flat paperweight.",
      "Then I spent three-plus months in Deoghar, a village, teaching computer basics to more than 500 people, kids and older people alike. Starting from 'this is how you turn it on' is the most humbling way I know to learn how much of technology is simply knowing where to begin.",
      "It's the reason I care about the people on the other side of the screen. I want the things I build to help someone land on their feet, not just look good in a demo.",
    ],
  },
};

// ── Work ─────────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    slug: "mysl",
    title: "Mysl",
    category: "AI productivity companion",
    tagline: "An AI productivity companion, and my startup.",
    featured: true,
    tone: "accent",
    problem:
      "Most productivity tools hand you a blank list and wish you luck. Mysl is my attempt at a companion that does more of the thinking-with-you, not just the storing-for-you.",
    built:
      "Mysl is a startup I'm building. So far I've built and launched the waitlist landing page, with a WebGL brain animation at its heart and Supabase handling the sign-ups. The product itself is built on React, FastAPI, Supabase and the Claude API.",
    stack: ["React", "FastAPI", "Supabase", "Claude API", "WebGL"],
    outcome:
      "The waitlist landing page is built and launched, complete with the WebGL brain animation and live Supabase integration.",
    links: [
      // TODO: add the live Mysl URL, then delete `todo: true`.
      { label: "Visit live site", href: "#", todo: true },
    ],
  },
  {
    slug: "dockway",
    title: "Dockway",
    category: "Peer-to-peer guidance platform",
    tagline: "Guidance for international students moving to Ireland, from people who've done it.",
    featured: true,
    tone: "ink",
    problem:
      "Moving to a new country comes with a hundred small questions that no official page answers well. I know because I moved to Dublin myself.",
    built:
      "A peer-to-peer guidance platform that connects international students moving to Ireland with people who've already made the move. Built with React and Supabase.",
    stack: ["React", "Supabase"],
    status: "TODO: current status (idea / prototype / live)",
    outcome: "TODO: where Dockway stands today",
    links: [
      // TODO: add the Dockway link (live site or repo), then delete `todo: true`.
      { label: "View project", href: "#", todo: true },
    ],
  },
  {
    slug: "sentinelai",
    title: "SentinelAI",
    category: "Hackathon build",
    tagline: "A team of AI agents watching for brand and data exposure.",
    featured: true,
    tone: "sand",
    problem:
      "Organisations often find out their brand or data has been exposed long after the damage is done. We wanted to see if a set of cooperating agents could keep watch for them.",
    built:
      "A multi-agent system for monitoring brand and data exposure, built at a hackathon. Python and FastAPI on the backend, with Google ADK orchestrating agents powered by the Gemini API.",
    stack: ["Python", "FastAPI", "Google ADK", "Gemini API"],
    outcome: "Designed and built end to end within a hackathon. TODO: add the result or placement if you'd like to mention it.",
    links: [
      // TODO: add the SentinelAI repo link, then delete `todo: true`.
      { label: "View repo", href: "#", todo: true },
    ],
  },
  {
    slug: "personasim",
    title: "PersonaSim",
    category: "AI safety experiment",
    tagline: "Pretending to be vulnerable, to find out when an AI responds badly.",
    featured: true,
    tone: "mist",
    problem:
      "A chatbot doesn't land the same way with everyone. A reply that's fine for one person can be harmful for someone who's vulnerable, and that's hard to spot without testing for it.",
    built:
      "PersonaSim simulates vulnerable personas holding conversations with an LLM, then classifies the AI's responses to flag the harmful ones. Built with Flask; the repo lives on my GitHub.",
    stack: ["Python", "Flask"],
    outcome: "TODO: what you learned or found, in a sentence or two",
    links: [
      // TODO: replace "#" with the exact PersonaSim repo URL (it's on github.com/4riiiii).
      { label: "View repo", href: "#", todo: true },
    ],
  },
  {
    slug: "distributed-url-shortener",
    title: "Distributed URL Shortener",
    category: "Systems project",
    tagline: "TODO: one-line description",
    featured: false,
    tone: "ink",
    problem: "TODO: what problem were you exploring?",
    built: "TODO: one-line description of what you built",
    stack: ["TODO: stack"],
    outcome: "TODO: outcome",
    links: [
      // TODO: add the repo link, then delete `todo: true`.
      { label: "View repo", href: "#", todo: true },
    ],
  },
  {
    slug: "go-north",
    title: "Go North",
    category: "Game · PITCH Makerthon winner",
    tagline: "A mystery space game where the only rule is: keep heading north.",
    featured: false,
    tone: "accent",
    problem:
      "A makerthon, a clock and a blank canvas. The idea: a game where you're lost in space, with only one direction that matters.",
    built:
      "A mystery space game where you must keep heading north while slaying monsters, which show up on screen as small blips. Less 'see everything', more 'trust your instincts'.",
    stack: ["TODO: stack"],
    outcome: "It won the PITCH makerthon.",
    links: [
      // TODO: add the play link, then delete `todo: true`.
      { label: "Play Go North", href: "#", todo: true },
    ],
  },
];

// ── Playground ───────────────────────────────────────────────────────────────
export type PlayCard = {
  title: string;
  kind: string;
  blurb: string;
  ratio: string; // CSS aspect-ratio, e.g. "4 / 5"
  tone: "accent" | "ink" | "sand" | "mist";
  link?: LinkItem;
};

export const playground = {
  title: "Playground",
  intro:
    "The looser side of the site: experiments, half-ideas and things I made just because. Nothing here is trying to impress a hiring manager (sorry).",
  cards: [
    {
      title: "MCU Watch Order",
      kind: "Experiment · HTML/CSS",
      blurb: "A website to watch the Marvel films in the right order. Built in HTML and CSS, deployed on Vercel.",
      ratio: "4 / 5",
      tone: "accent",
      // TODO: add the MCU watch-order link, then delete `todo: true`.
      link: { label: "Open site", href: "#", todo: true },
    },
    {
      title: "TODO: songwriting snippet",
      kind: "Songwriting",
      blurb: "TODO: paste a favourite lyric or line here.",
      ratio: "1 / 1",
      tone: "sand",
    },
    {
      title: "TODO: poetry snippet",
      kind: "Poetry",
      blurb: "TODO: paste a few lines of a poem here.",
      ratio: "3 / 4",
      tone: "ink",
    },
    {
      title: "TODO: small build",
      kind: "Small build",
      blurb: "TODO: a tiny project, script or tool worth a card.",
      ratio: "5 / 4",
      tone: "mist",
    },
    {
      title: "TODO: photo",
      kind: "Photo",
      blurb: "TODO: a photo you like (Dublin? Jamshedpur? dinner?).",
      ratio: "4 / 5",
      tone: "accent",
    },
    {
      title: "TODO: songwriting snippet #2",
      kind: "Songwriting",
      blurb: "TODO: another lyric or voice memo.",
      ratio: "1 / 1",
      tone: "mist",
    },
    {
      title: "TODO: small build #2",
      kind: "Small build",
      blurb: "TODO: another experiment.",
      ratio: "4 / 3",
      tone: "sand",
    },
    {
      title: "TODO: photo #2",
      kind: "Photo",
      blurb: "TODO: another photo.",
      ratio: "3 / 4",
      tone: "ink",
    },
  ] as PlayCard[],
};

// ── Contact ──────────────────────────────────────────────────────────────────
export const contact = {
  headline: "Come say *hi.*",
  intro:
    "Internship, project, collab or just a good song recommendation, my inbox is open.",
  links: [
    { label: "Drop me a line", value: site.email, kind: "email" as const, href: `mailto:${site.email}` },
    { label: "Code I've shipped", value: "github.com/4riiiii", kind: "link" as const, href: site.social.github },
    {
      label: "Career updates",
      value: "linkedin.com/in/arika-kashyap",
      kind: "link" as const,
      href: site.social.linkedin,
    },
    { label: "Grab my CV", value: "resume.pdf", kind: "link" as const, href: site.resume },
  ],
};

// ── Credits (modal) ──────────────────────────────────────────────────────────
export const credits = {
  fonts: [
    { name: "Instrument Serif", by: "Rodrigo Fuenzalida & Jordan Egstad", note: "Display headlines · SIL OFL" },
    { name: "Inter Tight", by: "Rasmus Andersson (Inter family) via Google Fonts", note: "Body & UI · SIL OFL" },
  ],
  tools: [
    "Next.js (App Router)",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Lenis (smooth scroll)",
    "Web Audio API (the ambient hum is synthesised in-browser)",
    "Vercel (hosting)",
  ],
  notes: "Layout rhythm inspired by the editorial style of huyml.co. All copy, code and design here are my own.",
};
