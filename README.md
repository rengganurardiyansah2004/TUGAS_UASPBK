Toko Samsung - Vue.js Project
Proyek ini adalah aplikasi web toko online khusus produk Samsung, dibuat menggunakan Vue.js 3 + Vite, dengan manajemen state menggunakan Pinia, serta data diambil dari JSON Server. Proyek ini dibuat sebagai tugas akhir yang mencakup seluruh kriteria yang diminta dosen.

Fitur Aplikasi
🔐 Login & Register (Pembeli)
📦 Daftar Produk dari JSON Server
🛍️ Keranjang Belanja
💳 Checkout + Ringkasan Total
📘 Halaman Detail Produk
🔄 Router Guard (proteksi halaman)
🧠 Manajemen State dengan Pinia
✅ Unit Testing menggunakan Vitest
📸 Gambar Produk Otomatis (URL)
⚡ Animasi Feedback saat tambah produk / checkout
🎨 Tampilan Modern dan Responsif

Struktur Utama Proyek
src/
├── components/
│   └── Sidebar.vue
├── views/
│   ├── Home.vue
│   ├── ProdukList.vue
│   ├── ProdukDetail.vue
│   ├── Keranjang.vue
│   ├── Checkout.vue
│   ├── Login.vue
│   └── Register.vue
├── Stores/
│   ├── authStore.js
│   ├── produkStore.js
│   └── keranjangStore.js
├── router/
│   └── index.js
├── assets/
│   └── style.css (opsional)
└── App.vue


 Pemenuhan Kriteria Tugas Akhir
| Kriteria                              | Status |
| ------------------------------------  | ------ |
| ✅ Menggunakan **Vue 3**              | ✔️     |
| ✅ Data dari **JSON Server**          | ✔️     |
| ✅ Autentikasi Login/Logout           | ✔️     |
| ✅ Manajemen state pakai **Pinia**    | ✔️     |
| ✅ Ada **keranjang dan checkout**     | ✔️     |
| ✅ Desain menarik dan responsif       | ✔️     |
| ✅ Menggunakan **Vue Router**         | ✔️     |
| ✅ Ada **unit testing (Vitest)**      | ✔️     |
| ✅ Menampilkan gambar, harga, dll     | ✔️     |
| ✅ Feedback interaktif (popup, alert) | ✔️     |

Teknologi yang Digunakan
-Vue 3 + Vite
-Vue Router untuk navigasi halaman
-Pinia untuk state management (login, keranjang)
-Axios untuk HTTP request ke JSON Server
-JSON Server untuk fake REST API
-CSS Custom & Scoped Style (tanpa Tailwind)
-Vitest (opsional, untuk unit testing)

Penjelasan Fitur-Fitur Toko Samsung
1. 🔐 Autentikasi Pembeli (Login & Register)
Pengguna dapat mendaftar akun baru menggunakan form register. Setelah berhasil register, pengguna akan otomatis login. Login dilakukan dengan mencocokkan username dan password dari db.json menggunakan Axios.
Status login disimpan dengan Pinia dan localStorage agar tidak hilang saat halaman direfresh.
2. 🖼️ Halaman Home Interaktif
Halaman utama menampilkan:
Hero banner bergambar dengan teks sambutan. Fitur-fitur toko berupa list keunggulan (produk ori, jaminan garansi, dsb).Gaya modern dan responsif.
3.📦 Daftar Produk Samsung
Menampilkan data produk dari db.json secara dinamis menggunakan Axios.Setiap produk ditampilkan dalam bentuk kartu dengan:Gambar produk,Nama,Harga,Tombol “Detail” dan “Tambah ke Keranjang”,Desain modern dengan grid layout dan animasi hover.
4. 🛒 Keranjang Belanja
Pengguna dapat menambahkan produk ke keranjang.Di halaman keranjang, pengguna bisa: Melihat daftar produk terpilih, Menghapus produk, Melihat gambar dan harga tiap item, Keranjang dikelola menggunakan Pinia agar tetap tersimpan walaupun berpindah halaman.

5. ✅ Checkout Pesanan
Pengguna mengisi form checkout:Nama lengkap, Alamat pengiriman,Metode pembayaran,Menampilkan ringkasan pesanan dan total harga keseluruhan. Setelah checkout, akan muncul popup notifikasi sukses.Keranjang akan dikosongkan otomatis.

6. 🧭 Sidebar Navigasi Dinamis
Navigasi di sidebar mencakup: Home,Produk,Keranjang,Checkout,Login / Register / Logout (tergantung status login),Sidebar dibuat interaktif dan responsif.Ada penambahan logo dan garis pemisah agar tampilannya modern.

7. 🔒 Proteksi Akses Halaman
Halaman seperti: /produk /keranjang /checkout /admin
hanya bisa diakses jika pengguna sudah login. Jika belum login, akan otomatis diarahkan ke halaman login.


 Kontributor
Dibuat oleh Rengga Nur Ardiyansah
Tugas akhir Vue.js – [Kelas Pemrograman Web Frontend]
Tahun Ajaran 2025