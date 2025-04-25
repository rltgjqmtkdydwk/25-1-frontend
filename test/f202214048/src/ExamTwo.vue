<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
    <div style="background-color: #ffffdd; padding: 1em">
      <button @click="count++">{{ count }}</button>
      &nbsp;
      <span>{{ count % 2 === 0 ? '짝수' : '홀수' }}</span>
    </div>
  </template>

<style scoped>
</style>
