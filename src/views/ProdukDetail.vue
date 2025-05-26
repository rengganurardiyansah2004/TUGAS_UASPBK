<template>
  <div>
    <h2>Detail Produk</h2>
    <p>Menampilkan detail untuk produk dengan ID: {{ id }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const id = route.params.id
</script>
