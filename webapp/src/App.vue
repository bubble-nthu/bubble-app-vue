<script setup>
import HomePage from '@/views/HomePage/HomePage.vue'
import Header from '@/components/BasicLayout/Header.vue'
import Footer from '@/components/BasicLayout/Footer.vue'
//  <HomePage />
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
