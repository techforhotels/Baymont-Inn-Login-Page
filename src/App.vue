<script setup>
import { onMounted } from 'vue'
import 'aos/dist/aos.css'

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
</script>

<template>
  <div>
    <Transition name="page" mode="out-in">
      <router-view />
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
