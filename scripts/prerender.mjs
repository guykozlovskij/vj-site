import { readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { env } from 'node:process'
import { fileURLToPath } from 'node:url'
import { renderToString } from 'vue/server-renderer'
import vue from '@vitejs/plugin-vue'
import { createServer } from 'vite'

const projectRoot = fileURLToPath(new URL('..', import.meta.url))
const outputRoot = path.join(projectRoot, 'dist')
const template = await readFile(path.join(outputRoot, 'index.html'), 'utf8')

// Match the production build so Vue uses the same scoped-style IDs in SSR markup.
env.NODE_ENV = 'production'

const vite = await createServer({
  configFile: false,
  root: projectRoot,
  plugins: [vue()],
  resolve: { alias: { '@': path.join(projectRoot, 'src') } },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${path.join(projectRoot, 'src/assets/styles/_variables.scss')}" as *;`,
      },
    },
  },
  appType: 'custom',
  logLevel: 'error',
  server: { middlewareMode: true, ws: false },
})

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function createSitemap(site) {
  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `  <url><loc>https://${site.hostname}/</loc></url>\n` +
    `</urlset>\n`
  )
}

try {
  const { createSiteApp } = await vite.ssrLoadModule('/src/createSiteApp.js')
  const { sites } = await vite.ssrLoadModule('/src/sites/index.js')

  for (const [siteId, site] of Object.entries(sites)) {
    const { app, router } = createSiteApp(site, true)
    await router.push('/')
    await router.isReady()

    const appHtml = await renderToString(app)
    const structuredData = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: site.title,
      url: `https://${site.hostname}/`,
      inLanguage: 'lt',
    }).replaceAll('<', '\\u003c')
    const html = template
      .replace('<!--app-html-->', appHtml)
      .replaceAll('__SITE_LANGUAGE__', 'lt')
      .replaceAll('__SITE_TITLE__', escapeHtml(site.title))
      .replaceAll('__SITE_DESCRIPTION__', escapeHtml(site.description))
      .replaceAll('__CANONICAL_URL__', `https://${site.hostname}/`)
      .replace('__STRUCTURED_DATA__', structuredData)

    await writeFile(path.join(outputRoot, `site-${siteId}.html`), html)

    if (siteId === 'vilnius' && env.VERCEL !== '1') {
      await writeFile(path.join(outputRoot, 'index.html'), html)
    }

    await writeFile(
      path.join(outputRoot, `robots-${siteId}.txt`),
      `User-agent: *\nAllow: /\nSitemap: https://${site.hostname}/sitemap.xml\n`,
    )
    await writeFile(path.join(outputRoot, `sitemap-${siteId}.xml`), createSitemap(site))
  }

  if (env.VERCEL === '1') {
    await rm(path.join(outputRoot, 'index.html'), { force: true })
  }
} finally {
  await vite.close()
}
