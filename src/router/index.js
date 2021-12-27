import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Vue0 from '../views/Vue0.vue'
import Vue5 from '../views/Vue5.vue'
import Vue50 from '../views/Vue50.vue'
import Statique from '../views/Statique.vue'
const routes = [
  {
    path: '/',
    name: 'Vue0',
    component: Vue0
  },
  {
    path: '/Shop',
    name: 'Vue5',
    component: Vue5
  },
  {
    path: '/50',
    name: 'Vue50',
    component: Vue50
  },
  {
    path: '/test',
    name: 'Statique',
    component: Statique
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
