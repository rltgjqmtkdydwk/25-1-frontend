<script setup>
import { ref } from 'vue';
const message = ref("");
</script>

<template>
  <div>
    <h1>v-model.trim</h1>
    <input type="text" v-model.trim="message" />
    <pre>[{{ message }}]</pre>
  </div>
</template>

<style scoped>
h1 { font-size: 20pt; margin: 4px; }
input { padding: 4px; }
</style>