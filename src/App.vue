<script setup>
import { ref, onMounted } from 'vue'
import HotelLandingPro from './components/HotelLandingPro.vue'
import LoginPage from './components/LoginPage.vue'
import 'aos/dist/aos.css'

const currentView = ref('main') // 'main' or 'login'

onMounted(() => {
  import('aos').then(AOS => {
    AOS.default.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    })
  })
})

const showLogin = () => {
  currentView.value = 'login'
}

const showMain = () => {
  currentView.value = 'main'
}
</script>

<template>
  <div>
    <Transition name="page" mode="out-in">
      <HotelLandingPro v-if="currentView === 'main'" @showLogin="showLogin" />
      <LoginPage v-else @goToMain="showMain" />
    </Transition>
  </div>
</template>

<style>
#app {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
