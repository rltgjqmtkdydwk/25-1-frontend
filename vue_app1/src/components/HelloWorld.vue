<script setup>
defineProps({
  message: String
})
</script>


<template>
  <div>
    <h1>안녕하세요</h1>
    <p>{{ message }}</p>
  </div>
</template>


<style scoped>
  p { color: blue; }
</style>
