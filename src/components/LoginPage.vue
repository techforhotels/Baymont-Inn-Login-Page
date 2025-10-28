<template>
  <div class="min-h-screen flex">
    <!-- Left Side - Login Form -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <!-- Animated background elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-20 w-96 h-96 bg-hotel-gold rounded-full filter blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 right-20 w-96 h-96 bg-yellow-600 rounded-full filter blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      </div>
      
      <!-- Floating particles -->
      <div class="absolute inset-0">
        <div 
          v-for="i in 15" 
          :key="i"
          class="absolute w-2 h-2 bg-hotel-gold rounded-full opacity-20 animate-float"
          :style="{ 
            left: `${Math.random() * 100}%`, 
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }"
        ></div>
      </div>
      
      <div class="w-full max-w-md relative z-10">
        <!-- Logo and Branding -->
          <div class="text-center mb-12 animate-fade-in">
            <div class="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-hotel-gold to-yellow-500 rounded-2xl mb-6 shadow-2xl shadow-hotel-gold/50 p-5 relative">
              <div class="absolute inset-0 bg-white/10 rounded-2xl"></div>
              <img :src="siteConfig.logoPath" :alt="`${siteConfig.brandName} Logo`" class="w-full h-full object-contain relative z-10 filter brightness-110 contrast-110 drop-shadow-xl" />
            </div>
            <h1 class="text-5xl font-serif font-bold text-white mb-3">
              {{ siteConfig.brandName }}
            </h1>
            <p class="text-gray-400 text-lg">
              Guest Wi-Fi Access
            </p>
          </div>

        <!-- Header -->
        <div class="text-center mb-8" data-aos="fade-up">
          <h2 class="text-2xl font-bold text-white mb-2">Wi-Fi Access</h2>
          <p class="text-gray-400">Please enter your access code to connect</p>
        </div>

        <!-- Login Form -->
        <div class="space-y-6" data-aos="fade-up" data-aos-delay="100">
          <form @submit.prevent="handleLogin" class="space-y-6">
            <!-- Access Code Field (作为用户名和密码) -->
            <div class="group">
              <label class="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                <LockClosedIcon class="h-4 w-4 text-hotel-gold" />
                Access Code
              </label>
              <div class="relative">
                <input 
                  v-model="loginForm.password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  placeholder="Enter your access code"
                  class="w-full px-5 py-4 bg-gray-800/50 backdrop-blur border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-hotel-gold transition-all duration-300 group-hover:border-gray-600"
                />
                <button 
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-hotel-gold transition-colors"
                >
                  <EyeIcon v-if="!showPassword" class="h-5 w-5" />
                  <EyeSlashIcon v-else class="h-5 w-5" />
                </button>
              </div>
              <p class="mt-2 text-xs text-gray-500">
                Enter your unique access code provided by the hotel
              </p>
            </div>

            <!-- Remember -->
            <div class="flex items-center justify-between text-sm">
              <label class="flex items-center gap-2 text-gray-300 cursor-pointer group">
                <input 
                  type="checkbox" 
                  v-model="loginForm.remember"
                  class="w-4 h-4 rounded border-gray-600 text-hotel-gold focus:ring-hotel-gold focus:ring-offset-gray-900"
                />
                <span class="group-hover:text-white transition-colors">Term of service check box require to connect,I can provide text for terms</span>
              </label>
              <!-- <a href="#" class="text-hotel-gold hover:text-yellow-500 transition-colors font-semibold">
                Need Help?
              </a> -->
            </div>

            <!-- Login Button -->
            <button 
              type="submit"
              :disabled="isLoading"
              class="w-full py-4 bg-gradient-to-r from-hotel-gold via-yellow-500 to-hotel-gold text-hotel-dark font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-hotel-gold/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group bg-size-200 bg-pos-0 hover:bg-pos-100"
            >
              <span v-if="!isLoading" class="flex items-center gap-3">
                <SparklesIcon class="h-5 w-5 group-hover:rotate-12 transition-transform" />
                Connect
                <ArrowRightIcon class="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span v-else class="flex items-center gap-2">
                <div class="w-5 h-5 border-2 border-hotel-dark border-t-transparent rounded-full animate-spin"></div>
                Signing in...
              </span>
            </button>

          </form>

          <!-- Message -->
          <div v-if="message" 
            :class="[
              'p-4 rounded-xl text-center font-semibold flex items-center justify-center gap-2',
              message.type === 'success' ? 'bg-green-900/50 text-green-200 border border-green-700' : 'bg-red-900/50 text-red-200 border border-red-700'
            ]"
          >
            <CheckCircleIcon v-if="message.type === 'success'" class="h-5 w-5" />
            <XCircleIcon v-else class="h-5 w-5" />
            {{ message.text }}
          </div>
        </div>


        <!-- Back to Main -->
        <!-- <div class="mt-8 text-center">
          <a 
            href="/"
            @click.prevent="router.push('/home')"
            class="inline-flex items-center gap-2 text-gray-400 hover:text-hotel-gold transition-colors group"
          >
            <ArrowLeftIcon class="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Main Page
          </a>
        </div> -->
      </div>
    </div>

    <!-- Right Side - Visual Showcase -->
    <div class="hidden lg:block lg:w-1/2 relative overflow-hidden">
      <!-- Background Image Carousel -->
      <Transition name="fade" mode="out-in">
        <div 
          :key="currentImageIndex"
          class="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          :style="{ backgroundImage: `url(${showcaseImages[currentImageIndex]})` }"
        ></div>
      </Transition>
      
      <!-- Overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent"></div>
      
      <!-- Content -->
      <div class="relative h-full flex flex-col justify-between p-16 text-white">
        <!-- Top -->
        <div>
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-hotel-gold/20 backdrop-blur rounded-full border border-hotel-gold/30">
            <SparklesIcon class="h-5 w-5 text-hotel-gold" />
            <span class="text-sm font-semibold">Premium Experience</span>
          </div>
        </div>
        
        <!-- Middle -->
        <div class="space-y-8">
          <Transition name="slide-up" mode="out-in">
            <div :key="currentFeatureIndex" class="space-y-4">
              <h2 class="text-5xl font-serif font-bold leading-tight">
                {{ features[currentFeatureIndex].title }}
              </h2>
              <p class="text-xl text-gray-300 leading-relaxed max-w-lg">
                {{ features[currentFeatureIndex].description }}
              </p>
              
              <!-- Stats -->
              <div class="flex gap-8 pt-8">
                <div 
                  v-for="stat in features[currentFeatureIndex].stats" 
                  :key="stat.label"
                  class="group"
                >
                  <div class="text-4xl font-bold text-hotel-gold mb-1">
                    {{ stat.value }}
                  </div>
                  <div class="text-sm text-gray-400 group-hover:text-white transition-colors">
                    {{ stat.label }}
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
        
        <!-- Bottom - Dots -->
        <div class="flex gap-2">
          <button 
            v-for="(_, index) in features" 
            :key="index"
            @click="currentFeatureIndex = index; currentImageIndex = index"
            :class="[
              'h-1.5 rounded-full transition-all duration-300',
              currentFeatureIndex === index ? 'w-12 bg-hotel-gold' : 'w-6 bg-white/30 hover:bg-white/50'
            ]"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { siteConfig } from '../config/site.js'

const router = useRouter()
import {
  BuildingOfficeIcon,
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  SparklesIcon,
  UserIcon,
  ShieldCheckIcon,
  AtSymbolIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/vue/24/outline'

const authStore = useAuthStore()
const showPassword = ref(false)
const isLoading = ref(false)
const message = ref(null)
const currentImageIndex = ref(0)
const currentFeatureIndex = ref(0)

const loginForm = ref({
  password: '',
  remember: false
})

const showcaseImages = siteConfig.images.loginShowcase

const features = [
  {
    title: 'Luxury Redefined',
    description: 'Experience world-class accommodations with impeccable service and breathtaking views that will make your stay unforgettable.',
    stats: [
      { value: '500+', label: 'Premium Rooms' },
      { value: '98%', label: 'Satisfaction' }
    ]
  },
  {
    title: 'Exclusive Benefits',
    description: 'Members enjoy priority booking, complimentary upgrades, and access to exclusive events and experiences.',
    stats: [
      { value: '24/7', label: 'Concierge' },
      { value: '50+', label: 'Amenities' }
    ]
  },
  {
    title: 'Global Presence',
    description: 'Join thousands of satisfied guests from around the world who trust us for their luxury accommodation needs.',
    stats: [
      { value: '150+', label: 'Countries' },
      { value: '25+', label: 'Years' }
    ]
  },
  {
    title: 'Award Winning',
    description: 'Recognized globally for excellence in hospitality, our commitment to perfection sets us apart.',
    stats: [
      { value: '100+', label: 'Awards' },
      { value: '5★', label: 'Rating' }
    ]
  }
]

const handleLogin = async () => {
  isLoading.value = true
  message.value = null
  
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // 使用密码作为用户名和密码
  const result = await authStore.login(loginForm.value.password, loginForm.value.password)
  
  isLoading.value = false
  
  if (result.success) {
    message.value = { type: 'success', text: '✨ Welcome! Redirecting to your dashboard...' }
    setTimeout(() => {
      window.location.href = '/'
    }, 2000)
  } else {
    message.value = { type: 'error', text: result.error || 'Invalid access code. Please try again.' }
  }
}


// Auto-rotate showcase
let interval
onMounted(() => {
  interval = setInterval(() => {
    currentFeatureIndex.value = (currentFeatureIndex.value + 1) % features.length
    currentImageIndex.value = currentFeatureIndex.value
  }, 5000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float linear infinite;
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.bg-size-200 {
  background-size: 200% auto;
}

.bg-pos-0 {
  background-position: 0% center;
}

.bg-pos-100 {
  background-position: 100% center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 0.5s ease;
}

.slide-up-leave-active {
  transition: all 0.3s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>

