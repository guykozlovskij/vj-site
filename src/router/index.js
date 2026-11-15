import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

export function createSiteRouter(site, server = false) {
  return createRouter({
    history: server ? createMemoryHistory() : createWebHistory(import.meta.env.BASE_URL),
    routes: [{ path: '/', name: 'home', component: site.home }],
  })
}
