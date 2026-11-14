# Harassment-Free Workplace

> **Respect. Safety. Dignity at Work.**

An attractive, single-page awareness website about creating a **harassment-free workplace** — what workplace harassment is, its types and impact, India's **POSH Act, 2013**, how to speak up, and how employees, managers and organisations can prevent it.

🔗 **Live preview:** Open `index.html` in a browser, or enable GitHub Pages (Settings → Pages → Deploy from branch → `main` / root).

---

## 📌 About the Project

Workplace harassment is any unwelcome behaviour, comment or action that creates a hostile, intimidating or offensive working environment. This project presents the topic as a clean, image-rich landing page built for awareness — with Indian workplace imagery, a light warm colour palette, and a low-opacity background layer so the content stays easy to read.

The page is intentionally **simple**: no forms, no backend, no build step — just HTML, CSS and a little JavaScript.

## ✨ Features

- **Hero section** with a clear message — *Respect is Non-Negotiable*
- **Key statistics** — including the ILO finding that more than 1 in 5 (22.8%) employed people have experienced workplace violence or harassment
- **6 types of harassment** — sexual, verbal, psychological/bullying, physical, discriminatory and cyber, with examples
- **Impact section** — on individuals, teams and the organisation
- **Speak Up guide** — 5 practical steps to report harassment
- **Bystander intervention** — the 5 D's (Direct, Distract, Delegate, Document, Delay)
- **Role-wise prevention tabs** — for Employees, Managers and Organisations & HR
- **POSH Act, 2013 deep-dive** — ICC, complaint timelines, employer duties and penalties
- **"Spot It" scenario check** — 5 short interactive scenarios
- **Myths vs Facts** and **FAQs**
- **Help contacts** — 112 (Emergency), 1091 / 181 (Women Helpline), NCW and the SHe-Box portal
- Fully **responsive** — works on desktop and mobile, with light/dark colour-scheme support

## 🗂️ Project Architecture

```
workplace_harassment-/
├── index.html                # Landing page markup (all sections)
├── README.md                 # Project documentation
├── .gitignore
├── assets/
│   ├── css/
│   │   └── style.css         # Complete stylesheet (light warm palette,
│   │                         #   low-opacity background-image layers)
│   └── js/
│       └── main.js           # Scenario check + prevention tabs logic
└── docs/
    └── topic-deep-dive.md    # Detailed topic notes: definitions, types,
                              #   POSH Act, prevention framework
```

**Design notes**

- Indian professionals in all photographs — no stock foreign imagery
- Background photographs are layered at **5–14% opacity** behind sections so text remains fully readable
- Colour palette: soft peach background, deep maroon primary, terracotta accents, marigold highlights
- Images are embedded in the page/styles for portability, so the site works offline with no external image dependencies (Google Fonts requires an internet connection)

## 🚀 How to Run

No installation or build step is needed.

**Option 1 — Directly**

```bash
# Clone the repository
git clone https://github.com/jomkarrr/workplace_harassment-.git

# Open index.html in your browser
```

**Option 2 — Local server (recommended)**

```bash
# From the project root
python3 -m http.server 8000
# Visit http://localhost:8000
```

**Option 3 — GitHub Pages**

1. Go to **Settings → Pages**
2. Source: **Deploy from a branch** → `main` → `/ (root)`
3. Save — your site will be published on GitHub Pages

## 🛠️ Built With

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties, responsive layout, background layers
- **JavaScript (Vanilla)** — interactive scenario check and tabs
- **Google Fonts** — DM Serif Display + Plus Jakarta Sans

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
