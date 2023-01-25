<template>
  <h2>Single User page</h2>
  <p>The user id is: {{ id }}</p>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  // replace the
  // props: ['id'],
  setup() {
    const route = useRoute()

    return {
      // with params.id
      id: route.params.id
    }
  }
}
</script>