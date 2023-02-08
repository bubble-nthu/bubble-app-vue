<script lang="ts" setup>
import { ref } from 'vue'
import SearchBar from '@/components/Function/SearchBar.vue'
import Activity from '@/views/HomePage/Recommendation/Activity.vue'
import Project from '@/views/HomePage/Recommendation/Project.vue'

</script>
<template>
  <section class="main">
    <SearchBar />
    <Activity />
    <Project />
  </section>
</template>

<style>
.main {
  background-color: #fbfbfb;
}
</style>