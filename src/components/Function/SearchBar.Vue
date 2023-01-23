<script lang="ts" setup>
import { reactive } from 'vue'

const formInline = reactive({
  user: '',
  region: '',
  project: ''
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="">
      <el-input v-model="formInline.user" placeholder="Approved by" />
    </el-form-item>
    <el-form-item label="">
      <el-select v-model="formInline.region" placeholder="Activity zone">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="">
      <el-select v-model="formInline.project" placeholder="Project">
        <el-option label="Project one" value="circular system" />
        <el-option label="Project two" value="renewable energy" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Query</el-button>
    </el-form-item>
  </el-form>
</template>

<style>
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
</style>
