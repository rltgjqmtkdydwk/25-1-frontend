<script setup>
import { ref } from 'vue';
const {title="카운터", step=1} = defineProps(['title', 'step'])
const count = ref(0);
</script>

<template>
  <div>
    <p>{{ title }}</p>
    <p>{{ count }}</p>
    <button type="button" @click="count += step">Increase</button>
    <button type="button" @click="count -= step">Decrease</button>
  </div>
</template>

<style scoped>
  div { padding: 1em; text-align: center; 
    background-color: #e8ffe8; border: 1px solid #aca; }
  p { font-size: 20pt; text-align: center; margin: 0; }
  button { padding: 0.7em 1.5em; margin: 5px; }
</style>