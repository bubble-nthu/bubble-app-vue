<script lang="ts" setup>
import { reactive } from 'vue'
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const query = ref('')
const select = ref('')

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
  <section class="searchbar-flex-container">
    <div class="searchbar-statement">
      探索校園行動，找到你的永續主場
    </div>
      <el-input
        v-model="query"
        value="清華校園永續生活創新實驗室"
        class="input-with-select"
      >
        <template #append>
          <el-button :icon="Search" />
        </template>
      </el-input>
  </section>
</template>

<style>
.el-input-group {
  width: 75%;
  height: 7.5vh;
}
.el-input__inner {
  font-size: 1.25rem;
  font-weight: Medium;
}
.searchbar-statement {
  font-size: 2rem;
  font-weight: Bold;
}
.searchbar-flex-container {
  display: flex;
  flex-direction: column;
  height: 20vw;
  justify-content: space-evenly;
  align-items: center;
}
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
</style>
