// src/Stores/produkStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useProdukStore = defineStore('produk', () => {
  const produkList = ref([])

  const fetchProduk = async () => {
    const response = await axios.get('http://localhost:3000/produk')
    produkList.value = response.data
  }

  return { produkList, fetchProduk }
})
