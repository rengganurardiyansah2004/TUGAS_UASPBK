<template>
  <div class="login-container">
    <h2>Login Pembeli</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="username" type="text" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

const username = ref('')
const password = ref('')
const error = ref('')

const router = useRouter()
const authStore = useAuthStore()

const handleLogin = async () => {
  const success = await authStore.login(username.value, password.value)

  if (success) {
    router.push('/')
  } else {
    error.value = 'Username atau password salah.'
  }
}
</script>

<style scoped>
.login-container {
  max-width: 300px;
  margin: 100px auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  background: #f9f9f9;
}

.login-container input {
  display: block;
  width: 100%;
  margin: 1rem 0;
  padding: 0.5rem;
}

.login-container button {
  padding: 0.5rem 1rem;
  background: #0d6efd;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.error {
  color: red;
  margin-top: 1rem;
}
</style>
