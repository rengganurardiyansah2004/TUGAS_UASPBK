// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import ProdukList from '../views/ProdukList.vue'
import ProdukDetail from '../views/ProdukDetail.vue'
import Keranjang from '../views/Keranjang.vue'
import Checkout from '../views/Checkout.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Admin from '../views/Admin.vue'

import { useAuthStore } from '../Stores/authStore'
import { storeToRefs } from 'pinia'

const routes = [
  { path: '/', component: Home },
  { path: '/produk', component: ProdukList },
  { path: '/produk/:id', component: ProdukDetail },
  { path: '/keranjang', component: Keranjang },
  { path: '/checkout', component: Checkout },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/admin', component: Admin }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// ⛔ Perhatikan ini!
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const { isLoggedIn } = storeToRefs(authStore)

  const protectedRoutes = ['/produk', '/keranjang', '/checkout', '/admin']

  if (protectedRoutes.includes(to.path) && !isLoggedIn.value) {
    next('/login')
  } else {
    next()
  }
})

export default router
