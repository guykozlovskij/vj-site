import { createSiteApp } from './createSiteApp'
import { getSiteId, sites } from './sites'

import './assets/styles/main.scss'

const developmentSite = import.meta.env.DEV
  ? new URLSearchParams(window.location.search).get('site')
  : null
const siteId = getSiteId(window.location.hostname, developmentSite) || 'vilnius'
const site = sites[siteId]

if (import.meta.env.DEV) {
  document.documentElement.lang = 'lt'
  document.title = site.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', site.description)
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', `https://${site.hostname}/`)
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', site.title)
  document
    .querySelector('meta[property="og:description"]')
    ?.setAttribute('content', site.description)
  document
    .querySelector('meta[property="og:url"]')
    ?.setAttribute('content', `https://${site.hostname}/`)
}

const { app, router } = createSiteApp(site)

router.isReady().then(() => app.mount('#app'))
