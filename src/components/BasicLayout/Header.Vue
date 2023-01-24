<script lang="ts" setup>
import { ref } from 'vue'
</script>

<template>
  <header class="header-flex-container">
    <div class="header-wrapper">
      <scan class="header-logo">
        <img src = "/src/assets/HomePage/Logo.svg" alt="Bubble Log" height="58" width="124" />
      </scan>
      <el-link class="header-function header-font" :underline="false">登入</el-link>
      <el-link class="header-function header-font" :underline="false">註冊</el-link>
      <el-button class="header-cta header-font" type="primary">展開行動</el-button>
    </div>
  </header>
</template>

<style>
.header-logo{
  margin-right: auto;
}
.header-font {
  font-size: 1em;
  font-weight: Regular;
}
.header-function {
  display: inline-flex;
  height: 100%;
  padding: 0 var(--el-menu-base-level-padding);
  align-items: center;
}
.header-cta {
  display: inline-flex;
  height: 100%;
  margin: 0 var(--el-menu-base-level-padding);
  align-items: center;
}
.header-flex-container {
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 2rem;
  height: 100%;
  width: 100%;
  border-bottom: 1px solid var(--el-color-info-light-7);
}
.header-wrapper {
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0rem 2rem;
  height: 100%;
  width: 100%;
}
.el-link .el-icon--right.el-icon {
  vertical-align: text-bottom;
}
</style>
