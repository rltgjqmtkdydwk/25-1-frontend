<script setup>
import { ref } from 'vue';
const studentNo = ref("202214048");
const name = ref("김은총");
console.log(studentNo.value);
console.log(name.value);
</script>

<template>
  <div>
    <p>{{ studentNo + name }}</p>
    <input type="text" v-model="studentNo" />
    <input type="text" v-model="name" />
  </div>
</template>

<style scoped>
  div { background-color: #00715A; padding: 1em; text-align: center; }
  p { color: aliceblue; }
  input { padding: 4px; }
</style>
