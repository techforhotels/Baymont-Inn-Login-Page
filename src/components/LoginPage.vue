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

            <!-- Terms of Service -->
            <div class="flex items-center justify-between text-sm">
              <label class="flex items-center gap-2 text-gray-300 cursor-pointer group">
                <input 
                  type="checkbox" 
                  v-model="loginForm.agreedToTerms"
                  class="w-4 h-4 rounded border-gray-600 text-hotel-gold focus:ring-hotel-gold focus:ring-offset-gray-900"
                />
                <span class="group-hover:text-white transition-colors">
                  I agree to the 
                  <button 
                    type="button"
                    @click="showTerms = true"
                    class="text-hotel-gold hover:text-yellow-500 underline transition-colors"
                  >
                    Terms of Service
                  </button>
                </span>
              </label>
            </div>

            <!-- Login Button -->
            <button 
              type="submit"
              :disabled="isLoading || !loginForm.agreedToTerms"
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

    <!-- Terms of Service Modal -->
    <Transition name="modal">
      <div 
        v-if="showTerms" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        @click.self="showTerms = false"
      >
        <div class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] flex flex-col border border-hotel-gold/20">
          <!-- Header -->
          <div class="flex items-center justify-between p-6 border-b border-gray-700/50">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 bg-gradient-to-br from-hotel-gold to-yellow-600 rounded-xl flex items-center justify-center">
                <ShieldCheckIcon class="h-6 w-6 text-gray-900" />
              </div>
              <div>
                <h2 class="text-2xl font-bold text-white">Hotel Wi-Fi Terms & Conditions</h2>
                <p class="text-sm text-gray-400">Please read carefully before connecting</p>
              </div>
            </div>
            <button 
              @click="showTerms = false"
              class="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-all duration-300 flex items-center justify-center group"
            >
              <XCircleIcon class="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          <!-- Content -->
          <div class="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
            <div class="prose prose-invert prose-hotel max-w-none">
              <p class="text-gray-300 leading-relaxed">
                By connecting to the hotel's Internet services (including Wi-Fi services), you ("the user") are acknowledging you have read and understood the following information, and agree to be bound by these terms and conditions.
              </p>

              <div class="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50 my-4">
                <h3 class="text-hotel-gold font-semibold text-lg mb-3 flex items-center gap-2">
                  <div class="w-2 h-2 bg-hotel-gold rounded-full"></div>
                  Service Disclaimer
                </h3>
                <p class="text-gray-300 leading-relaxed">
                  The hotel's Internet service is provided as-is, without warranties of any kind, either expressed or implied. Technical support is limited to hotel equipment only. Any changes to guest equipment or software are solely the responsibility of the user to ensure their system or equipment used is compatible with services offered by the hotel.
                </p>
              </div>

              <div class="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50 my-4">
                <h3 class="text-hotel-gold font-semibold text-lg mb-3 flex items-center gap-2">
                  <div class="w-2 h-2 bg-hotel-gold rounded-full"></div>
                  Content Control
                </h3>
                <p class="text-gray-300 leading-relaxed">
                  The hotel does not control content made available on the Internet by third parties, however, the hotel may block, remove, filter, or restrict access to content and systems that, at the hotel's discretion, is deemed inappropriate, violates the terms of this agreement or for any other reason.
                </p>
              </div>

              <div class="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50 my-4">
                <h3 class="text-hotel-gold font-semibold text-lg mb-3 flex items-center gap-2">
                  <div class="w-2 h-2 bg-hotel-gold rounded-full"></div>
                  User Responsibility
                </h3>
                <p class="text-gray-300 leading-relaxed mb-3">
                  The user accepts responsibility for any minor children in their care using the hotel services provided to guests, including but not limited to the Internet service(s) and television.
                </p>
                <p class="text-gray-300 leading-relaxed">
                  The user agrees not to use the hotel's Internet service(s) for any purpose that is unlawful or otherwise prohibited. The user is fully responsible for their use in accessing systems and content made available on the Internet and/or the television.
                </p>
              </div>

              <div class="bg-red-900/20 rounded-xl p-5 border border-red-700/50 my-4">
                <h3 class="text-red-400 font-semibold text-lg mb-3 flex items-center gap-2">
                  <div class="w-2 h-2 bg-red-400 rounded-full"></div>
                  Prohibited Activities
                </h3>
                <p class="text-gray-300 leading-relaxed mb-2">
                  By using the hotel's Internet service(s), the user agrees not to:
                </p>
                <ul class="space-y-2 text-gray-300 ml-4">
                  <li class="flex gap-2"><span class="text-hotel-gold">•</span> Transmit data or materials that contain viruses and/or code designed to interrupt services, destroy, or limit the use of computer equipment, software, or telecommunications equipment</li>
                  <li class="flex gap-2"><span class="text-hotel-gold">•</span> Transmit data or materials that infringe on the copyright, trademark or intellectual property of others</li>
                  <li class="flex gap-2"><span class="text-hotel-gold">•</span> Transmit data or materials that are harassing, defamatory, obscene, or attacking the race, ethnicity, sexual orientation, or physical attributes of any person</li>
                  <li class="flex gap-2"><span class="text-hotel-gold">•</span> Use equipment and services for excessive transfer of data</li>
                  <li class="flex gap-2"><span class="text-hotel-gold">•</span> Impersonate any person, entity, or misrepresent your affiliation with any person or entity for any purpose</li>
                  <li class="flex gap-2"><span class="text-hotel-gold">•</span> Conduct any activities that are criminal in nature</li>
                </ul>
              </div>

              <div class="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50 my-4">
                <h3 class="text-hotel-gold font-semibold text-lg mb-3 flex items-center gap-2">
                  <div class="w-2 h-2 bg-hotel-gold rounded-full"></div>
                  Business Use Disclaimer
                </h3>
                <p class="text-gray-300 leading-relaxed">
                  Access to the hotel's Internet service(s) is provided as a convenience and is not intended for business use. The user agrees to hold the hotel harmless for any loss of business or commerce associated with using the hotel's Internet service(s) or any failure of the hotel's network. The user agrees to release and hold harmless the hotel for any direct or consequential damages suffered by the user and/or suffered to the user's computer hardware, software, or telecommunications equipment resulting from the use or failure of the hotel's Internet service(s).
                </p>
              </div>

              <div class="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50 my-4">
                <h3 class="text-hotel-gold font-semibold text-lg mb-3 flex items-center gap-2">
                  <div class="w-2 h-2 bg-hotel-gold rounded-full"></div>
                  Service Availability
                </h3>
                <p class="text-gray-300 leading-relaxed">
                  Access to the hotel's Internet service(s) may be blocked, suspended, or terminated at any time, for any reason, at the discretion of the hotel, without prior notice. Any hotel Internet service(s) advertised or represented to be available to users may be rescinded, modified, or suspended by the hotel without notice or liability to the user. Any hotel Internet service(s) for which the user pays the hotel a fee and can not access shall be subject to a credit in favor of the user, upon request.
                </p>
              </div>

              <div class="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50 my-4">
                <h3 class="text-hotel-gold font-semibold text-lg mb-3 flex items-center gap-2">
                  <div class="w-2 h-2 bg-hotel-gold rounded-full"></div>
                  Privacy Notice
                </h3>
                <p class="text-gray-300 leading-relaxed">
                  While the hotel does take every effort to respect the privacy of the user, the hotel cannot guarantee privacy. Data is collected in the form of logs for maintenance purposes, performance, and system security requirements. The hotel will provide this information, without notification to the user, upon request by law enforcement in aiding investigation of criminal activity or civil disputes or in situations where the hotel is acting in good faith to prevent harm to others or violations of the law.
                </p>
              </div>

              <div class="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50 my-4">
                <h3 class="text-hotel-gold font-semibold text-lg mb-3 flex items-center gap-2">
                  <div class="w-2 h-2 bg-hotel-gold rounded-full"></div>
                  Limitation of Liability
                </h3>
                <p class="text-gray-300 leading-relaxed">
                  The hotel is not liable for any damage, undesired resource usage, or detrimental effects that may occur to a user's device and/or software while the user's device is attached to the hotel's Internet service(s). The user is responsible for any actions taken from their device, whether intentional or unintentional, that damage or otherwise affect other devices or users of the hotel's Internet service(s). The user hereby releases the hotel from liability for any loss, damage, security infringement, or injury which the user may sustain as a result of being allowed access to the hotel's Internet service(s). The user agrees to be solely responsible for any such loss, infringement, damage, or injury.
                </p>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="p-6 border-t border-gray-700/50 bg-gray-900/50">
            <div class="flex items-center justify-between gap-4">
              <p class="text-sm text-gray-400 flex items-center gap-2">
                <SparklesIcon class="h-4 w-4 text-hotel-gold" />
                By clicking "I Agree", you accept these terms and conditions
              </p>
              <button 
                @click="acceptTerms"
                class="px-8 py-3 bg-gradient-to-r from-hotel-gold via-yellow-500 to-hotel-gold text-gray-900 font-bold rounded-xl hover:shadow-lg hover:shadow-hotel-gold/50 transition-all duration-300 flex items-center gap-2 bg-size-200 bg-pos-0 hover:bg-pos-100"
              >
                <CheckCircleIcon class="h-5 w-5" />
                I Agree
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>

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
  agreedToTerms: false
})

const showTerms = ref(false)

const acceptTerms = () => {
  loginForm.value.agreedToTerms = true
  showTerms.value = false
}

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

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .bg-gradient-to-br,
.modal-leave-active .bg-gradient-to-br {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .bg-gradient-to-br {
  transform: scale(0.95) translateY(20px);
}

.modal-leave-to .bg-gradient-to-br {
  transform: scale(0.95) translateY(20px);
}

/* Custom Scrollbar */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(31, 41, 55, 0.5);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #D4AF37, #B8941F);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #E5C158, #D4AF37);
}

/* Prose customization */
.prose-hotel {
  color: #e5e7eb;
}

.prose-hotel h3 {
  margin-top: 0;
  margin-bottom: 0.75rem;
}

.prose-hotel p {
  margin: 0;
}

.prose-hotel ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>

