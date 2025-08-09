<script setup>
import { ref } from 'vue'
const name = ref('김은총')
const studentId = ref('202214048')
</script>

<template>
  <div style="background-color: #f7f7f7; padding: 1em">
    <input v-model="name" />
    <br>
    <input v-model="studentId" />
    <p>{{ name }}</p>
    <p>{{ studentId }}</p>
  </div>
</template>
