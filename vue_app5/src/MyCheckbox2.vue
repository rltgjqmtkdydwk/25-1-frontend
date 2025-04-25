<!-- v-if -->
 <script setup>
import { ref } from 'vue'
const visible = ref(false)
</script>

<template>
  <div>
    <label>
      <input type="checkbox" v-model="visible" />
      보이기
    </label>
    <hr />
    <p>{{ visible }}</p>
    <div id="hello" v-if="visible">안녕하세요 Vue.js</div>
  </div>
</template>

<style scoped>
div { background-color: #f8f8f8; padding: 1em; }
p { font-size: 14pt; color: blue; }
  div#hello { margin-top: 20px; padding: 20px;
    background-color: #dfd; border: 1px solid gray;
    text-align: center; font-size: 14pt; }
</style>