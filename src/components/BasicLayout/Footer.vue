<script lang="ts" setup>
import { ref } from 'vue'
</script>

<template>
  <footer>
    <div class="footer-statement-flex-container">
      <img src = "/src/assets/HomePage/Logo_no_word.svg" alt="Bubble Log" height="48" width="103" />
      <div class="footer-statement">
        <scan>期許校園永續專案都能像泡泡一樣越飛越高，</scan>
        <br/>
        <scan>讓更多人看見，並發揮更長久的影響力！</scan>
      </div>
    </div>
    <hr class="footer-line"/>
    <div class="footer-link-flex-container">
      <el-link class="footer-link-text" :underline="false">尋找活動</el-link>
      <el-link class="footer-link-text" :underline="false">加入專案</el-link>
      <el-link class="footer-link-text" :underline="false">發起行動</el-link>
      <el-link type="info" class="footer-link-text" style="margin-left: auto;" :underline="false">聯絡我們</el-link>
    </div>
  </footer>
</template>

<style>
.footer-link-text {
  font-size: 1rem;
  padding: 0rem 1rem;
}
.footer-statement {
  font-size: 1rem;
  text-align:left;
}
.footer-statement-flex-container {
  display: flex;
}
.footer-link-flex-container {
  display: flex;
  justify-content: space-evenly;
}
.footer-line {
  margin: 2rem 0rem;
  border: 0.5px solid var(--el-color-info-light-7);
}
footer {
  height: 20vh;
  background-color: var(--el-color-info-light-9);
  padding: 5rem;
}
</style>
