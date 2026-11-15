import { createSSRApp } from 'vue'
import App from './App.vue'
import { createSiteRouter } from './router'

export function createSiteApp(site, server = false) {
  const router = createSiteRouter(site, server)
  const app = createSSRApp(App, { site })

  app.use(router)

  return { app, router }
}
