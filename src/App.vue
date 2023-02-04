<script setup>
import HomePage from './views/HomePage/HomePage.vue'
//  <HomePage />
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div>
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'Users' }">Users</router-link>
  </div>

  <p>
    <!-- Use router.go()/push() instead of $router -->
    <button @click="router.go(-1)">Go back 1 step</button>
    <button @click="router.go(1)" >Go forward 1 step</button>

    <button @click="router.push('/user/1')">Redirect to "/user/1"</button>
  </p>

  <router-view/>
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
