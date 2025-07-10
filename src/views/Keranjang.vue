<template>
  <div class="keranjang-container">
    <h2>🛒 Keranjang Belanja</h2>

    <div v-if="keranjang.length === 0" class="kosong">
      <p>Keranjang Anda kosong.</p>
    </div>

    <div v-else>
      <div class="keranjang-grid">
        <div class="keranjang-item" v-for="item in keranjang" :key="item.id">
          <img :src="item.gambar" alt="Gambar Produk" />
          <div class="info">
            <h3>{{ item.nama }}</h3>
            <p class="harga">Rp {{ item.harga.toLocaleString() }}</p>
            <button @click="hapus(item.id)">Hapus</button>
          </div>
        </div>
      </div>

      <div class="total">
        Total: <strong>Rp {{ totalHarga.toLocaleString() }}</strong>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useKeranjangStore } from '../stores/keranjangStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const keranjangStore = useKeranjangStore()
const { keranjang } = storeToRefs(keranjangStore)

const hapus = (id) => {
  keranjangStore.hapusDariKeranjang(id)
}

const totalHarga = computed(() =>
  keranjang.value.reduce((total, item) => total + item.harga, 0)
)
</script>

<style scoped>
.keranjang-container {
  padding: 2rem;
  margin-left: 170px;
  font-family: 'Segoe UI', sans-serif;
}

h2 {
  margin-bottom: 1rem;
  color: #0d6efd;
}

.kosong {
  font-style: italic;
  color: gray;
}

.keranjang-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.keranjang-item {
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
}

.keranjang-item:hover {
  transform: translateY(-2px);
}

.keranjang-item img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 1rem;
  border-radius: 8px;
}

.info {
  flex: 1;
}

.harga {
  color: #198754;
  font-weight: bold;
  margin: 0.5rem 0;
}

button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 0.4rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  background-color: #c82333;
}

.total {
  margin-top: 1.5rem;
  font-size: 1.2rem;
  color: #000;
  text-align: right;
  font-weight: bold;
}
</style>
