<script setup>
import { ref } from 'vue'
import ExamThreeChild from './ExamThreeChild.vue'
const message = ref('안녕하세요')
</script>

<template>
  <div style="background-color: #e6ffe6; padding: 1em">
    <div style="display: flex; align-items: start; gap: 2em">
      <div><input v-model="message" /></div>
      <div><ExamThreeChild :message="message" /></div>
    </div>
  </div>
</template>