<div align="center">

# 🛡️ Harassment-Free Workplace

### *Respect. Safety. Dignity at Work.*

An interactive awareness website on creating a workplace where every voice is
heard **without fear** — covering the types and impact of harassment, India's
**POSH Act 2013**, a practical speak-up guide, and prevention for employees,
managers and organisations.

<br/>

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-c2512f?style=for-the-badge)](https://jomkarrr.github.io/workplace_harassment-/)
[![Deploy Status](https://github.com/jomkarrr/workplace_harassment-/actions/workflows/deploy.yml/badge.svg)](https://github.com/jomkarrr/workplace_harassment-/actions/workflows/deploy.yml)

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Vanilla-1572B6?style=flat-square&logo=css3)
![GitHub Pages](https://img.shields.io/badge/Hosted-GitHub_Pages-222222?style=flat-square&logo=githubpages)

</div>

---

## 📑 Table of Contents

- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Sections of the Website](#-sections-of-the-website)
- [Tech Stack](#️-tech-stack)
- [Project Architecture](#️-project-architecture)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [Content Sources](#-content-sources)
- [Author](#-author)

---

## 📌 About the Project

Workplace harassment is any unwelcome behaviour, comment or action that creates a
hostile, intimidating or offensive working environment. It is far more common than
most people think — the **ILO's global study** found that **more than 1 in 5 (22.8%)
employed people** have experienced at least one form of violence or harassment at
work during their working life.

This project turns that serious topic into a clean, image-rich, single-page
experience built for **awareness and education**:

- 🇮🇳 **Indian context first** — Indian workplace imagery and India's POSH Act, 2013
- 🎨 **Light, warm design** — soft peach background, deep maroon and terracotta accents, with background photographs layered at just **5–14% opacity** so the content always stays readable
- ⚛️ **Component-based React UI** — every section is an independent, reusable component
- 📱 **Fully responsive** — desktop and mobile, with light/dark colour-scheme support

> [!IMPORTANT]
> This website is for **awareness and educational purposes only** and is not legal
> advice. If you are facing harassment, please contact your Internal Complaints
> Committee (ICC), HR, or call **112**.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🎯 **"Spot It" Scenario Check** | 5 real-world style situations — decide *harassment or not* and get instant, explained feedback (React state) |
| 🗂️ **Role-Wise Prevention Tabs** | Separate, practical guidance for **Employees**, **Managers** and **Organisations & HR** |
| 📢 **Speak-Up Guide** | A 5-step guide to recognising, documenting and reporting harassment safely |
| 🖐️ **Bystander Intervention** | The **5 D's** — Direct, Distract, Delegate, Document, Delay |
| ⚖️ **POSH Act Deep-Dive** | ICC composition, complaint timelines, employer duties and penalties, explained in plain language |
| 💡 **Myths vs Facts & FAQs** | The most common misconceptions, answered clearly |
| ☎️ **Help Resources** | 112 (Emergency) · 1091 / 181 (Women Helpline) · NCW · SHe-Box portal |

---

## 🧭 Sections of the Website

| # | Section | What it covers |
|---|---|---|
| 1 | **Hero** | The core message — respect is the default, not the exception |
| 2 | **What is Harassment?** | Definition, intent vs impact, quid pro quo & hostile work environment |
| 3 | **6 Types** | Sexual · Verbal · Psychological/Bullying · Physical · Discriminatory · Cyber |
| 4 | **Impact** | Effects on individuals, witnesses & teams, and the organisation |
| 5 | **Speak Up** | Step-by-step reporting guide + the scenario check |
| 6 | **Prevention Roles** | What employees, managers and organisations each must do |
| 7 | **The Law** | POSH Act 2013 (India) + ILO Convention 190 |
| 8 | **FAQ & Help** | Common questions and real helplines |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | Component-based UI; `useState` powers the tabs and the scenario check |
| **Vite 5** | Lightning-fast dev server and optimised production build |
| **JavaScript (JSX / ES Modules)** | Application logic |
| **CSS3 (Vanilla)** | Custom properties, responsive layout, low-opacity background layers — *no CSS framework* |
| **Google Fonts** | DM Serif Display (headings) + Plus Jakarta Sans (body) |
| **GitHub Actions + GitHub Pages** | Automatic build and deployment on every push to `main` |

---

## 🗂️ Project Architecture

```
workplace_harassment-/
│
├── index.html                  # Vite entry page (fonts, meta, #root)
├── package.json                # Dependencies & scripts
├── package-lock.json
├── vite.config.js              # Vite + React plugin · base './'
├── README.md
├── .gitignore
│
├── .github/workflows/
│   └── deploy.yml              # CI: build + deploy to GitHub Pages
│
├── docs/
│   └── topic-deep-dive.md      # Detailed topic notes (definitions, POSH Act, prevention)
│
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Page composition — all sections in order
    ├── index.css               # Complete stylesheet
    │
    ├── data/
    │   └── scenarios.js        # Data for the "Spot It" scenario check
    │
    └── components/
        ├── Navbar.jsx          # Sticky navigation
        ├── Hero.jsx            # Hero section
        ├── WhatIs.jsx          # What is workplace harassment?
        ├── Types.jsx           # 6 types of harassment
        ├── Impact.jsx          # Impact on people, teams & business
        ├── SpeakUp.jsx         # Reporting steps + scenario check (useState)
        ├── Roles.jsx           # Prevention tabs (useState)
        ├── Law.jsx             # POSH Act, 2013
        ├── Faq.jsx             # Myths vs facts & FAQs
        ├── Help.jsx            # Helplines & support
        └── Footer.jsx
```

---

## 🚀 Getting Started

**Prerequisite:** [Node.js](https://nodejs.org/) 18 or newer

```bash
# 1. Clone the repository
git clone https://github.com/jomkarrr/workplace_harassment-.git

# 2. Move into the project folder
cd workplace_harassment-

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Then open **http://localhost:5173** in your browser. 🎉

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server with hot reload |
| `npm run build` | Build the production site into the `dist/` folder |
| `npm run preview` | Preview the production build locally |

---

## 🌐 Deployment

The site is live on **GitHub Pages**:

### 👉 https://jomkarrr.github.io/workplace_harassment-/

Deployment is fully automated with **GitHub Actions**
(`.github/workflows/deploy.yml`): every push to `main` installs dependencies,
builds the Vite app and publishes the latest version — no manual steps needed.

> **One-time setup (already done for this repo):** the workflow file is added via
> the GitHub web UI, and **Settings → Pages → Source** is set to **GitHub Actions**.

The same `dist/` output can also be deployed to **Vercel** or **Netlify** without
any changes.

---

## 📚 Content Sources

- **ILO** — *Violence and Harassment Convention, 2019 (No. 190)* and the ILO global study on experiences of violence and harassment at work
- **Government of India** — *The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013* (**POSH Act**)
- **Supreme Court of India** — *Vishaka v. State of Rajasthan* (1997) Guidelines

Detailed notes are available in [`docs/topic-deep-dive.md`](docs/topic-deep-dive.md).

---

## 👤 Author

<div align="center">

**Omkar Jadhav**
B.Tech — Computer Science & Engineering (2nd Year), VIT-AP

[![GitHub](https://img.shields.io/badge/GitHub-jomkarrr-181717?style=flat-square&logo=github)](https://github.com/jomkarrr)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-omkarjadhav24-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/omkarjadhav24)

</div>

---

## 📄 License

Created for **educational purposes**. You are welcome to reuse the structure and
content with credit.

<div align="center">

*If this project helped you understand the topic, consider giving it a ⭐*

**Every workplace deserves respect, safety and dignity.**

</div>
