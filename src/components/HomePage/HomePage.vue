<script lang="ts" setup>
import { ref } from 'vue'
import Header from '../BasicLayout/Header.vue'
import Footer from '../BasicLayout/Footer.vue'
import SearchBar from '../Function/SearchBar.vue'
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
