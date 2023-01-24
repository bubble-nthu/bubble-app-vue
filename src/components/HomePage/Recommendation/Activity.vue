<script lang="ts" setup>
import { ref } from 'vue'
import Card from '../../Function/Card.vue'

</script>

<template>
  <section>
    <div class="homepage-section-flex-container">
      <span class="material-symbols-outlined homepage-section-title-icon">
      celebration
      </span>
      <span>
        近期活動
      </span>
    </div>
    <el-carousel autoplay="false" indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <div class="homepage-section-carousel">
          <el-row style="padding: 0.5rem">
            <el-col
              v-for="(o, index) in 3"
              :key="o"
              :span="8"
              style="display: flex"
            >
              <Card />
            </el-col>
          </el-row>
        </div>
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<style>
.el-carousel__container {
  height: 60vh;
}
.el-carousel__item {
  display: flex;
  justify-content: center;
}
.homepage-section-carousel {
  display: flex;
  height: 100%;
  width: 90%;
  justify-content: space-evenly;
  align-items: center;
}
.homepage-section-title-icon {
  padding: 0rem 0.5rem;
}
.homepage-section-flex-container {
  display: flex;
  align-items: center;
  padding: 1rem 5rem;
  font-size: 1.5rem;
  font-weight: Bold;
}
.el-row {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 16px;
}

.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
