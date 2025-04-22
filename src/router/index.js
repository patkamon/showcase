// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Project from '@/views/Project.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/projects/:name', name: 'projects', component: Project }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
