<template>
  <div class="register main-content">
    <h2>Register Akun</h2>
    <form @submit.prevent="register">
      <input v-model="username" placeholder="Username" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Daftar</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authstore'

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()
const authStore = useAuthStore()

const register = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/users?username=${username.value}`)
    if (res.data.length > 0) {
      error.value = 'Username sudah terdaftar'
      return
    }

    // Simpan ke db.json
    await axios.post('http://localhost:3000/users', {
      username: username.value,
      password: password.value
    })

    // Auto login setelah berhasil register
    await authStore.login(username.value, password.value)
    router.push('/') // arahkan ke halaman utama
  } catch (err) {
    error.value = 'Gagal mendaftar'
  }
}
</script>

<style scoped>
.register {
  max-width: 400px;
  margin: auto;
  padding: 1rem;
}

input {
  display: block;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  background-color: #0d6efd;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #084298;
}

.error {
  color: red;
  margin-top: 0.5rem;
}
</style>
