<script lang="ts" setup>
import { ref } from 'vue'
import Header from '@/components/BasicLayout/Header.vue'
import Footer from '@/components/BasicLayout/Footer.vue'
import SearchBar from '@/components/Function/SearchBar.vue'
import Activity from '@/views/HomePage/Recommendation/Activity.vue'
import Project from '@/views/HomePage/Recommendation/Project.vue'

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