import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/homeView.vue'
import userHomeView from '@/views/userHomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/user', component: userHomeView },
  ],
})

export default router
