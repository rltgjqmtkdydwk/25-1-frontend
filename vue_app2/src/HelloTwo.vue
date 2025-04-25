<script setup>
import { ref } from 'vue';  // ref함수 : 반응형 객체를 만들어서 리턴
const message = ref("좋은 아침");
console.log(message.value);
</script>

<template>
  <div>
    <p>{{ message }}</p>
    <input type="text" v-model="message" /> <!-- v-model 지시자 -->
  </div>
</template>

<style scoped>
  div { background-color: #f8f8f8; padding: 1em; text-align: center; }
  input { padding: 4px; }
</style>
