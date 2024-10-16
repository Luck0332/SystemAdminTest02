import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/pages/Dashboard.vue';

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  // routes อื่น ๆ
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
