import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'

const pinia = createPinia()
import Dashboard from './pages/Dashboard.vue'
import Login from './pages/Login.vue'
import List from './pages/List.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/list', component: List },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: Dashboard },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(pinia).use(router).mount('#app')
