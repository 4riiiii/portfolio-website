# Content sheet: what's on the site, section by section

How to use: for each section, tell me **KEEP / CHANGE / REMOVE** and send the new text or photos. Anything marked ⚠ TODO is a placeholder waiting for you. Everything lives in `content/chapters.ts`, so edits are quick.

**Photos:** for every chapter I need 1 hero image (wide, ideally 1920×1080 or larger) plus the gallery images listed. Name them as shown and I'll drop them into `public/chapters/<slug>/`.

---

## A. Site-wide (appears on every page)

| Item | Currently says | Your call |
|---|---|---|
| Top-left logo | Arika Kashyap | |
| Top-right links | Chapters · About · Let's talk | |
| Footer links | GitHub (https://github.com/4riiiii) · LinkedIn (https://www.linkedin.com/in/arika-kashyap/) · Email (arikakashyap911@gmail.com) | |
| Footer right | Sound On/Off toggle + © 2026 | |
| Accent colour | #FF7A45 (warm orange; used for cursor, tags, small details) | |
| Site description (search results / link previews) | Software engineer, builder and community leader from Delhi, now in Dublin — collecting chapters, one project at a time. | |
| Fonts | Space Grotesk (titles) + Inter Tight (body) | |
| Sounds | Tick when a slide passes centre, hover blip, page-change whoosh (synthesised, no files) | |
| Cursor | Small dot; becomes an orange "View" disc over slides (desktop only) | |

---

## B. Homepage (/)

| Item | Currently says | Your call |
|---|---|---|
| Giant title | ARIKA (scrambles on load + hover) | |
| Description line | Software engineer, builder and community leader from Delhi, now in Dublin — collecting chapters, one project at a time. | |
| Carousel | 6 slides, looping forever, in the order of section D below | |
| Under each slide | Small title + category tag | |

---

## C. About (/about)

**Title:** About

**Portrait:** placeholder block labelled "Portrait placeholder". ⚠ Send a portrait (4:5 portrait orientation works best).

**Text (4 paragraphs):**

1. Hi, I'm Arika. I study Computer Science at UCD, I'm from Delhi, and Dublin's been home for a while now.
2. I genuinely love software. I build websites and apps, usually for problems my friends keep complaining about, in the hope that one of them actually changes something for someone. Some do, some live in my GitHub forever. That's the deal.
3. I'm also the Auditor of the UCD International Students Society, which mostly means I spend my days planning events, chasing sponsors, and trying to make 6,500 people from all over the world feel a little more at home.
4. When I'm not doing any of that, I write songs and poems. And when I'm really not doing anything, I scroll LinkedIn for fun. Yes, that's how bored I get.
5. This site is a bunch of chapters from my life so far. Click around, and if something catches your eye, say hi.

Also shows: email (click to copy), GitHub, LinkedIn.

**Your call:** KEEP / CHANGE / REMOVE → ______

---

## D. Chapters (the 16 slides + their pages: /chapters/<slug>)

Each chapter page has: hero image → tag + big title → **In a line** → **The story** (paragraphs) → **Facts row** → gallery → links → Prev / Next / Back.

### 01. Delhi  ·  *Roots*

- **Slug / URL:** `delhi` → /chapters/delhi
- **Hero photo needed:** `public/chapters/delhi/hero.jpg`  (currently a demo image)
- **In a line:** Where I grew up, and where I first got curious about how things work.
- **Story:**
  - Delhi is home. It's where I grew up, and where I first got curious about how things work and how to make them better.
  - I went to Delhi Public School, R.K. Puram, and spent most of those years either on the basketball court or at a Model UN conference, arguing about world problems in a borrowed blazer. Somewhere between the two, I learned how to compete, how to speak up, and how to lose without sulking (mostly).
  - It's where I learned I could eat chicken momos for the rest of my life and never complain. It's where I learned that some people feel like home. And it's where I figured out how a city can hold every version of you at once.
  - If you want to know me better, go visit Delhi.
- **Facts shown:**
  - Place: Delhi, India
  - School: Delhi Public School, R.K. Puram
  - Growing up: Basketball court & Model UN
  - Earlier jobs: Starbucks & Burger King, Delhi
- **Gallery photos needed (3):** `1.jpg`, `2.jpg`, `3.jpg`
- **Your call:** KEEP / CHANGE / REMOVE → ______

### 02. UCD  ·  *University*

- **Slug / URL:** `ucd` → /chapters/ucd
- **Hero photo needed:** `public/chapters/ucd/hero.jpg`  (currently a demo image)
- **In a line:** Computer Science at University College Dublin, 2025–2029.
- **Story:**
  - I'm studying Computer Science at UCD. First year has mostly been me playing around with languages and seeing what each one teaches you.
  - I started with Scheme, which completely rewired how I think about recursion and functions. Then came C: pointers, linked lists, file I/O, sorting algorithms, and a lot of segfaults. Python and NumPy were the fun part, where suddenly arrays and data started feeling easy.
  - I also picked up some introductory economics along the way. Outside class, I'm part of Rewriting the Code, a community for women in tech.
- **Facts shown:**
  - Degree: BSc Computer Science (Honours)
  - Years: 2025 – 2029
  - Played with: Scheme · C · Python · NumPy
- **Gallery photos needed (3):** `1.jpg`, `2.jpg`, `3.jpg`
- **Your call:** KEEP / CHANGE / REMOVE → ______

### 03. Aryabhatta Scholar  ·  *Milestone*

- **Slug / URL:** `aryabhatta-scholar` → /chapters/aryabhatta-scholar
- **Hero photo needed:** `public/chapters/aryabhatta-scholar/hero.jpg`  (currently a demo image)
- **In a line:** A merit-based scholarship I'm proud to carry.
- **Story:**
  - I'm a recipient of the Aryabhatta merit scholarship. It's one of those things that quietly changes what feels possible, and a reminder that someone believed in the work before it was finished.
  - I try to pay it forward by building things and running things that help other people get started too.
- **Facts shown:**
  - Type: Merit-based scholarship
- **Gallery photos needed (0):** 
- **Your call:** KEEP / CHANGE / REMOVE → ______

### 04. ISS Auditor  ·  *Community*

- **Slug / URL:** `iss-auditor` → /chapters/iss-auditor
- **Hero photo needed:** `public/chapters/iss-auditor/hero.jpg`  (currently a demo image)
- **In a line:** Elected Auditor of the UCD International Students Society.
- **Story:**
  - I was elected Auditor of the UCD International Students Society, a community of 6,500+ members. I was previously its PRO, so I came in already knowing how much goes on behind the scenes.
  - Day to day I handle sponsorships, partnerships, events, recruitment and socials. It's part project management, part people-wrangling, and I love it more than I expected to.
- **Facts shown:**
  - Role: Auditor (elected), previously PRO
  - Members: 6,500+
  - I handle: Sponsorships, partnerships, events, recruitment, socials
- **Gallery photos needed (3):** `1.jpg`, `2.jpg`, `3.jpg`
- **Your call:** KEEP / CHANGE / REMOVE → ______

### 05. Part Time  ·  *Work*

- **Slug / URL:** `part-time` → /chapters/part-time
- **Hero photo needed:** `public/chapters/part-time/hero.jpg`  (currently a demo image)
- **In a line:** Two part-time jobs alongside my degree: sales at CPM Ireland and software at Team Pumpkin.
- **Story:**
  - Alongside my degree, I've had two part-time jobs: one in sales, one in software.
  - From January to April 2026 I was a Direct Sales Representative at CPM Ireland. Direct sales means talking to real people, face to face, and asking for the sale. Having worked at Starbucks and Burger King in Delhi first, I already knew the rush. This was a different kind of hustle, and a very fast way to learn how to listen. I finished at roughly 110% of my sales target, which I'm quietly pleased about.
  - Since May 2026 I've been a Software Engineering Intern at Team Pumpkin, working in an agile team with a React/JavaScript frontend and a Python backend. I built and shipped a full client website, which is a very particular kind of satisfying: real people, real deadline, real feedback.
- **Facts shown:**
  - CPM Ireland: Direct Sales Representative · Jan – Apr 2026
  - Result: ~110% of sales target
  - Team Pumpkin: Software Engineering Intern · since May 2026
  - Stack: React, JavaScript, Python
- **Gallery photos needed (1):** `1.jpg`
- **Your call:** KEEP / CHANGE / REMOVE → ______

### 06. Projects  ·  *Builds*

- **Slug / URL:** `projects` → /chapters/projects
- **Hero photo needed:** `public/chapters/projects/hero.jpg`  (currently a demo image)
- **In a line:** Everything I've built, newest first.
- **Story:**
  - These are the things I've built, newest first. Some are startups, some won hackathons, and some live in my GitHub forever. That's the deal.
- **Facts shown:**
  - Latest: Ghost Tabs, a Chrome extension
  - Projects: 6
  - Won: PITCH Makerthon (Go North)
  - Built with: React · Python · FastAPI · Flask · Supabase
- **Gallery photos needed (0):** 
- **Projects listed on the page (newest first):**
  - **Ghost Tabs** (Chrome extension, latest): A Chrome extension that fades the tabs that haven't been running for a long time. Stack: **⚠ TODO: stack**. Buttons: "View Ghost Tabs" → **⚠ TODO link**
  - **Mysl** (Startup): My startup: an AI productivity companion. I built and launched the waitlist landing page, with a WebGL brain animation and Supabase behind the sign-ups. Stack: React, FastAPI, Supabase, Claude API. Buttons: "Visit Mysl" → **⚠ TODO link**
  - **Dockway** (Product): Peer-to-peer guidance for international students moving to Ireland, born from my own move here. Stack: React, Supabase. Status: **⚠ TODO: status**. Buttons: "View Dockway" → **⚠ TODO link**
  - **SentinelAI** (Hackathon): A hackathon build: a team of AI agents that monitor brand and data exposure. Stack: Python, FastAPI, Google ADK, Gemini API. Buttons: "View repo" → **⚠ TODO link**
  - **PersonaSim** (AI safety): A Flask tool that simulates vulnerable personas talking to an LLM, then classifies the harmful responses. Stack: Python, Flask. Buttons: "See it on GitHub" → https://github.com/4riiiii
  - **Go North** (Game): The winning game at the PITCH makerthon: a mystery space game where you keep heading north while slaying monsters that show up as small blips. Stack: **⚠ TODO: stack**. Buttons: "Play Go North" → **⚠ TODO link**
- **Your call:** KEEP / CHANGE / REMOVE → ______

---

## E. Let's talk (/contact)

- **Headline:** Let's talk
- **Intro:** Internship, project, collab or a good song recommendation, my inbox is open.
- **Shows:** email (click to copy, "Copied" confirmation), GitHub, LinkedIn

---

## F. Questions I need answered

1. Do you want a **CV / resume** link anywhere (footer or About)? If yes, send the PDF.
2. Chapters you'd cut or reorder? The order is exactly the list in section D.
3. Real numbers/dates you want added (e.g. Oktoberfest date, ISS Auditor term, Aryabhatta year)? I left these out because you didn't give them.
4. Links: Mysl live site, Dockway, SentinelAI repo, PersonaSim exact repo, Go North play link.
5. Songs & Poems: which lyrics/poems should I show? (They sit in 3 notebook cards.)
6. Kitchen: your favourite dish + a photo?
7. Should any chapter text be more/less playful? Tell me and I'll rewrite in that voice.
