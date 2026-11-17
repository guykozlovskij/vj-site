# vj-site

This project contains websites for churches in Vilnius, Šiauliai and Jonava, plus a Lithuania-wide website connecting the three. They are related church websites built from a common codebase.

## Technologies

- Vue 3 and Vue Router
- Vite
- JavaScript
- SCSS
- Vercel

## Development

### Prerequisites

- Node.js `^20.19.0` or `>=22.12.0`
- npm

### Get started

```sh
npm install
npm run dev
```

Vite prints the development server URL in the terminal. By default, it shows the Vilnius website. To preview another website, add its ID as a query parameter:

```text
?site=vilnius
?site=siauliai
?site=jonava
?site=hub
```

For example, open `http://localhost:5173/?site=hub` to view the hub.

### Build and lint

```sh
npm run build
npm run preview
npm run lint
```

The build command creates the production build and prerendered site pages. `npm run lint` runs Oxlint and ESLint; both configured lint scripts apply fixes. They can also be run separately with `npm run lint:oxlint` and `npm run lint:eslint`.

## Project structure

```text
public/              Static files served as-is, including images
src/
  assets/            Styles and other imported assets
  shared/            Components used by multiple websites
  sites/             Pages and components for each website
scripts/             Build and prerender scripts
```

Static images are stored in `public/images/`. Each website's pages are maintained under its directory in `src/sites/` (`vilnius`, `siauliai`, `jonava` and `hub`).

## Deployment

The websites are deployed through Vercel from the connected Git repository.
