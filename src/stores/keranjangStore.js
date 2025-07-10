import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useKeranjangStore = defineStore('keranjang', () => {
  const keranjang = ref([])

  const tambahKeKeranjang = (produk) => {
    keranjang.value.push(produk)
  }

const hapusDariKeranjang = (id) => {
  keranjang.value = keranjang.value.filter(item => item.id !== id)
}


  return { keranjang, tambahKeKeranjang, hapusDariKeranjang }
})
