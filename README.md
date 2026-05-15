# Aarsh Bhatnagar — Portfolio

Modern, recruiter-focused portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

This project is content-driven: most updates can be made by editing a single file: [src/lib/data.ts](src/lib/data.ts).

---

## Highlights

- App Router setup with clean section-based UI
- Featured + supporting project cards
- Accessible navigation (skip link, focus states, semantic sections)
- SEO-ready metadata (title, description, Open Graph, Twitter)
- Easy content updates from a centralized data file

---

## Tech Stack

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 3](https://tailwindcss.com/)

---

## Project Structure

```
portfolio____V2/
├── public/
│   ├── favicon.ico
│   └── images/
│       └── README.txt
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── MiniProjectCard.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Projects.tsx
│   │   ├── SectionHeading.tsx
│   │   └── Skills.tsx
│   └── lib/
│       └── data.ts
├── global.d.ts
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Local Development

```bash
npm install
npm run dev
```

Open: http://localhost:3000

Production build:

```bash
npm run build
npm start
```

---

## Content Editing Guide

### 1) Personal info

Edit [src/lib/data.ts](src/lib/data.ts) → `personal`:

- `name`, `role`, `tagline`, `about`
- `email`, `linkedin`, `github`
- `resume` (current expected path: `/Aarsh-Bhatnagar-Resume.pdf`)
- `resumeSizeLabel` (optional, e.g. `"250 KB"`)
- `profileImage` (optional, e.g. `"/images/profile-photo.jpg"`)

### 2) Projects

Each project object supports:

- `title` (required)
- `description` (required)
- `tech` (required, string[])
- `github` / `live` (optional)
- `image` (optional)
- `metrics` (optional)
- `featured` (`true` = featured card, `false` = mini card)

---

## Asset Checklist

Add these before shipping:

- Resume PDF:
	- `public/Aarsh-Bhatnagar-Resume.pdf`
- Profile image (optional):
	- `public/images/profile-photo.jpg`
- Project images (optional):
	- e.g. `public/images/telecomiq-cover.jpg`
- OG cover image:
	- e.g. `public/images/og-cover.jpg` or remote image URL

---

## SEO / Open Graph Setup

Metadata is defined in [src/app/layout.tsx](src/app/layout.tsx).

Set environment variables in your hosting platform:

- `NEXT_PUBLIC_SITE_URL` → your live domain (e.g. `https://yourdomain.com`)
- `NEXT_PUBLIC_OG_IMAGE_URL` → public OG image URL

This enables canonical URL + share previews (LinkedIn/Twitter/Open Graph).

---

## Background Theme Variants

Global theme classes are in [src/app/globals.css](src/app/globals.css):

- `theme-notebook`
- `theme-grid`
- `theme-minimal`

Switch active variant in [src/app/layout.tsx](src/app/layout.tsx) via `designVariant`.

---

## Deployment (Vercel)

1. Push repository to GitHub
2. Import into Vercel
3. Add environment variables (`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_OG_IMAGE_URL`)
4. Deploy

---

## Scripts

- `npm run dev` — start local dev server
- `npm run build` — create production build
- `npm start` — run production build
- `npm run lint` — run lint checks
# aarsh-portfolio
