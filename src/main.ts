import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { createWebHistory, createRouter } from 'vue-router';
import Dashboard from './pages/Dashboard.vue';
import Login from './pages/Login.vue';


const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  // { path: '/list', component: List },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: Dashboard }, // เส้นทางสำหรับ 404
];

const router = createRouter({
  history: createWebHistory(), // ใช้ History Mode
  routes,
});

const pinia = createPinia();
createApp(App).use(pinia).use(router).mount('#app');
