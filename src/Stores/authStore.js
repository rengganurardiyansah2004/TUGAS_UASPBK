import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(false)
  const username = ref('')
  const role = ref('') // jika ingin membedakan admin/pembeli

  // Cek localStorage saat pertama kali app dibuka
  if (localStorage.getItem('username')) {
    isLoggedIn.value = true
    username.value = localStorage.getItem('username')
    role.value = localStorage.getItem('role') || ''
  }

  // LOGIN
  const login = async (inputUsername, inputPassword) => {
    try {
      const response = await axios.get('http://localhost:3000/users')
      const user = response.data.find(
        u => u.username === inputUsername && u.password === inputPassword
      )

      if (user) {
        isLoggedIn.value = true
        username.value = user.username
        role.value = user.role || 'pembeli' // default 'pembeli' jika tidak ada role

        // Simpan ke localStorage
        localStorage.setItem('username', user.username)
        localStorage.setItem('role', user.role || 'pembeli')

        return true
      } else {
        return false
      }
    } catch (error) {
      console.error('Login error:', error)
      return false
    }
  }

  // LOGOUT
  const logout = () => {
    isLoggedIn.value = false
    username.value = ''
    role.value = ''
    localStorage.removeItem('username')
    localStorage.removeItem('role')
  }

  // REGISTER (opsional: auto-login setelah berhasil)
  const register = async (inputUsername, inputPassword) => {
    try {
      const res = await axios.get(`http://localhost:3000/users?username=${inputUsername}`)
      if (res.data.length > 0) {
        return { success: false, message: 'Username sudah digunakan' }
      }

      const newUser = {
        username: inputUsername,
        password: inputPassword,
        role: 'pembeli' // default role
      }

      await axios.post('http://localhost:3000/users', newUser)

      // Auto login
      isLoggedIn.value = true
      username.value = inputUsername
      role.value = 'pembeli'
      localStorage.setItem('username', inputUsername)
      localStorage.setItem('role', 'pembeli')

      return { success: true }
    } catch (err) {
      console.error('Register error:', err)
      return { success: false, message: 'Gagal mendaftar' }
    }
  }

  return {
    isLoggedIn,
    username,
    role,
    login,
    logout,
    register
  }
})
