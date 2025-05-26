// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Import komponen halaman
import Home from '../views/Home.vue'
import ProdukList from '../views/ProdukList.vue'
import ProdukDetail from '../views/ProdukDetail.vue'
import Keranjang from '../views/Keranjang.vue'
import Checkout from '../views/Checkout.vue'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/produk', component: ProdukList },
  { path: '/produk/:id', component: ProdukDetail },
  { path: '/keranjang', component: Keranjang },
  { path: '/checkout', component: Checkout },
  { path: '/login', component: Login },
  { path: '/admin', component: Admin }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
