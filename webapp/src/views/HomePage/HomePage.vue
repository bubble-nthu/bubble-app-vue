<script lang="ts" setup>
import { ref } from 'vue'
import Header from '/src/components/BasicLayout/Header.vue'
import Footer from '/src/components/BasicLayout/Footer.vue'
import SearchBar from '/src/components/Function/SearchBar.vue'
import Activity from './Recommendation/Activity.vue'
import Project from './Recommendation/Project.vue'

</script>

<template>
  <Header />
  <SearchBar />
  <Activity />
  <Project />
  <Footer />
</template>
<style>
</style>
