<script setup>
import Header from './BasicLayout/Header.vue'
import SearchBar from './Function/SearchBar.vue'

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <SearchBar />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<style>
</style>
