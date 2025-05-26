<!-- src/App.vue -->
<template>
  <Navbar />
  <div class="content">
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style>
.content {
  margin-left: 200px; /* Sesuaikan dengan lebar sidebar */
  padding: 1rem;
}
</style>
