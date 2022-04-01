import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { HOME_PAGE_URL } from "@/utils/routes";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../views/IndexPage.vue'),
    strict: true
  },
  {
    path: HOME_PAGE_URL,
    component: () => import('../views/HomePage.vue'),
    strict: true
  },
  {
    path: '/section/:section',
    component: () => import('../views/SectionPage.vue'),
    strict: true
  },
  {
    path: '/settings',
    component: () => import('../views/SettingsPage.vue'),
    strict: true
  },
  {
    path: '/others',
    component: () => import('../views/OthersPage.vue'),
    strict: true
  },
  {
    path: '/areas',
    component: () => import('../views/AreasPage.vue'),
    strict: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
