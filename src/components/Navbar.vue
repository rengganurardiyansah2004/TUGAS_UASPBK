<!-- src/components/Navbar.vue -->
<template>
  <div class="sidebar">
    <h2>Toko Ponsel</h2>
    <router-link to="/">Home</router-link>
    <router-link to="/produk">Produk</router-link>
    <router-link to="/keranjang">Keranjang</router-link>
    <router-link to="/checkout">Checkout</router-link>
    <router-link to="/login">Login</router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100px;
  height: 100vh;
  background-color: #0d6efd;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  gap: 1rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar h2 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #fff;
}

.sidebar a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s, padding-left 0.2s;
  padding: 0.5rem 0.5rem;
  border-radius: 5px;
}

.sidebar a.router-link-active {
  background-color: #084298;
  padding-left: 1rem;
}
</style>
