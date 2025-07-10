<!-- src/views/ProdukList.vue -->
<template>
  <div class="produk-container">
    <h2>Daftar Produk Samsung</h2>
    <div class="produk-grid">
      <div class="produk-card" v-for="produk in produkStore.produkList" :key="produk.id">
        <img :src="produk.gambar" alt="gambar produk" />
        <h3>{{ produk.nama }}</h3>
        <p class="harga">Rp {{ produk.harga.toLocaleString() }}</p>

        <router-link :to="`/produk/${produk.id}`" class="btn detail">Detail</router-link>
        <button @click="tambah(produk)" class="btn keranjang">+ Keranjang</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useProdukStore } from '../Stores/produkStore'
import { useKeranjangStore } from '../Stores/keranjangStore'

const produkStore = useProdukStore()
const keranjangStore = useKeranjangStore()


onMounted(() => produkStore.fetchProduk())

const tambah = (produk) => {
  keranjangStore.tambahKeKeranjang(produk)
  alert(`✔️ ${produk.nama} ditambahkan ke keranjang!`)
}
</script>

<style scoped>
.produk-container {
  padding: 1.5rem;
}

h2 {
  color: #0d6efd;
  margin-bottom: 1rem;
}

.produk-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
}

.produk-card {
  background: #fff;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease;
}

.produk-card:hover {
  transform: translateY(-5px);
}

.produk-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 0.5rem;
  border-radius: 8px;
}

.produk-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
}

.harga {
  color: #198754;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

/* Tombol umum */
.btn {
  display: inline-block;
  margin: 0.2rem 0.3rem;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s, transform 0.1s;
}

/* Tombol detail */
.btn.detail {
  background-color: #0d6efd;
  color: white;
}

.btn.detail:hover {
  background-color: #0b5ed7;
}

/* Tombol keranjang */
.btn.keranjang {
  background-color: #ffc107;
  color: #333;
}

.btn.keranjang:hover {
  background-color: #e0a800;
}

/* Efek klik */
.btn:active {
  transform: scale(0.95);
}
</style>
