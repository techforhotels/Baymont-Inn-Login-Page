<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <!-- Navigation -->
    <nav class="fixed w-full z-50 bg-black bg-opacity-50 backdrop-blur-md">
      <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-2">
            <BuildingOfficeIcon class="h-8 w-8 text-hotel-gold" />
            <span class="text-2xl font-serif font-bold text-white">{{ siteConfig.brandName }}</span>
          </div>
          <div class="hidden md:flex space-x-8">
            <a href="#rooms" class="text-white hover:text-hotel-gold transition-colors">Rooms</a>
            <a href="#services" class="text-white hover:text-hotel-gold transition-colors">Services</a>
            <a href="#about" class="text-white hover:text-hotel-gold transition-colors">About</a>
            <a href="#contact" class="text-white hover:text-hotel-gold transition-colors">Contact</a>
          </div>
          <button @click="showLoginModal = true" class="btn-primary">
            Login / Book
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
        <img 
          :src="siteConfig.images.hero[0]" 
          alt="Luxury Hotel" 
          class="w-full h-full object-cover"
        />
      </div>
      
      <!-- Hero Content -->
      <div class="relative z-20 text-center px-4 animate-fade-in">
        <h1 class="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Experience Luxury
          <span class="block text-hotel-gold">Live Extraordinary</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto">
          Immerse yourself in the perfect blend of elegance and sophistication for an unparalleled stay
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button @click="showLoginModal = true" class="btn-primary text-lg">
            Book Now
          </button>
          <button class="btn-outline text-lg">
            Explore More
          </button>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ChevronDownIcon class="h-8 w-8 text-white" />
      </div>
    </section>

    <!-- Features Section -->
    <section id="services" class="py-20 bg-gray-900">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl md:text-5xl font-serif font-bold text-center text-white mb-16">
          Exceptional Services
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(feature, index) in features" 
            :key="index"
            class="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition-all duration-300 hover:transform hover:scale-105"
          >
            <component :is="feature.icon" class="h-12 w-12 text-hotel-gold mb-4" />
            <h3 class="text-2xl font-semibold text-white mb-3">{{ feature.title }}</h3>
            <p class="text-gray-300">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Rooms Preview Section -->
    <section id="rooms" class="py-20 bg-black">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl md:text-5xl font-serif font-bold text-center text-white mb-16">
          Featured Rooms
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(room, index) in rooms" 
            :key="index"
            class="group relative overflow-hidden rounded-xl cursor-pointer"
          >
            <img 
              :src="room.image" 
              :alt="room.name"
              class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h3 class="text-2xl font-serif font-bold text-white mb-2">{{ room.name }}</h3>
                <p class="text-gray-300 mb-3">{{ room.description }}</p>
                <div class="flex justify-between items-center">
                  <span class="text-hotel-gold text-xl font-bold">${{ room.price }}/night</span>
                  <button @click="showLoginModal = true" class="text-white hover:text-hotel-gold transition-colors">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-hotel-gold to-yellow-600">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-serif font-bold text-hotel-dark mb-6">
          Ready to Begin Your Luxury Journey?
        </h2>
        <p class="text-xl text-hotel-dark mb-8 opacity-90">
          Book now and enjoy exclusive offers
        </p>
        <button @click="showLoginModal = true" class="px-12 py-4 bg-hotel-dark text-white font-bold text-lg rounded-lg hover:bg-gray-900 transition-all duration-300 hover:shadow-2xl">
          Book Now
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black py-12">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <BuildingOfficeIcon class="h-8 w-8 text-hotel-gold" />
              <span class="text-2xl font-serif font-bold text-white">{{ siteConfig.brandName }}</span>
            </div>
            <p class="text-gray-400">
              Providing world-class luxury accommodation experiences
            </p>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#rooms" class="hover:text-hotel-gold transition-colors">Rooms</a></li>
              <li><a href="#services" class="hover:text-hotel-gold transition-colors">Services</a></li>
              <li><a href="#about" class="hover:text-hotel-gold transition-colors">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-4">Contact</h4>
            <ul class="space-y-2 text-gray-400">
              <li>Phone: {{ siteConfig.contact.phone }}</li>
              <li>Email: {{ siteConfig.contact.email }}</li>
              <li>Address: {{ siteConfig.contact.address }}</li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-4">Follow Us</h4>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-hotel-gold transition-colors">
                <span class="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" class="text-gray-400 hover:text-hotel-gold transition-colors">
                <span class="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" class="text-gray-400 hover:text-hotel-gold transition-colors">
                <span class="sr-only">Instagram</span>
                📷
              </a>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {{ siteConfig.copyright.year }} {{ siteConfig.copyright.text }}</p>
        </div>
      </div>
    </footer>

    <!-- Login Modal -->
    <Transition name="modal">
      <div 
        v-if="showLoginModal" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
        @click.self="showLoginModal = false"
      >
        <div class="bg-gray-900 rounded-2xl max-w-md w-full p-8 relative animate-scale-in">
          <button 
            @click="showLoginModal = false"
            class="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <XMarkIcon class="h-6 w-6" />
          </button>
          
          <div class="text-center mb-8">
            <BuildingOfficeIcon class="h-12 w-12 text-hotel-gold mx-auto mb-4" />
            <h2 class="text-3xl font-serif font-bold text-white mb-2">Welcome Back</h2>
            <p class="text-gray-400">Sign in to begin your luxury journey</p>
          </div>

          <form @submit.prevent="handleLogin" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input 
                v-model="loginForm.email"
                type="email" 
                required
                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-hotel-gold transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <input 
                v-model="loginForm.password"
                type="password" 
                required
                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-hotel-gold transition-colors"
                placeholder="••••••••"
              />
            </div>

            <div class="flex items-center justify-between text-sm">
              <label class="flex items-center text-gray-300">
                <input type="checkbox" class="mr-2 rounded">
                Remember me
              </label>
              <a href="#" class="text-hotel-gold hover:underline">Forgot password?</a>
            </div>

            <button 
              type="submit"
              :disabled="isLoading"
              class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!isLoading">Sign In</span>
              <span v-else>Signing in...</span>
            </button>

            <div class="text-center text-gray-400">
              Don't have an account?
              <a href="#" class="text-hotel-gold hover:underline">Sign Up</a>
            </div>
          </form>

          <div v-if="loginMessage" 
            :class="[
              'mt-4 p-3 rounded-lg text-center',
              loginMessage.type === 'success' ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'
            ]"
          >
            {{ loginMessage.text }}
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { siteConfig } from '../config/site.js'
import { 
  BuildingOfficeIcon, 
  ChevronDownIcon, 
  XMarkIcon 
} from '@heroicons/vue/24/outline'
import {
  SparklesIcon,
  HomeModernIcon,
  ClockIcon
} from '@heroicons/vue/24/solid'

const authStore = useAuthStore()

const showLoginModal = ref(false)
const isLoading = ref(false)
const loginMessage = ref(null)

const loginForm = ref({
  email: '',
  password: ''
})

const features = [
  {
    icon: SparklesIcon,
    title: 'Luxury Amenities',
    description: 'Enjoy world-class facilities and services that make every moment feel extraordinary'
  },
  {
    icon: HomeModernIcon,
    title: 'Elegant Rooms',
    description: 'Meticulously designed rooms equipped with premium amenities for your perfect retreat'
  },
  {
    icon: ClockIcon,
    title: '24/7 Service',
    description: 'Round-the-clock personalized service to meet your every need'
  }
]

const rooms = [
  {
    name: 'Deluxe King Room',
    description: 'Spacious comfort with a luxurious king-size bed',
    price: '299',
    image: siteConfig.images.rooms[0]
  },
  {
    name: 'Executive Suite',
    description: 'Separate living area for an elevated luxury experience',
    price: '599',
    image: siteConfig.images.rooms[1]
  },
  {
    name: 'Presidential Suite',
    description: 'Ultimate luxury with dedicated butler service',
    price: '1,999',
    image: siteConfig.images.rooms[2]
  }
]

const handleLogin = async () => {
  isLoading.value = true
  loginMessage.value = null
  
  const result = await authStore.login(loginForm.value.email, loginForm.value.password)
  
  isLoading.value = false
  
  if (result.success) {
    loginMessage.value = { type: 'success', text: 'Login successful! Welcome back.' }
    setTimeout(() => {
      showLoginModal.value = false
      loginMessage.value = null
    }, 1500)
  } else {
    loginMessage.value = { type: 'error', text: result.error || 'Login failed, please try again' }
  }
}
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-scale-in {
  animation: scale-in 0.3s ease-out;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .animate-scale-in,
.modal-leave-active .animate-scale-in {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from .animate-scale-in,
.modal-leave-to .animate-scale-in {
  transform: scale(0.9);
  opacity: 0;
}
</style>

