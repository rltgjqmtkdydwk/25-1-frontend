<script setup>
import { ref } from 'vue';
const message = ref("");
</script>

<template>
  <div>
    <h1>v-model.lazy</h1>
    <input type="text" v-model.lazy="message" />   <!--실시간으로 대입되지 않음. 나중에 대입됨-->
    <pre>[{{ message }}]</pre>
  </div>
</template>

<style scoped>
h1 { font-size: 20pt; margin: 4px; }
input { padding: 4px; }
</style>