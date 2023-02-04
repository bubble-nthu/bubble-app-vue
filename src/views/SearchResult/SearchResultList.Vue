<script lang="ts" setup>
import { ref } from 'vue'
import Card from '/src/components/Function/Card.vue'

</script>

<template>
  <section>
    <div class="homepage-section-carousel">
      <el-row style="padding: 0.5rem">
        <el-col
          v-for="(o, index) in 12"
          :key="o"
          :span="8"
          style="display: flex"
        >
          <Card />
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<style>
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
