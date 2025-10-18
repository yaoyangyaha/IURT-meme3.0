import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ {
      path: '/',
      name: '首页 - IURT Meme3',
      component: HomeView
    },],
})

export default router
