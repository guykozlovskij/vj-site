# AGENTS.md

## Project purpose

This repository contains four related church websites: websites for Vilnius, Šiauliai and Jonava, plus a Lithuania-wide hub connecting them. Each site has its own identity and content while sharing a codebase.

## Current architecture

The implemented setup uses one Git repository, one Vue application, one Vite build and one Vercel project serving four domains:

- `baznyciavilniuje.lt` — Vilnius
- `baznyciasiauliuose.lt` — Šiauliai
- `baznyciajonavoje.lt` — Jonava
- `viespatiesjudejimas.lt` — Lithuania-wide hub

`src/sites/index.js` maps hostnames to each site's page and metadata. During development, `?site=vilnius`, `?site=siauliai`, `?site=jonava` or `?site=hub` selects a site; localhost defaults to Vilnius. `src/main.js` starts the app and `src/router/index.js` currently provides the homepage route.

## Repository structure

```text
src/
├── assets/styles/          Global styles, typography and theme variables
├── shared/components/      Shared Nav and Contact components
├── sites/
│   ├── vilnius/            Vilnius pages, layout and locale files
│   ├── siauliai/           Šiauliai page and layout
│   ├── jonava/             Jonava page and layout
│   ├── hub/                Hub page
│   └── index.js            Site configuration and hostname map
├── App.vue                 Shared app shell
├── createSiteApp.js        App and router factory, also used for prerendering
└── main.js                 Browser entry point
scripts/prerender.mjs       Generates site HTML and SEO files
public/                     Static files, including images and favicon assets
```

Static files are stored in `public/` and are served from the site root. Images are stored in `public/images/`. The shared favicon files and `site.webmanifest` also live in `public/` and are used across all four websites unless a site-specific requirement is introduced.

## Shared components and styles

`src/shared/components/Nav.vue` provides navigation for the three church sites. `Contact.vue` provides their shared email contact section. Both use CSS custom properties so colours follow the active site's theme.

Global resets, typography, layout helpers and CSS variables are in `src/assets/styles/`. Components can add focused styles with scoped SCSS. The site theme is selected through the root `data-site` attribute, which is present in prerendered HTML:

- Vilnius uses the warm golden/yellow palette.
- Jonava uses a gentle, distinctly blue pastel palette.
- Šiauliai uses a gentle green palette.
- The hub has its own neutral presentation and does not use a church site's theme.

The three church websites use the shared theme system. The hub has an independent neutral presentation and does not inherit any of the church themes.

Preserve existing designs and colour choices unless a change is requested. Each church homepage and Hero remains in its own site directory; the hub is a separate page.

## SEO, prerendering and routing

`npm run build` runs Vite and then `scripts/prerender.mjs`, which server-renders the homepage for each configured site. It generates a named HTML file for each domain with its title, description, Lithuanian language, canonical URL, Open Graph metadata and WebSite structured data. It also generates a site-specific robots file and XML sitemap.

The Vercel production build generates these HTML files in `dist/`:

- `site-vilnius.html`
- `site-siauliai.html`
- `site-jonava.html`
- `site-hub.html`

The root `dist/index.html` is deliberately removed during Vercel builds so it cannot take precedence over the hostname-based homepage rewrites. Local development builds retain the root `index.html` for the default Vilnius preview. Do not change this output arrangement or introduce a root production index without understanding its effect on Vercel routing.

`vercel.json` redirects `www` hostnames to the preferred domains and uses hostname-based rewrites to serve the matching prerendered homepage, `robots.txt` and `sitemap.xml`. Preserve this routing and output arrangement when changing build or deployment configuration.

Generic Vercel Preview URLs use a `vercel.app` hostname and do not match the four custom-domain hostname rules. A 404 at the Preview deployment's root URL is therefore not necessarily evidence of a broken build or missing prerendered pages. Verify the generated named HTML files directly and test hostname-based routing separately using an appropriate preview-host setup.

The current router defines only `/`; treat additional pages and their SEO metadata as future work until implemented. Do not add SSR/SEO frameworks or other dependencies without explaining options and trade-offs first.

## Hosting and deployment

The four domains and DNS are managed through Hostinger. The sites are served by one Vercel project, deployed from the connected Git repository. Do not change DNS, Vercel settings, domains or production deployment as part of ordinary code work. Domain or deployment changes must be based on verified current configuration; never invent DNS values.

## Development conventions

- Use Vue 3 Composition API, JavaScript, Vue Router and SCSS, following the existing patterns.
- Use two-space indentation and the existing `@` alias.
- Prefer simple, readable code and focused components. Share code where useful, but preserve each site's ability to differ.
- Avoid unnecessary dependencies, premature abstractions, large rewrites and unrelated changes.
- Preserve supplied church content and theological meaning. Do not invent visitor-facing content or source/replace imagery unless asked.
- Inspect the current implementation before making assumptions or edits.
- Make incremental changes within the requested scope. Explain significant technical decisions and identify assumptions.
- Run relevant existing checks when appropriate and report exactly what was run and its result. The configured lint scripts apply fixes (`--fix`); account for this when choosing whether to run them.

## Planned functionality

The following are not currently implemented and should not be added as part of unrelated work:

- Additional routes/pages beyond the current homepages.
- Complete localisation across all four sites (Vilnius has partial Lithuanian and English locale files).
- Shared event management, a central content management system or a backend/database.

Do not silently expand scope to include these features. Implement them incrementally when requested.
