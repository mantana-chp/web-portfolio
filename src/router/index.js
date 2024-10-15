import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/pages/Home.vue'

// const history = createWebHistory(import.meta.env.BASE_URL)
const history = createWebHistory()

const routes = [{ path: '/', name: 'home', component: Home }]

const router = createRouter({
  history,
  routes
})

export default router
