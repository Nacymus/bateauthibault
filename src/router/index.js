import { createRouter, createWebHistory } from 'vue-router'
import Vue0 from '../views/Vue0.vue'
import Vue1 from '../views/Vue1.vue'
import Vue2 from '../views/Vue2.vue'
import Vue3 from '../views/Vue3.vue'
import Vue4 from '../views/Vue4.vue'
import Vue5 from '../views/Vue5.vue'
import Vue20 from '../views/Vue20.vue'
import Vue21 from '../views/Vue21.vue'
import Vue22 from '../views/Vue22.vue'
import Vue23 from '../views/Vue23.vue'
import Vue30 from '../views/Vue30.vue'
import Vue31 from '../views/Vue31.vue'
import Vue32 from '../views/Vue32.vue'
import Vue33 from '../views/Vue33.vue'
import Vue34 from '../views/Vue34.vue'
import Vue40 from '../views/Vue40.vue'
import Vue41 from '../views/Vue41.vue'
import Vue42 from '../views/Vue42.vue'
import Vue43 from '../views/Vue43.vue'
import Vue44 from '../views/Vue44.vue'
import Vue50 from '../views/Vue50.vue'
import Statique from '../views/Statique.vue'
const routes = [
  {
    path: '/',
    name: 'Vue0',
    component: Vue0
  },

  {
    path: '/contact',
    name: 'Vue1',
    component: Vue1
  },

  {
    path: '/boats',
    name: 'Vue2',
    component: Vue2
  },
  {
    path: '/restau',
    name: 'Vue3',
    component: Vue3
  },


  {
    path: '/Shop',
    name: 'Vue5',
    component: Vue5
  },

  {
    path: '/dishes',
    name: 'Vue4',
    component: Vue4
  },

  {
    path: '/20',
    name: 'Vue20',
    component: Vue20
  },
  
  {
    path: '/21',
    name: 'Vue21',
    component: Vue21
  },
  
  {
    path: '/22',
    name: 'Vue22',
    component: Vue22
  },

  {
    path: '/23',
    name: 'Vue23',
    component: Vue23
  },

  {
    path: '/30',
    name: 'Vue30',
    component: Vue30
  },

  {
    path: '/31',
    name: 'Vue31',
    component: Vue31
  },

  {
    path: '/32',
    name: 'Vue32',
    component: Vue32
  },

  {
    path: '/33',
    name: 'Vue33',
    component: Vue33
  },

  {
    path: '/34',
    name: 'Vue34',
    component: Vue34
  },

  {
    path: '/40',
    name: 'Vue40',
    component: Vue40
  },

  {
    path: '/41',
    name: 'Vue41',
    component: Vue41
  },

  {
    path: '/42',
    name: 'Vue42',
    component: Vue42
  },

  {
    path: '/43',
    name: 'Vue43',
    component: Vue43
  },
  {
    path: '/44',
    name: 'Vue44',
    component: Vue44
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
