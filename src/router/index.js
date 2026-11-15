import { createRouter, createWebHistory } from 'vue-router'

import { currentSite } from '@/sites'

const routes = currentSite
  ? [{ path: '/', name: 'home', component: currentSite.home }]
  : []

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
