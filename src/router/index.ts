import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw} from 'vue-router';
import HomePage from '../views/HomePage.vue'
import {HOME_PAGE_URL} from "@/utils/routes";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: HOME_PAGE_URL
  },
  {
    path: HOME_PAGE_URL,
    name: 'Home',
    component: HomePage
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
