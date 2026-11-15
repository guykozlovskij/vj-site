import VilniusHome from './vilnius/pages/Home.vue'
import SiauliaiHome from './siauliai/pages/Home.vue'
import JonavaHome from './jonava/pages/Home.vue'
import HubHome from './hub/pages/Home.vue'

const sites = {
  vilnius: {
    home: VilniusHome,
    hostname: 'baznyciavilniuje.lt',
    navigation: {
      brand: 'Bažnyčia Vilniuje',
      items: [{ label: 'Pagrindinis', to: '/' }],
    },
  },
  siauliai: {
    home: SiauliaiHome,
    hostname: 'baznyciasiauliuose.lt',
  },
  jonava: {
    home: JonavaHome,
    hostname: 'baznyciajonavoje.lt',
  },
  hub: {
    home: HubHome,
    hostname: 'viespatiesjudejimas.lt',
  },
}

const siteByHostname = Object.fromEntries(
  Object.entries(sites).map(([siteId, site]) => [site.hostname, siteId]),
)

const developmentSite = import.meta.env.DEV
  ? new URLSearchParams(window.location.search).get('site')
  : null

const hostname = window.location.hostname.toLowerCase()
const isLocalHost = ['localhost', '127.0.0.1', '::1'].includes(hostname)
const siteId = sites[developmentSite]
  ? developmentSite
  : siteByHostname[hostname] || (import.meta.env.DEV || isLocalHost ? 'vilnius' : null)

export const currentSite = siteId ? sites[siteId] : null
