import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/views/Home.vue'
import PageOne from '../components/views/PageOne.vue'
import PageTwo from '../components/views/PageTwo.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/page-1',
    name: 'page-one',
    component: PageOne,
  },
  {
    path: '/page-2',
    name: 'page-two',
    component: PageTwo,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
