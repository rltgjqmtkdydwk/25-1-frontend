<script setup>
import { ref } from 'vue';
const message = ref("");

function showMessage() {
  alert(message.value);
}
</script>

<template>
  <div>
    <h1>@keyup.enter</h1>
    <input type="text" v-model="message" v-on:keyup.enter="showMessage" />
  </div>
</template>

<style scoped>
h1 { font-size: 20pt; margin: 4px; }
input { padding: 4px; }
</style>