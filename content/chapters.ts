/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  Everything you'd want to edit lives here: site info, the 16 chapters (slides
 *  + detail pages), About and Contact copy.
 *
 *  SWAPPING IMAGES
 *  Right now every image is a demo from picsum.photos. To use your own photos,
 *  put files in /public/chapters/<slug>/ and change the paths below, e.g.
 *      image: "/chapters/mysl/hero.jpg"
 *      gallery: [{ src: "/chapters/mysl/1.jpg" }, ...]
 *  (or delete `demo(...)` and write the path directly.)
 *
 *  Any string starting with "TODO" renders as a visibly marked placeholder.
 *  Links with `todo: true` render a button that points to "#".
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ── Demo image helpers (remove once you add real photos) ─────────────────────
const demo = (seed: string, w = 1920, h = 1080) => `https://picsum.photos/seed/${seed}/${w}/${h}`;
const galleryOf = (slug: string, n = 3, captions: string[] = []): GalleryImage[] =>
  Array.from({ length: n }, (_, i) => ({
    src: demo(`${slug}-${i + 2}`, 1600, 1000),
    caption: captions[i],
  }));

// ── Types ────────────────────────────────────────────────────────────────────
export type GalleryImage = { src: string; caption?: string; /** Natural aspect ratio, e.g. "4 / 3" (used by the "natural" gallery layout). */ ratio?: string; /** CSS object-position, e.g. "50% 30%" */ position?: string };
export type LinkItem = { label: string; href: string; todo?: boolean };
export type Fact = { label: string; value: string };

/** One project inside a combined "projects" chapter. */
export type ProjectEntry = {
  name: string;
  /** Short category, e.g. "Chrome extension". */
  tag: string;
  blurb: string;
  stack?: string[];
  status?: string;
  /** Marks the newest project. */
  latest?: boolean;
  links?: LinkItem[];
};

export type Chapter = {
  slug: string;
  title: string;
  tag: string;
  /** Hero image: used on the carousel slide and the detail page. */
  image: string;
  /** Optional CSS object-position for the hero crop, e.g. "50% 65%". */
  position?: string;
  /** How the hero image fills its frame. "contain" shows the whole image (for stickers / illustrations). Default "cover". */
  fit?: "cover" | "contain";
  /** Background colour behind a "contain" image. */
  bg?: string;
  /** "portrait" = tall tiles (phone photos); "natural" = masonry, each photo at its own aspect ratio (set `ratio` per image); default "landscape". */
  galleryLayout?: "portrait" | "landscape" | "natural";
  /** "In a line" summary. */
  line: string;
  /** Short first-person paragraphs. */
  paragraphs: string[];
  facts: Fact[];
  gallery: GalleryImage[];
  /** A list of projects shown on the chapter page (for combined chapters). */
  projects?: ProjectEntry[];
  /** Set to false to hide the link buttons on a projects list (links stay in the data, ready to switch back on). */
  showProjectLinks?: boolean;
  links?: LinkItem[];
  /** Placeholder cards for things you'll add later (lyrics, dishes…). */
  notebook?: { label: string; text: string }[];
};

// ── Site ─────────────────────────────────────────────────────────────────────
export const theme = {
  /** The single subtle accent colour (cursor, small details). */
  accent: "#FF7A45",
};

export const site = {
  name: "Arika Kashyap",
  display: "ARIKA",
  description:
    "Software engineer, builder and community leader from Delhi, now in Dublin — collecting chapters, one project at a time.",
  email: "arikakashyap911@gmail.com",
  github: "https://github.com/4riiiii",
  linkedin: "https://www.linkedin.com/in/arika-kashyap/",
  // Set NEXT_PUBLIC_SITE_URL in Vercel once you have a domain.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://arika-kashyap.vercel.app",
  year: 2026,
};

export const nav = [
  { label: "Chapters", href: "/" },
  { label: "About", href: "/about" },
  { label: "Let's talk", href: "/contact" },
];

// ── Chapters (carousel order) ────────────────────────────────────────────────
export const chapters: Chapter[] = [
  {
    slug: "delhi",
    title: "Delhi",
    tag: "Roots",
    image: "/chapters/delhi/hero.jpg",
    position: "50% 62%",
    galleryLayout: "portrait",
    line: "Where I grew up, and where I first got curious about how things work.",
    paragraphs: [
      "Delhi is home. It's where I grew up, and where I first got curious about how things work and how to make them better.",
      "I went to Delhi Public School, R.K. Puram, and spent most of those years either on the basketball court or at a Model UN conference, arguing about world problems in a borrowed blazer. Somewhere between the two, I learned how to compete, how to speak up, and how to lose without sulking (mostly).",
      "It's where I learned I could eat chicken momos for the rest of my life and never complain. It's where I learned that some people feel like home. And it's where I figured out how a city can hold every version of you at once.",
      "If you want to know me better, go visit Delhi.",
    ],
    facts: [
      { label: "Place", value: "Delhi, India" },
      { label: "School", value: "Delhi Public School, R.K. Puram" },
      { label: "Growing up", value: "Basketball court & Model UN" },
      { label: "Earlier jobs", value: "Starbucks & Burger King, Delhi" },
    ],
    gallery: [
      { src: "/chapters/delhi/1.jpg", position: "50% 70%" },
      { src: "/chapters/delhi/2.jpg", position: "50% 55%" },
      { src: "/chapters/delhi/3.jpg", position: "50% 30%" },
    ],
  },
  {
    slug: "ucd",
    title: "UCD",
    tag: "University",
    image: "/chapters/ucd/hero.jpg",
    position: "50% 62%",
    galleryLayout: "portrait",
    line: "Computer Science at University College Dublin, 2025–2029.",
    paragraphs: [
      "I'm studying Computer Science at UCD. First year has mostly been me playing around with languages and seeing what each one teaches you.",
      "I started with Scheme, which completely rewired how I think about recursion and functions. Then came C: pointers, linked lists, file I/O, sorting algorithms, and a lot of segfaults. Python and NumPy were the fun part, where suddenly arrays and data started feeling easy.",
      "I also picked up some introductory economics along the way. Outside class, I'm part of Rewriting the Code, a community for women in tech.",
    ],
    facts: [
      { label: "Degree", value: "BSc Computer Science (Honours)" },
      { label: "Years", value: "2025 – 2029" },
      { label: "Played with", value: "Scheme · C · Python · NumPy" },
    ],
    gallery: [
      { src: "/chapters/ucd/1.jpg", position: "50% 40%" },
      { src: "/chapters/ucd/2.jpg" },
      { src: "/chapters/ucd/3.jpg", position: "50% 60%" },
    ],
  },
  {
    slug: "aryabhatta-scholar",
    title: "Aryabhatta Scholar",
    tag: "Milestone",
    image: "/chapters/aryabhatta-scholar/hero.png",
    fit: "contain",
    bg: "#ffffff",
    line: "A merit-based scholarship I'm proud to carry.",
    paragraphs: [
      "I'm a recipient of the Aryabhatta merit scholarship. It's one of those things that quietly changes what feels possible, and a reminder that someone believed in the work before it was finished.",
      "I try to pay it forward by building things and running things that help other people get started too.",
    ],
    facts: [{ label: "Type", value: "Merit-based scholarship" }],
    gallery: [],
  },
  {
    slug: "iss-auditor",
    title: "ISS Auditor",
    tag: "Community",
    image: "/chapters/iss-auditor/hero.jpg",
    position: "50% 35%",
    galleryLayout: "natural",
    line: "Elected Auditor of the UCD International Students Society.",
    paragraphs: [
      "I was elected Auditor of the UCD International Students Society, a community of 6,500+ members. I was previously its PRO, so I came in already knowing how much goes on behind the scenes.",
      "Day to day I handle sponsorships, partnerships, events, recruitment and socials. It's part project management, part people-wrangling, and I love it more than I expected to.",
    ],
    facts: [
      { label: "Role", value: "Auditor (elected), previously PRO" },
      { label: "Members", value: "6,500+" },
      { label: "I handle", value: "Sponsorships, partnerships, events, recruitment, socials" },
    ],
    gallery: [
      { src: "/chapters/iss-auditor/1.jpg", ratio: "3 / 4" },
      { src: "/chapters/iss-auditor/2.jpg", ratio: "3 / 4", position: "50% 60%" },
      { src: "/chapters/iss-auditor/3.jpg", ratio: "16 / 9", position: "50% 85%" },
    ],
  },
  {
    slug: "oktoberfest-carnival",
    title: "Oktoberfest Carnival",
    tag: "Event",
    image: demo("oktoberfest-carnival"),
    line: "The big one I ran as Auditor: artists booked, 600+ attendees.",
    paragraphs: [
      "The Oktoberfest Carnival was the biggest event I've run. We booked the artists and had 600+ people come through.",
      "My biggest lesson wasn't logistics. It was delegation. I started out trying to do everything myself, and learning to hand pieces of it to other people made everything better.",
    ],
    facts: [
      { label: "Role", value: "Auditor, event lead" },
      { label: "Attendees", value: "600+" },
      { label: "Lesson", value: "Learn to delegate" },
    ],
    gallery: galleryOf("oktoberfest-carnival", 4),
  },
  {
    slug: "part-time",
    title: "Part Time",
    tag: "Work",
    image: "/chapters/part-time/hero.jpg",
    position: "50% 30%",
    galleryLayout: "natural",
    line: "Two part-time jobs alongside my degree: sales at CPM Ireland and software at Team Pumpkin.",
    paragraphs: [
      "Alongside my degree, I've had two part-time jobs: one in sales, one in software.",
      "From January to April 2026 I was a Direct Sales Representative at CPM Ireland. Direct sales means talking to real people, face to face, and asking for the sale. Having worked at Starbucks and Burger King in Delhi first, I already knew the rush. This was a different kind of hustle, and a very fast way to learn how to listen. I finished at roughly 110% of my sales target, which I'm quietly pleased about.",
      "Since May 2026 I've been a Software Engineering Intern at Team Pumpkin, working in an agile team with a React/JavaScript frontend and a Python backend. I built and shipped a full client website, which is a very particular kind of satisfying: real people, real deadline, real feedback.",
    ],
    facts: [
      { label: "CPM Ireland", value: "Direct Sales Representative · Jan – Apr 2026" },
      { label: "Result", value: "~110% of sales target" },
      { label: "Team Pumpkin", value: "Software Engineering Intern · since May 2026" },
      { label: "Stack", value: "React, JavaScript, Python" },
    ],
    gallery: [{ src: "/chapters/part-time/1.jpg", ratio: "3 / 4" }],
  },
  {
    slug: "projects",
    title: "Projects",
    tag: "Builds",
    image: "/chapters/projects/hero.jpg",
    position: "20% 35%",
    line: "Everything I've built, newest first.",
    paragraphs: [
      "These are the things I've built, newest first. Some are startups, some won hackathons, and some live in my GitHub forever. That's the deal.",
    ],
    facts: [
      { label: "Latest", value: "Ghost Tabs, a Chrome extension" },
      { label: "Projects", value: "6" },
      { label: "Won", value: "PITCH Makerthon (Go North)" },
      { label: "Built with", value: "React · Python · FastAPI · Flask · Supabase" },
    ],
    gallery: [],
    // Link buttons hidden for now. Set to true once the links are filled in.
    showProjectLinks: false,
    projects: [
      {
        name: "Ghost Tabs",
        tag: "Chrome extension",
        latest: true,
        blurb: "A Chrome extension that fades the tabs that haven't been running for a long time.",
        stack: ["TODO: stack"],
        links: [
          // TODO: add the Ghost Tabs link (Chrome Web Store or repo), then delete `todo: true`.
          { label: "View Ghost Tabs", href: "#", todo: true },
        ],
      },
      {
        name: "Mysl",
        tag: "Startup",
        blurb: "My startup: an AI productivity companion. I built and launched the waitlist landing page, with a WebGL brain animation and Supabase behind the sign-ups.",
        stack: ["React", "FastAPI", "Supabase", "Claude API"],
        links: [
          // TODO: add the live Mysl URL, then delete `todo: true`.
          { label: "Visit Mysl", href: "#", todo: true },
        ],
      },
      {
        name: "Dockway",
        tag: "Product",
        blurb: "Peer-to-peer guidance for international students moving to Ireland, born from my own move here.",
        stack: ["React", "Supabase"],
        status: "TODO: status",
        links: [
          // TODO: add the Dockway link, then delete `todo: true`.
          { label: "View Dockway", href: "#", todo: true },
        ],
      },
      {
        name: "SentinelAI",
        tag: "Hackathon",
        blurb: "A hackathon build: a team of AI agents that monitor brand and data exposure.",
        stack: ["Python", "FastAPI", "Google ADK", "Gemini API"],
        links: [
          // TODO: add the SentinelAI repo link, then delete `todo: true`.
          { label: "View repo", href: "#", todo: true },
        ],
      },
      {
        name: "PersonaSim",
        tag: "AI safety",
        blurb: "A Flask tool that simulates vulnerable personas talking to an LLM, then classifies the harmful responses.",
        stack: ["Python", "Flask"],
        links: [{ label: "See it on GitHub", href: "https://github.com/4riiiii" }],
      },
      {
        name: "Go North",
        tag: "Game",
        blurb: "The winning game at the PITCH makerthon: a mystery space game where you keep heading north while slaying monsters that show up as small blips.",
        stack: ["TODO: stack"],
        links: [
          // TODO: add the play link, then delete `todo: true`.
          { label: "Play Go North", href: "#", todo: true },
        ],
      },
    ],
  },
  {
    slug: "deoghar",
    title: "Deoghar",
    tag: "Impact",
    image: demo("deoghar"),
    line: "196 devices, a village classroom and the work I'm proudest of.",
    paragraphs: [
      "Before any of the software, there was a device drive in India. We collected 196 devices from people who no longer needed them and gave them to people who did, and raised around €5,000 for internet and power, because a laptop with no connection is just a very flat paperweight.",
      "Then I went to Deoghar, a village, and stayed for more than three months to teach computer basics. Over 500 people came through, kids and older people alike. Some had never touched a computer. We started from 'this is how you turn it on'.",
      "I think about those months constantly. They're the reason I care so much about the person on the other side of the screen, and why I want the things I build to help someone land on their feet.",
    ],
    facts: [
      { label: "Devices", value: "196 collected and given on" },
      { label: "Raised", value: "~€5,000 for internet and power" },
      { label: "Time in Deoghar", value: "3+ months" },
      { label: "Taught", value: "500+ kids and older people" },
    ],
    gallery: galleryOf("deoghar", 4, ["TODO: caption", "TODO: caption", "TODO: caption", "TODO: caption"]),
  },
  {
    slug: "dna-data-storage",
    title: "DNA Data Storage",
    tag: "Research",
    image: demo("dna-data-storage"),
    line: "A research rabbit hole I'm exploring outside coursework.",
    paragraphs: [
      "Outside lectures I've fallen down a research rabbit hole: DNA data storage, the idea of keeping information in molecules instead of drives.",
      "I'm still early and still curious. This one's for the love of learning, not for a grade.",
    ],
    facts: [
      { label: "Type", value: "Research interest" },
      { label: "Where", value: "Outside coursework" },
    ],
    gallery: galleryOf("dna-data-storage", 3),
  },
  {
    slug: "songs-and-poems",
    title: "Songs & Poems",
    tag: "Creative",
    image: demo("songs-and-poems"),
    line: "Confessional, folk-style songs and poetry.",
    paragraphs: [
      "I write songs and poetry, mostly confessional and folk-flavoured. It's where the feelings that don't fit in a commit message go.",
      "My influences are Elliott Smith and Phoebe Bridgers: quiet voices, honest lines, the kind of songs that sound like a secret.",
    ],
    facts: [
      { label: "Style", value: "Confessional, folk" },
      { label: "Influences", value: "Elliott Smith, Phoebe Bridgers" },
    ],
    gallery: galleryOf("songs-and-poems", 3),
    notebook: [
      { label: "Lyric", text: "TODO: paste a favourite lyric here" },
      { label: "Poem", text: "TODO: paste a few lines of a poem here" },
      { label: "Voice memo", text: "TODO: link or note about a song in progress" },
    ],
  },
  {
    slug: "kitchen",
    title: "Kitchen",
    tag: "Personal",
    image: demo("kitchen"),
    line: "I cook more than I probably should.",
    paragraphs: [
      "I love cooking. It's the one place where I can make something, taste the result immediately and not need a code review.",
      "It's also a very good excuse to feed people.",
    ],
    facts: [{ label: "Favourite dish", value: "TODO: add a favourite dish" }],
    gallery: galleryOf("kitchen", 3, ["TODO: caption", "TODO: caption", "TODO: caption"]),
  },
  {
    slug: "mountains",
    title: "Mountains",
    tag: "Travel",
    image: demo("mountains"),
    line: "Trips through the Uttarakhand and Himachal mountains.",
    paragraphs: [
      "I love a good mountain trip. I've travelled through the Uttarakhand and Himachal mountains, and I'm always happy to be back up there.",
      "Captions and favourite memories to come.",
    ],
    facts: [{ label: "Places", value: "Uttarakhand, Himachal" }],
    gallery: galleryOf("mountains", 4, ["TODO: caption", "TODO: caption", "TODO: caption", "TODO: caption"]),
  },
];

// ── About ────────────────────────────────────────────────────────────────────
export const about = {
  title: "About",
  portraitLabel: "Portrait placeholder",
  portrait: "/about/portrait.jpg" as string | null,
  text: [
    "Hi, I'm Arika. I study Computer Science at UCD, I'm from Delhi, and Dublin's been home for a while now.",
    "I genuinely love software. I build websites and apps, usually for problems my friends keep complaining about, in the hope that one of them actually changes something for someone. Some do, some live in my GitHub forever. That's the deal.",
    "I'm also the Auditor of the UCD International Students Society, which mostly means I spend my days planning events, chasing sponsors, and trying to make 6,500 people from all over the world feel a little more at home.",
    "When I'm not doing any of that, I write songs and poems. And when I'm really not doing anything, I scroll LinkedIn for fun. Yes, that's how bored I get.",
    "This site is a bunch of chapters from my life so far. Click around, and if something catches your eye, say hi.",
  ],
};

// ── Contact ──────────────────────────────────────────────────────────────────
export const contact = {
  headline: "Let's talk",
  intro: "Internship, project, collab or a good song recommendation, my inbox is open.",
};
