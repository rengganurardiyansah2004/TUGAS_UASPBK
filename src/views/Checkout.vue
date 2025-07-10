<template>
  <div class="checkout-page">
    <h2>Checkout</h2>

    <!-- FORM CHECKOUT -->
    <form v-if="keranjangStore.keranjang.length > 0" @submit.prevent="submitCheckout" class="checkout-form">
      <label>Nama Lengkap:</label>
      <input v-model="nama" required />

      <label>Alamat Pengiriman:</label>
      <textarea v-model="alamat" required></textarea>

      <label>Metode Pembayaran:</label>
      <select v-model="pembayaran" required>
        <option value="transfer">Transfer Bank</option>
        <option value="cod">Bayar di Tempat</option>
      </select>

      <!-- Ringkasan Pesanan -->
      <h3>Ringkasan Pesanan:</h3>
      <table class="summary">
        <thead>
          <tr>
            <th>Produk</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in keranjangStore.keranjang" :key="item.id">
            <td>{{ item.nama }}</td>
            <td>Rp {{ item.harga.toLocaleString() }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td><strong>Total</strong></td>
            <td><strong>Rp {{ totalHarga.toLocaleString() }}</strong></td>
          </tr>
        </tfoot>
      </table>

      <button type="submit">Selesaikan Pembelian</button>
    </form>

    <!-- Informasi jika keranjang kosong -->
    <div v-else class="empty-cart">
      <p>Keranjang Anda kosong. Silakan tambahkan produk terlebih dahulu.</p>
    </div>

    <!-- ✅ Popup Notifikasi -->
    <div v-if="showPopup" class="popup">
      ✅ Pesanan berhasil dilakukan!
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useKeranjangStore } from '../stores/keranjangStore'
import { useRouter } from 'vue-router'

const keranjangStore = useKeranjangStore()
const router = useRouter()

const nama = ref('')
const alamat = ref('')
const pembayaran = ref('transfer')
const showPopup = ref(false)

const totalHarga = computed(() =>
  keranjangStore.keranjang.reduce((total, item) => total + item.harga, 0)
)

const submitCheckout = () => {
  // Tampilkan popup
  showPopup.value = true

  // Delay 2 detik sebelum reset & redirect
  setTimeout(() => {
    showPopup.value = false
    keranjangStore.keranjang = []
    router.push('/produk')
  }, 2000)
}
</script>

<style scoped>
.checkout-page {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

.checkout-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.checkout-form input,
.checkout-form textarea,
.checkout-form select {
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

/* Ringkasan pesanan */
.summary {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

.summary th,
.summary td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

.summary th {
  background-color: #f0f0f0;
}

/* Popup animasi */
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #198754;
  color: white;
  padding: 1.2rem 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  animation: fade-in-out 2s ease-in-out;
  font-size: 1.1rem;
  text-align: center;
}


@keyframes fade-in-out {
  0%   { opacity: 0; transform: translate(-50%, -60%); }
  10%  { opacity: 1; transform: translate(-50%, -50%); }
  90%  { opacity: 1; }
  100% { opacity: 0; transform: translate(-50%, -40%); }
}


.empty-cart {
  margin-top: 2rem;
  text-align: center;
  font-style: italic;
  color: gray;
}
</style>
