# Harassment-Free Workplace

> **Respect. Safety. Dignity at Work.**

An attractive, single-page awareness website about creating a **harassment-free workplace** — what workplace harassment is, its types and impact, India's **POSH Act, 2013**, how to speak up, and how employees, managers and organisations can prevent it.

Built with **React + Vite**, organised as small, reusable components.

---

## 📌 About the Project

Workplace harassment is any unwelcome behaviour, comment or action that creates a hostile, intimidating or offensive working environment. This project presents the topic as a clean, image-rich landing page built for awareness — with Indian workplace imagery, a light warm colour palette, and a low-opacity background layer so the content stays easy to read.

## ✨ Features

- **Hero section** with a clear message — *Respect is Non-Negotiable*
- **Key statistics** — including the ILO finding that more than 1 in 5 (22.8%) employed people have experienced workplace violence or harassment
- **6 types of harassment** — sexual, verbal, psychological/bullying, physical, discriminatory and cyber, with examples
- **Impact section** — on individuals, teams and the organisation
- **Speak Up guide** — 5 practical steps to report harassment
- **Bystander intervention** — the 5 D's (Direct, Distract, Delegate, Document, Delay)
- **Role-wise prevention tabs** — for Employees, Managers and Organisations & HR (React state)
- **POSH Act, 2013 deep-dive** — ICC, complaint timelines, employer duties and penalties
- **"Spot It" scenario check** — 5 short interactive scenarios (React state)
- **Myths vs Facts** and **FAQs**
- **Help contacts** — 112 (Emergency), 1091 / 181 (Women Helpline), NCW and the SHe-Box portal
- Fully **responsive** — works on desktop and mobile, with light/dark colour-scheme support

## 🗂️ Project Architecture

```
workplace_harassment-/
├── index.html                  # Vite entry page (fonts, meta, #root)
├── package.json
├── vite.config.js              # Vite + React plugin, base './'
├── README.md
├── .gitignore                  # node_modules/, dist/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto build + deploy to GitHub Pages on push to main
├── docs/
│   └── topic-deep-dive.md      # Detailed topic notes: definitions, types, POSH Act, prevention
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Page composition (all sections in order)
    ├── index.css               # Complete stylesheet (light warm palette,
    │                           #   low-opacity background-image layers)
    ├── data/
    │   └── scenarios.js        # Data for the "Spot It" scenario check
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── WhatIs.jsx          # What is workplace harassment?
        ├── Types.jsx           # 6 types of harassment
        ├── Impact.jsx
        ├── SpeakUp.jsx         # Step-by-step guide + scenario check (useState)
        ├── Roles.jsx           # Prevention tabs — Employees / Managers / Organisations (useState)
        ├── Law.jsx             # POSH Act, 2013
        ├── Faq.jsx
        ├── Help.jsx            # Helplines & support
        └── Footer.jsx
```

**Design notes**

- Indian professionals in all photographs — no stock foreign imagery
- Background photographs are layered at **5–14% opacity** behind sections so text remains fully readable
- Colour palette: soft peach background, deep maroon primary, terracotta accents, marigold highlights
- Images are embedded in the page/styles for portability (Google Fonts requires an internet connection)

## 🚀 How to Run

**Prerequisite:** Node.js 18 or newer

```bash
# Clone the repository
git clone https://github.com/jomkarrr/workplace_harassment-.git
cd workplace_harassment-

# Install dependencies
npm install

# Start the development server (http://localhost:5173)
npm run dev
```

**Production build**

```bash
npm run build     # outputs the static site to dist/
npm run preview   # preview the production build locally
```

## 🌐 Deployment — GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that
builds the Vite app and deploys it to **GitHub Pages** on every push to `main`.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
After that, every push to `main` automatically publishes the latest build.

## 🛠️ Tech Stack

- **React 18** — component-based UI, `useState` for the tabs and scenario check
- **Vite 5** — dev server and production build
- **CSS3 (Vanilla)** — custom properties, responsive layout, background layers; no CSS framework
- **JavaScript (ES Modules / JSX)**
- **Google Fonts** — DM Serif Display + Plus Jakarta Sans
- **GitHub Actions** — CI build + GitHub Pages deployment

## 📚 Content Sources

- ILO — *Violence and Harassment Convention, 2019 (No. 190)* and the ILO global study on experiences of violence and harassment at work
- The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) **Act, 2013** (POSH Act), Government of India
- Supreme Court of India — *Vishaka v. State of Rajasthan* (1997) Guidelines

> This website is for **awareness and educational purposes only** and is not legal advice. If you are facing harassment, please contact your Internal Complaints Committee (ICC), HR, or call **112**.

## 👤 Author

**Omkar Jadhav** — B.Tech CSE (2nd Year), VIT-AP
GitHub: [@jomkarrr](https://github.com/jomkarrr)

## 📄 License

This project is created for educational purposes. You may reuse the structure and content with credit.
