import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isLoggedIn = ref(false)
  
  const login = async (email, password) => {
    // You can add actual API calls here
    // Currently simulating login
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      user.value = {
        email,
        name: email.split('@')[0],
      }
      isLoggedIn.value = true
      return { success: true }
    } catch (error) {
      return { success: false, error: 'Login failed' }
    }
  }
  
  const logout = () => {
    user.value = null
    isLoggedIn.value = false
  }
  
  return {
    user,
    isLoggedIn,
    login,
    logout,
  }
})

