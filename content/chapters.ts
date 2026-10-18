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
export type GalleryImage = { src: string; caption?: string };
export type LinkItem = { label: string; href: string; todo?: boolean };
export type Fact = { label: string; value: string };

export type Chapter = {
  slug: string;
  title: string;
  tag: string;
  /** Hero image: used on the carousel slide and the detail page. */
  image: string;
  /** "In a line" summary. */
  line: string;
  /** Short first-person paragraphs. */
  paragraphs: string[];
  facts: Fact[];
  gallery: GalleryImage[];
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
    "Software engineer, builder and community leader from Jamshedpur, now in Dublin — collecting chapters, one project at a time.",
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
    slug: "jamshedpur",
    title: "Jamshedpur",
    tag: "Roots",
    image: demo("jamshedpur"),
    line: "Where I grew up in India, and where everything started.",
    paragraphs: [
      "Jamshedpur is home. It's where I grew up, and it's where I first got curious about how things work and how to make them better.",
      "Before university I also worked at Starbucks and Burger King in Delhi. Nothing teaches you hustle like a lunch rush, and I still lean on what those jobs taught me about staying calm, being quick and looking after the person in front of you.",
    ],
    facts: [
      { label: "Place", value: "Jamshedpur, India" },
      { label: "Earlier jobs", value: "Starbucks & Burger King, Delhi" },
    ],
    gallery: galleryOf("jamshedpur", 3, ["TODO: caption", "TODO: caption", "TODO: caption"]),
  },
  {
    slug: "ucd",
    title: "UCD",
    tag: "University",
    image: demo("ucd"),
    line: "BSc Computer Science (Honours) at University College Dublin.",
    paragraphs: [
      "I'm studying Computer Science at UCD, 2025 to 2029. First year was a proper introduction to C: pointers, linked lists, file I/O and sorting. It's humbling in the best way.",
      "Outside lectures I'm Events Officer at UCD Netsoc, where I organised an AMD office visit together with Elecsoc. I'm also a Microsoft Student Ambassador and a member of Rewriting the Code.",
    ],
    facts: [
      { label: "Degree", value: "BSc Computer Science (Honours)" },
      { label: "Years", value: "2025 – 2029" },
      { label: "Roles", value: "Events Officer, Netsoc · Microsoft Student Ambassador" },
    ],
    gallery: galleryOf("ucd", 3),
  },
  {
    slug: "aryabhatta-scholar",
    title: "Aryabhatta Scholar",
    tag: "Milestone",
    image: demo("aryabhatta-scholar"),
    line: "A merit-based scholarship I'm proud to carry.",
    paragraphs: [
      "I'm a recipient of the Aryabhatta merit scholarship. It's one of those things that quietly changes what feels possible, and a reminder that someone believed in the work before it was finished.",
      "I try to pay it forward by building things and running things that help other people get started too.",
    ],
    facts: [{ label: "Type", value: "Merit-based scholarship" }],
    gallery: galleryOf("aryabhatta-scholar", 3),
  },
  {
    slug: "iss-auditor",
    title: "ISS Auditor",
    tag: "Community",
    image: demo("iss-auditor"),
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
    gallery: galleryOf("iss-auditor", 3),
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
    slug: "team-pumpkin",
    title: "Team Pumpkin",
    tag: "Work",
    image: demo("team-pumpkin"),
    line: "My first software engineering internship, shipping a full client website.",
    paragraphs: [
      "Since May 2026 I've been a Software Engineering Intern at Team Pumpkin, working in an agile team with a React/JavaScript frontend and a Python backend.",
      "I built and shipped a full client website, which is a very particular kind of satisfying: real people, real deadline, real feedback.",
    ],
    facts: [
      { label: "Since", value: "May 2026" },
      { label: "Role", value: "Software Engineering Intern" },
      { label: "Stack", value: "React, JavaScript, Python" },
    ],
    gallery: galleryOf("team-pumpkin", 3),
  },
  {
    slug: "mysl",
    title: "Mysl",
    tag: "Startup",
    image: demo("mysl"),
    line: "My startup: an AI productivity companion.",
    paragraphs: [
      "Mysl is the thing I'm building on the side of everything else: an AI productivity companion. It's built on React, FastAPI, Supabase and the Claude API.",
      "So far I've built and launched the waitlist landing page, complete with a WebGL brain animation. The product itself is still very much a work in progress, and I'm enjoying every messy step of it.",
    ],
    facts: [
      { label: "Type", value: "Startup" },
      { label: "Stack", value: "React, FastAPI, Supabase, Claude API" },
      { label: "Shipped", value: "Waitlist landing page with WebGL brain animation" },
    ],
    gallery: galleryOf("mysl", 3),
    links: [
      // TODO: add the live Mysl URL, then delete `todo: true`.
      { label: "Visit Mysl", href: "#", todo: true },
    ],
  },
  {
    slug: "dockway",
    title: "Dockway",
    tag: "Product",
    image: demo("dockway"),
    line: "Peer-to-peer guidance for international students moving to Ireland.",
    paragraphs: [
      "Dockway was born from my own experience moving to Ireland. There are a hundred small questions when you arrive and no single place that answers them well.",
      "So it's a peer-to-peer guidance platform: international students helping the next wave of international students. Built with React and Supabase.",
    ],
    facts: [
      { label: "Type", value: "Peer-to-peer guidance platform" },
      { label: "Stack", value: "React, Supabase" },
      { label: "Status", value: "TODO: status" },
    ],
    gallery: galleryOf("dockway", 3),
    links: [
      // TODO: add the Dockway link, then delete `todo: true`.
      { label: "View Dockway", href: "#", todo: true },
    ],
  },
  {
    slug: "sentinelai",
    title: "SentinelAI",
    tag: "Hackathon",
    image: demo("sentinelai"),
    line: "A multi-agent tool for monitoring brand and data exposure.",
    paragraphs: [
      "SentinelAI was a hackathon build: a team of cooperating AI agents that keep watch for brand and data exposure, so nobody has to find out the hard way.",
      "It runs on Python and FastAPI, with Google ADK coordinating the agents and the Gemini API doing the thinking.",
    ],
    facts: [
      { label: "Type", value: "Hackathon build" },
      { label: "Stack", value: "Python, FastAPI, Google ADK, Gemini API" },
    ],
    gallery: galleryOf("sentinelai", 3),
    links: [
      // TODO: add the SentinelAI repo link, then delete `todo: true`.
      { label: "View repo", href: "#", todo: true },
    ],
  },
  {
    slug: "personasim",
    title: "PersonaSim",
    tag: "AI Safety",
    image: demo("personasim"),
    line: "Simulating vulnerable personas to catch harmful AI responses.",
    paragraphs: [
      "A chatbot doesn't land the same way with everyone. PersonaSim is a Flask tool that simulates vulnerable personas talking to an LLM, then classifies the responses that turn out to be harmful.",
      "It's a small project with a question I care about: who gets hurt when an AI gets it wrong, and can we find out before they do?",
    ],
    facts: [
      { label: "Type", value: "AI safety experiment" },
      { label: "Stack", value: "Python, Flask" },
    ],
    gallery: galleryOf("personasim", 3),
    links: [{ label: "See it on GitHub", href: "https://github.com/4riiiii" }],
  },
  {
    slug: "go-north",
    title: "Go North",
    tag: "Game",
    image: demo("go-north"),
    line: "The winning game at the PITCH makerthon.",
    paragraphs: [
      "Go North is a mystery space game where there's only one rule: keep heading north. Along the way you slay monsters, which show up as small blips.",
      "It won the PITCH makerthon, which I'm still a little giddy about.",
    ],
    facts: [
      { label: "Event", value: "PITCH makerthon" },
      { label: "Result", value: "Winner" },
      { label: "Stack", value: "TODO: stack" },
    ],
    gallery: galleryOf("go-north", 3),
    links: [
      // TODO: add the play link, then delete `todo: true`.
      { label: "Play Go North", href: "#", todo: true },
    ],
  },
  {
    slug: "deoghar",
    title: "Deoghar",
    tag: "Impact",
    image: demo("deoghar"),
    line: "196 devices, a village classroom and the work I'm proudest of.",
    paragraphs: [
      "Before any of the software, there was a device drive back home. We collected 196 devices from people who no longer needed them and gave them to people who did, and raised around €5,000 for internet and power, because a laptop with no connection is just a very flat paperweight.",
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
  // TODO: swap for a real portrait, e.g. "/about/portrait.jpg"
  portrait: null as string | null,
  text: [
    "I'm Arika, a Computer Science student at University College Dublin, from Jamshedpur in India and now based in Dublin.",
    "I'm a software engineer and builder: I intern at Team Pumpkin, I'm building my own startup, Mysl, and I'm the elected Auditor of the UCD International Students Society.",
    "On the side I write songs and poems, and I cook more than I probably should.",
    "This site is a collection of chapters. Click around, and say hi if something catches your eye.",
  ],
};

// ── Contact ──────────────────────────────────────────────────────────────────
export const contact = {
  headline: "Let's talk",
  intro: "Internship, project, collab or a good song recommendation, my inbox is open.",
};
