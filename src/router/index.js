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

import { useAuthStore } from '../stores/authStore'
import { storeToRefs } from 'pinia'
