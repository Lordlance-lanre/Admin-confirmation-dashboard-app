import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import All from '../views/children/All.vue';
import Paid from '../views/children/Paid.vue';
import Unpaid from '../views/children/Unpaid.vue';
import Overdue from '../views/children/Overdue.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
      {
        name: 'all',
        path: 'all',
        component: All,
      },
      {
        name: 'paid',
        path: 'paid',
        component: Paid,
      },
      {
        name: 'unpaid',
        path: 'unpaid',
        component: Unpaid,
      },
      {
        name: 'overdue',
        path: 'overdue',
        component: Overdue,
      }

      ]
    },
  ]
})

export default router
