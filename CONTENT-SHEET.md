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
| Carousel | 16 slides, looping forever, in the order of section D below | |
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

### 05. Oktoberfest Carnival  ·  *Event*

- **Slug / URL:** `oktoberfest-carnival` → /chapters/oktoberfest-carnival
- **Hero photo needed:** `public/chapters/oktoberfest-carnival/hero.jpg`  (currently a demo image)
- **In a line:** The big one I ran as Auditor: artists booked, 600+ attendees.
- **Story:**
  - The Oktoberfest Carnival was the biggest event I've run. We booked the artists and had 600+ people come through.
  - My biggest lesson wasn't logistics. It was delegation. I started out trying to do everything myself, and learning to hand pieces of it to other people made everything better.
- **Facts shown:**
  - Role: Auditor, event lead
  - Attendees: 600+
  - Lesson: Learn to delegate
- **Gallery photos needed (4):** `1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`
- **Your call:** KEEP / CHANGE / REMOVE → ______

### 06. Part Time  ·  *Work*

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

### 07. Mysl  ·  *Startup*

- **Slug / URL:** `mysl` → /chapters/mysl
- **Hero photo needed:** `public/chapters/mysl/hero.jpg`  (currently a demo image)
- **In a line:** My startup: an AI productivity companion.
- **Story:**
  - Mysl is the thing I'm building on the side of everything else: an AI productivity companion. It's built on React, FastAPI, Supabase and the Claude API.
  - So far I've built and launched the waitlist landing page, complete with a WebGL brain animation. The product itself is still very much a work in progress, and I'm enjoying every messy step of it.
- **Facts shown:**
  - Type: Startup
  - Stack: React, FastAPI, Supabase, Claude API
  - Shipped: Waitlist landing page with WebGL brain animation
- **Gallery photos needed (3):** `1.jpg`, `2.jpg`, `3.jpg`
- **Buttons:** "Visit Mysl" → **⚠ TODO link**
- **Your call:** KEEP / CHANGE / REMOVE → ______

### 08. Dockway  ·  *Product*

- **Slug / URL:** `dockway` → /chapters/dockway
- **Hero photo needed:** `public/chapters/dockway/hero.jpg`  (currently a demo image)
- **In a line:** Peer-to-peer guidance for international students moving to Ireland.
- **Story:**
  - Dockway was born from my own experience moving to Ireland. There are a hundred small questions when you arrive and no single place that answers them well.
  - So it's a peer-to-peer guidance platform: international students helping the next wave of international students. Built with React and Supabase.
- **Facts shown:**
  - Type: Peer-to-peer guidance platform
  - Stack: React, Supabase
  - Status: **⚠ TODO: status**
- **Gallery photos needed (3):** `1.jpg`, `2.jpg`, `3.jpg`
- **Buttons:** "View Dockway" → **⚠ TODO link**
- **Your call:** KEEP / CHANGE / REMOVE → ______

### 09. SentinelAI  ·  *Hackathon*

- **Slug / URL:** `sentinelai` → /chapters/sentinelai
- **Hero photo needed:** `public/chapters/sentinelai/hero.jpg`  (currently a demo image)
- **In a line:** A multi-agent tool for monitoring brand and data exposure.
- **Story:**
  - SentinelAI was a hackathon build: a team of cooperating AI agents that keep watch for brand and data exposure, so nobody has to find out the hard way.
  - It runs on Python and FastAPI, with Google ADK coordinating the agents and the Gemini API doing the thinking.
- **Facts shown:**
  - Type: Hackathon build
  - Stack: Python, FastAPI, Google ADK, Gemini API
- **Gallery photos needed (3):** `1.jpg`, `2.jpg`, `3.jpg`
- **Buttons:** "View repo" → **⚠ TODO link**
- **Your call:** KEEP / CHANGE / REMOVE → ______

### 10. PersonaSim  ·  *AI Safety*

- **Slug / URL:** `personasim` → /chapters/personasim
- **Hero photo needed:** `public/chapters/personasim/hero.jpg`  (currently a demo image)
- **In a line:** Simulating vulnerable personas to catch harmful AI responses.
- **Story:**
  - A chatbot doesn't land the same way with everyone. PersonaSim is a Flask tool that simulates vulnerable personas talking to an LLM, then classifies the responses that turn out to be harmful.
  - It's a small project with a question I care about: who gets hurt when an AI gets it wrong, and can we find out before they do?
- **Facts shown:**
  - Type: AI safety experiment
  - Stack: Python, Flask
- **Gallery photos needed (3):** `1.jpg`, `2.jpg`, `3.jpg`
- **Buttons:** "See it on GitHub" → https://github.com/4riiiii
- **Your call:** KEEP / CHANGE / REMOVE → ______

### 11. Go North  ·  *Game*

- **Slug / URL:** `go-north` → /chapters/go-north
- **Hero photo needed:** `public/chapters/go-north/hero.jpg`  (currently a demo image)
- **In a line:** The winning game at the PITCH makerthon.
- **Story:**
  - Go North is a mystery space game where there's only one rule: keep heading north. Along the way you slay monsters, which show up as small blips.
  - It won the PITCH makerthon, which I'm still a little giddy about.
- **Facts shown:**
  - Event: PITCH makerthon
  - Result: Winner
  - Stack: **⚠ TODO: stack**
- **Gallery photos needed (3):** `1.jpg`, `2.jpg`, `3.jpg`
- **Buttons:** "Play Go North" → **⚠ TODO link**
- **Your call:** KEEP / CHANGE / REMOVE → ______

### 12. Deoghar  ·  *Impact*

- **Slug / URL:** `deoghar` → /chapters/deoghar
- **Hero photo needed:** `public/chapters/deoghar/hero.jpg`  (currently a demo image)
- **In a line:** 196 devices, a village classroom and the work I'm proudest of.
- **Story:**
  - Before any of the software, there was a device drive in India. We collected 196 devices from people who no longer needed them and gave them to people who did, and raised around €5,000 for internet and power, because a laptop with no connection is just a very flat paperweight.
  - Then I went to Deoghar, a village, and stayed for more than three months to teach computer basics. Over 500 people came through, kids and older people alike. Some had never touched a computer. We started from 'this is how you turn it on'.
  - I think about those months constantly. They're the reason I care so much about the person on the other side of the screen, and why I want the things I build to help someone land on their feet.
- **Facts shown:**
  - Devices: 196 collected and given on
  - Raised: ~€5,000 for internet and power
  - Time in Deoghar: 3+ months
  - Taught: 500+ kids and older people
- **Gallery photos needed (4):** `1.jpg` (caption: **⚠ TODO: caption**), `2.jpg` (caption: **⚠ TODO: caption**), `3.jpg` (caption: **⚠ TODO: caption**), `4.jpg` (caption: **⚠ TODO: caption**)
- **Your call:** KEEP / CHANGE / REMOVE → ______

### 13. DNA Data Storage  ·  *Research*

- **Slug / URL:** `dna-data-storage` → /chapters/dna-data-storage
- **Hero photo needed:** `public/chapters/dna-data-storage/hero.jpg`  (currently a demo image)
- **In a line:** A research rabbit hole I'm exploring outside coursework.
- **Story:**
  - Outside lectures I've fallen down a research rabbit hole: DNA data storage, the idea of keeping information in molecules instead of drives.
  - I'm still early and still curious. This one's for the love of learning, not for a grade.
- **Facts shown:**
  - Type: Research interest
  - Where: Outside coursework
- **Gallery photos needed (3):** `1.jpg`, `2.jpg`, `3.jpg`
- **Your call:** KEEP / CHANGE / REMOVE → ______

### 14. Songs & Poems  ·  *Creative*

- **Slug / URL:** `songs-and-poems` → /chapters/songs-and-poems
- **Hero photo needed:** `public/chapters/songs-and-poems/hero.jpg`  (currently a demo image)
- **In a line:** Confessional, folk-style songs and poetry.
- **Story:**
  - I write songs and poetry, mostly confessional and folk-flavoured. It's where the feelings that don't fit in a commit message go.
  - My influences are Elliott Smith and Phoebe Bridgers: quiet voices, honest lines, the kind of songs that sound like a secret.
- **Facts shown:**
  - Style: Confessional, folk
  - Influences: Elliott Smith, Phoebe Bridgers
- **Gallery photos needed (3):** `1.jpg`, `2.jpg`, `3.jpg`
- **Notebook cards (placeholders for your writing):**
  - Lyric: **⚠ TODO: paste a favourite lyric here**
  - Poem: **⚠ TODO: paste a few lines of a poem here**
  - Voice memo: **⚠ TODO: link or note about a song in progress**
- **Your call:** KEEP / CHANGE / REMOVE → ______

### 15. Kitchen  ·  *Personal*

- **Slug / URL:** `kitchen` → /chapters/kitchen
- **Hero photo needed:** `public/chapters/kitchen/hero.jpg`  (currently a demo image)
- **In a line:** I cook more than I probably should.
- **Story:**
  - I love cooking. It's the one place where I can make something, taste the result immediately and not need a code review.
  - It's also a very good excuse to feed people.
- **Facts shown:**
  - Favourite dish: **⚠ TODO: add a favourite dish**
- **Gallery photos needed (3):** `1.jpg` (caption: **⚠ TODO: caption**), `2.jpg` (caption: **⚠ TODO: caption**), `3.jpg` (caption: **⚠ TODO: caption**)
- **Your call:** KEEP / CHANGE / REMOVE → ______

### 16. Mountains  ·  *Travel*

- **Slug / URL:** `mountains` → /chapters/mountains
- **Hero photo needed:** `public/chapters/mountains/hero.jpg`  (currently a demo image)
- **In a line:** Trips through the Uttarakhand and Himachal mountains.
- **Story:**
  - I love a good mountain trip. I've travelled through the Uttarakhand and Himachal mountains, and I'm always happy to be back up there.
  - Captions and favourite memories to come.
- **Facts shown:**
  - Places: Uttarakhand, Himachal
- **Gallery photos needed (4):** `1.jpg` (caption: **⚠ TODO: caption**), `2.jpg` (caption: **⚠ TODO: caption**), `3.jpg` (caption: **⚠ TODO: caption**), `4.jpg` (caption: **⚠ TODO: caption**)
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
