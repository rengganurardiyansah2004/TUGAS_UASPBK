<!-- src/views/Home.vue -->
<template>
  <div class="main-content home-page">
    <div class="hero">
      <img src="https://images.samsung.com/id/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-kv.jpg" alt="Samsung Banner">
      <div class="hero-text">
        <h1>Selamat Datang di Toko Samsung</h1>
        <p>Temukan smartphone Samsung terbaik dan terbaru hanya di sini.</p>
        <router-link to="/produk" class="btn-browse">Lihat Produk</router-link>
      </div>
    </div>

    <section class="fitur">
      <h2>Kenapa Pilih Kami?</h2>
      <ul>
        <li>✅ Produk Resmi & Bergaransi</li>
        <li>✅ Pengiriman Cepat</li>
        <li>✅ Pembayaran Aman</li>
        <li>✅ Dukungan Pelanggan 24/7</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  font-family: 'Segoe UI', sans-serif;
  padding: 2rem;
  padding-left: 10px; /* ➕ geser dari kiri agar tidak tertutup sidebar */
  background-color: #f9f9f9;
  min-height: 100vh;
}

.hero {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  animation: fadeInDown 0.7s ease;
}

.hero img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  filter: brightness(70%);
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.hero-text h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.btn-browse {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  background-color: #ffc107;
  color: black;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
  transition: background-color 0.2s ease;
}

.btn-browse:hover {
  background-color: #e0a800;
}

.fitur {
  background: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.08);
  animation: fadeInUp 0.7s ease;
}

.fitur h2 {
  margin-bottom: 1rem;
  color: #0d6efd;
}

.fitur ul {
  list-style: none;
  padding: 0;
  line-height: 1.8;
}

.fitur ul li::before {
  content: "✔️";
  margin-right: 8px;
  color: #0d6efd;
  font-size: 1rem;
}

/* Animasi kecil */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
