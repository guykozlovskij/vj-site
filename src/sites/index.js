import VilniusHome from './vilnius/pages/Home.vue'
import SiauliaiHome from './siauliai/pages/Home.vue'
import JonavaHome from './jonava/pages/Home.vue'
import HubHome from './hub/pages/Home.vue'

export const sites = {
  vilnius: {
    home: VilniusHome,
    hostname: 'baznyciavilniuje.lt',
    title: 'Bažnyčia Vilniuje',
    description:
      'Bažnyčia Vilniuje – mes esame tikintieji Viešpatyje Jėzuje Kristuje, asmeniškai priėmę Jį kaip savo Gelbėtoją ir susirenkantys kartu bažnyčios gyvenimui.',
    navigation: {
      brand: 'Bažnyčia Vilniuje',
      items: [{ label: 'Pagrindinis', to: '/' }],
    },
  },
  siauliai: {
    home: SiauliaiHome,
    hostname: 'baznyciasiauliuose.lt',
    title: 'Bažnyčia Šiauliuose',
    description:
      'Bažnyčia Šiauliuose – mes esame tikintieji Viešpatyje Jėzuje Kristuje, asmeniškai priėmę Jį kaip savo Gelbėtoją ir susirenkantys kartu bažnyčios gyvenimui.',
    navigation: {
      brand: 'Bažnyčia Šiauliuose',
      items: [{ label: 'Pagrindinis', to: '/' }],
    },
  },
  jonava: {
    home: JonavaHome,
    hostname: 'baznyciajonavoje.lt',
    title: 'Bažnyčia Jonavoje',
    description:
      'Bažnyčia Jonavoje – mes esame tikintieji Viešpatyje Jėzuje Kristuje, asmeniškai priėmę Jį kaip savo Gelbėtoją ir susirenkantys kartu bažnyčios gyvenimui.',
    navigation: {
      brand: 'Bažnyčia Jonavoje',
      items: [{ label: 'Pagrindinis', to: '/' }],
    },
  },
  hub: {
    home: HubHome,
    hostname: 'viespatiesjudejimas.lt',
    title: 'Viešpaties Judėjimas',
    description: 'Bažnyčia Vilniuje · Bažnyčia Šiauliuose · Bažnyčia Jonavoje.',
  },
}

const siteByHostname = Object.fromEntries(
  Object.entries(sites).map(([siteId, site]) => [site.hostname, siteId]),
)

export function getSiteId(hostname, developmentSite) {
  if (developmentSite && sites[developmentSite]) {
    return developmentSite
  }

  const normalizedHostname = hostname.toLowerCase()
  const localHosts = ['localhost', '127.0.0.1', '::1']

  if (localHosts.includes(normalizedHostname)) {
    return 'vilnius'
  }

  return siteByHostname[normalizedHostname] || null
}
