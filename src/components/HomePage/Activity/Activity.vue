<script lang="ts" setup>
import { ref } from 'vue'
import Card from '../../Function/Card.vue'

</script>

<template>
  <el-row style="padding: 20px">
    <el-col
      v-for="(o, index) in 6"
      :key="o"
      :span="6"
      :xs="12" :sm="8"
      style="display: flex"
    >
      <Card />
    </el-col>
  </el-row>
</template>

<style>
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
