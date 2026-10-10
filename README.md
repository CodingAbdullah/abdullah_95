# Abdullah Muhammad - Portfolio Website

Single-page portfolio for Abdullah Muhammad, a Full-Stack Engineer based in Toronto, ON, Canada.

**Live Website:** [kingabdullah.codes](https://kingabdullah.codes)

## Sections

- **Hero:** name, role, location, and links to resume, GitHub, and LinkedIn
- **About:** technical summary (cloud/DevOps, full-stack, testing, Web3)
- **Skills:** grouped skills and certifications (AWS, Azure, Terraform)
- **Projects:** live projects with source links, plus 50+ articles on Medium
- **Education:** B.Eng., Software Engineering, McMaster University

The old `/about`, `/skills`, and `/portfolio` routes permanently redirect to their sections.

## Technology Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS 3 with custom glass and glow utilities
- **UI:** shadcn/ui primitives (Radix Slot), Lucide icons
- **SEO:** site-wide metadata, Open Graph, `sitemap.xml`, and `robots.txt`
- **Analytics:** Vercel Analytics and Umami

## Getting Started

Requires Node.js 20.9+.

```bash
git clone https://github.com/CodingAbdullah/abdullah_95.git
cd abdullah_95
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Other scripts: `npm run build`, `npm start`, `npm run lint`.

Optional environment variables: `UMAMI_URL` and `UMAMI_WEBSITE_ID` for Umami analytics.

## Editing Content

All content lives in `src/utils/constants/`:

- `Profile.ts`: name, role, location, summary, links, education
- `SkillsList.ts`: skill groups and certifications
- `PortfolioProjectList.ts`: projects (newest first)

## Project Structure

```
src/
├── app/                   # Layout, single page, sitemap, robots, 404/error pages
├── components/
│   ├── sections/          # Hero, About, Skills, Projects, Education
│   └── ui/                # Button and Card primitives
├── lib/                   # Utilities
└── utils/
    ├── constants/         # Site content
    └── types/             # TypeScript types
```

## Links

- **Website:** [kingabdullah.codes](https://kingabdullah.codes)
- **GitHub:** [CodingAbdullah](https://github.com/CodingAbdullah)
- **Medium:** [@abdullah_95](https://medium.com/@abdullah_95)
