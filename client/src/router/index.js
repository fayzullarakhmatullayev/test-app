import { createRouter, createWebHistory } from 'vue-router'
import EmployeeView from '../views/EmployeeView.vue'
import ClientView from '../views/ClientView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'employee',
      component: EmployeeView
    },
    {
      path: '/client',
      name: 'client',
      component: ClientView
    }
  ]
})

export default router
