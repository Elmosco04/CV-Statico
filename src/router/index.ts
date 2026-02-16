import { createRouter, createWebHistory } from 'vue-router'
import Esperienze from '@/views/EsperienzeLavorative.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'esperienze',
      component: Esperienze,
    },
    {
      path: '/attivita',
      name: 'attivita',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Attivita.vue'),
    },
  ],
})

export default router
