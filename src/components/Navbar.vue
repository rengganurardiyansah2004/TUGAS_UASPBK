<template>
  <div class="sidebar">
    <h2 class="logo">📱 Samsung Store</h2>

    <!-- Navigasi -->
    <router-link to="/">
      <HomeIcon class="icon" /> Home
    </router-link>
    <router-link to="/produk">
      <BoxIcon class="icon" /> Produk
    </router-link>
    <router-link to="/keranjang">
      <ShoppingCartIcon class="icon" /> Keranjang
    </router-link>
    <router-link to="/checkout">
      <CreditCardIcon class="icon" /> Checkout
    </router-link>

    <!-- Auth Navigasi -->
    <div v-if="!authStore.isLoggedIn" class="auth-links">
      <router-link to="/login">
        <LogInIcon class="icon" /> Login
      </router-link>
      <router-link to="/register">
        <UserPlusIcon class="icon" /> Register
      </router-link>
    </div>

    <div v-else class="user-info">
      <span class="username">👤 {{ authStore.username }}</span>
      <button @click="logout">
        <LogOutIcon class="icon" /> Logout
      </button>
    </div>
  </div>
</template>

<script setup>
import {
  HomeIcon,
  BoxIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  LogInIcon,
  LogOutIcon,
  UserPlusIcon
} from 'lucide-vue-next'

import { useAuthStore } from '../stores/authStore'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const logout = () => {
  authStore.logout()
  router.push('/login')
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 150px;
  height: 90vh;
  background-color: #0d6efd;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  gap: 1rem;
  box-shadow: 2px 0 6px rgba(0, 0, 0, 0.15);
  font-family: 'Segoe UI', sans-serif;
}

.logo {
  font-size: 1.4rem;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #fff;
}

.sidebar a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.6rem;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.sidebar a.router-link-active {
  background-color: #084298;
  padding-left: 1rem;
}

.icon {
  width: 18px;
  height: 18px;
}

.auth-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.user-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: auto;
  margin-bottom: 2rem; /* Naikkan sedikit dari bawah */
}

.username {
  font-size: 0.9rem;
  font-weight: bold;
  text-align: left;
}

button {
  background-color: #dc3545;
  border: none;
  color: white;
  padding: 0.4rem 0.6rem;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #bb2d3b;
}
</style>
