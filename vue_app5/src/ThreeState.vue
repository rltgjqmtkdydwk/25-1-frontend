<script setup>
import { ref } from 'vue'
import LoadingSpinner from './LoadingSpinner.vue';
const state = ref(0);
const changeState = () => state.value = (state.value + 1) % 3;
</script>

<template>
  <div>
    <button type="button" @click="changeState">상태 변경</button>
    <br />
    <div v-if="state == 0">
      <span>Loading...</span>
      <LoadingSpinner />
    </div>
    <div v-else-if="state == 1">
      <span>Error!</span>
    </div>
    <div v-else>
      <span>안녕하세요 Vue.js</span>
    </div>
  </div>
</template>

<style scoped>
  div { padding: 1em; }
  span { font-size: 14pt; }
  button { padding: 0.5em 1.5em; }
</style>