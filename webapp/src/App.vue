<script lang="ts" setup>
import { ref } from 'vue'
import Header from './components/BasicLayout/Header.vue'
import Footer from './components/BasicLayout/Footer.vue'
import HelloWorld from './components/HelloWorld.vue'
</script>
<template>
  <Header />
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Footer />
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
