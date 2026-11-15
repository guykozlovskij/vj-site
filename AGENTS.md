
# AGENTS.md

## 1. Project purpose

This project is for developing websites for three local churches in Lithuania and one Lithuania-wide hub website.

The four websites are:

| Website | Domain |
|---|---|
| Vilnius church | baznyciavilniuje.lt |
| Šiauliai church | baznyciasiauliuose.lt |
| Jonava church | baznyciajonavoje.lt |
| Lithuania-wide hub | viespatiesjudejimas.lt |

The three local church websites and the general hub are separate websites with their own content, identity and purpose.

The current application is the starting point for the Vilnius church website.

## 2. Current technology and implementation

The project currently uses:

- Vue 3
- Vite
- JavaScript (not TypeScript)
- Vue Router
- SCSS
- ESLint, Oxlint and Prettier

Other implementation details:

- `src/main.js` is the application entry point.
- `src/App.vue` currently contains the shared application shell.
- `src/router/index.js` currently defines the application routes.
- `@` is configured as an alias for `src`.
- Global SCSS variables and mixins are injected through Vite configuration.
- Lithuanian and English locale files exist, but localisation is only partially implemented.

Always inspect the current source code before making assumptions about implementation details. The repository is the source of truth for what currently exists.

Do not assume that planned functionality or architecture has already been implemented.

## 3. Intended website architecture

The intended direction is:

- One Git repository.
- One Vue application.
- One Vite build.
- One Vercel project and deployment initially.
- Four domains pointing to the same Vercel project.
- The application determines which website to display based on the visitor's hostname.

The four websites must remain independent in terms of their content and presentation, even though they share a codebase.

### Intended folder organisation

The target structure should organise the websites under:

`src/sites/`

With four separate website directories:

- `src/sites/vilnius/`
- `src/sites/siauliai/`
- `src/sites/jonava/`
- `src/sites/hub/`

Each website should be able to contain its own:

- Pages
- Components
- Layout
- Navigation
- Router
- Content and configuration
- Styling where required

A possible organisation is:

```text
src/
├── sites/
│   ├── vilnius/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── layout/
│   │   └── router.js
│   │
│   ├── siauliai/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── layout/
│   │   └── router.js
│   │
│   ├── jonava/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── layout/
│   │   └── router.js
│   │
│   └── hub/
│       ├── pages/
│       ├── components/
│       ├── layout/
│       └── router.js
│
├── shared/
│   ├── components/
│   ├── styles/
│   └── utilities/
│
├── data/
├── assets/
├── App.vue
└── main.js
```

This is the intended direction, not a requirement to create all these folders immediately.

Preserve the existing working application and evolve it incrementally. Do not perform a large restructuring without an explicit request.

## 4. Shared code and website independence

The guiding principle is:

**Share code where it is genuinely useful, not at the expense of website independence.**

The websites may share components, styles, utilities and data when their behaviour and presentation are genuinely common.

However, each website must be free to have its own:

- Design and visual identity
- Navigation and menus
- Page structure
- Content
- Components
- Features and functionality

For example, Vilnius might eventually have a blog and events calendar, while Jonava might remain a simpler website.

Do not force all websites to use identical layouts or components.

Avoid giant components containing numerous locality-specific conditions. If a shared component becomes complicated because of differences between websites, consider separate implementations with a shared foundation instead.

Do not create abstractions or shared components prematurely. Start with the actual requirements and extract reusable functionality when there is a clear benefit.

## 5. SEO and search visibility

SEO is an important requirement for all four websites.

Each domain must have its own distinct and relevant search identity.

The implementation should account for:

- Unique page titles.
- Unique meta descriptions.
- Correct page language.
- Correct canonical URLs for each domain and page.
- Appropriate heading hierarchy.
- Search-engine-friendly page content.
- XML sitemaps.
- Robots.txt.
- Appropriate structured data.
- Social sharing metadata where appropriate.
- Correct handling of redirects and preferred domain variants.

The local church websites should clearly communicate their respective locations: Vilnius, Šiauliai and Jonava.

The hub website should represent the wider Lithuania-wide church movement and link to the local websites.

Avoid duplicated or automatically generated location pages that provide no genuinely useful local information.

### SEO rendering requirements

The application must serve the appropriate website content and metadata for each domain.

Do not assume that changing document metadata only through client-side JavaScript is sufficient for the intended SEO requirements.

Evaluate whether prerendering or server-side rendering is appropriate for the four-domain setup.

Consider the needs of search engine crawlers before finalising the rendering and routing architecture.

Do not introduce an SEO framework, SSR solution or additional dependencies without first explaining the options and their trade-offs.

SEO implementation must support the shared deployment while preserving the independent identity of each domain.

Never promise specific Google rankings or search positions.

## 6. Hosting and deployment

All four domains are managed through Hostinger.

Vercel is the intended website hosting and deployment platform.

The initial deployment direction is one Vercel project with all four custom domains configured.

The application will distinguish the websites using the requested hostname.

Do not create separate Vercel projects or independent build pipelines unless explicitly requested or a clear technical reason is established and discussed first.

DNS changes must be based on the actual domain configuration and current Vercel requirements. Never invent DNS record values.

The exact domain and hosting configuration will be handled as a separate implementation step.

## 7. Content and design principles

The websites are church websites. Their content should be clear, welcoming and appropriate for their purpose.

The primary language is Lithuanian. English and potentially other languages may be supported in the future.

Preserve the meaning of supplied content, especially Christian and theological material. Do not casually rewrite doctrinal statements or change their meaning.

The current Vilnius website has explored a warm, understated design direction, including:

- Warm parchment-like backgrounds.
- Lora for main text.
- Playfair Display for accent typography.
- Warm, dark navigation colours.
- Burgundy accents.
- Centred content with a reasonable maximum width.

Treat existing design choices as the starting point. Individual websites may eventually develop their own visual identities.

Do not make broad visual redesigns unless requested.

## 8. Development conventions

Follow these conventions:

- Use Vue 3 Composition API and the existing project patterns.
- Use JavaScript, not TypeScript, unless explicitly requested.
- Use SCSS for styling.
- Use two-space indentation.
- Use the existing `@` alias for imports where appropriate.
- Prefer simple, readable and maintainable solutions.
- Keep components focused and reasonably small.
- Reuse existing dependencies and utilities where practical.
- Do not add dependencies without explaining why they are needed.
- Avoid unnecessary abstractions, complex configuration and overengineering.
- Consider responsive layouts for desktop and mobile.
- Follow the existing linting and formatting conventions.

Do not change the package manager or replace existing tooling without discussing it first.

## 9. How to work on this project

The developer is learning and maintaining the project manually alongside using Codex.

The project must remain understandable to a developer who is not relying entirely on an AI coding assistant.

When carrying out tasks:

1. Inspect the relevant files before modifying them.
2. Explain the proposed approach before making significant architectural changes.
3. Prefer small, incremental changes over large rewrites.
4. Keep changes within the scope of the requested task.
5. Preserve existing working functionality unless explicitly asked to change it.
6. Explain which files were changed and why.
7. Explain important technical decisions in practical terms.
8. Identify assumptions and uncertainties rather than inventing details.
9. Run relevant existing checks after making changes when appropriate.
10. Clearly report checks that were run and their results.

Do not claim that a build, test or lint check passed unless it was actually executed successfully.

Do not make unrelated improvements while implementing a requested feature.

Do not restructure the project simply because another structure might be theoretically preferable.

## 10. Important architectural boundaries

The following are future plans, not existing functionality:

- Four independently organised website sections.
- Hostname-based website selection.
- Four-domain Vercel configuration.
- Independent SEO implementation for all websites.
- Any prerendering or SSR solution.
- Shared event management or a central content management system.

Do not silently implement these features as part of an unrelated task.

Before introducing significant architectural changes, explain the options and discuss the implications.

The goal is a straightforward, maintainable system that can grow gradually without becoming unnecessarily complicated.
