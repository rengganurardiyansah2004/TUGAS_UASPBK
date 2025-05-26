<template>
  <div>
    <h2>Daftar Produk Ponsel</h2>
    <ul>
      <li v-for="produk in produkList" :key="produk.id">
        <router-link :to="`/produk/${produk.id}`">{{ produk.nama }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const produkList = ref([
  { id: 1, nama: 'iPhone 15 Pro Max' },
  { id: 2, nama: 'Samsung Galaxy S24 Ultra' },
  { id: 3, nama: 'Xiaomi 14 Pro' }
])
</script>
