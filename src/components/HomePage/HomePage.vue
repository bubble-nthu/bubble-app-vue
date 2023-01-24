<script lang="ts" setup>
import { ref } from 'vue'
import Header from '../BasicLayout/Header.vue'
import SearchBar from '../Function/SearchBar.vue'
import Activity from './Activity/Activity.vue'

</script>

<template>
  <Header />
  <section class="main-wrapper">
    <Activity />
  </section>
  <el-footer>Footer</el-footer>
</template>
<style>
.main-wrapper {
  display: flex;
  margin: 1rem 8rem;
  height: 100%;
  width: 100%;
}
</style>
