<script setup>
import { ref } from 'vue'
const enabled = ref(true);
const gender = ref("남");
const color = ref("yellow");
</script>

<template>
  <div class="MyForm">
    <div class="row">
      <label><input type="checkbox" v-model="enabled" /> 활성화</label>
    </div>
    <div class="row">
      <label><input type="radio" v-model="gender" value="남" /> 남자</label>
      <label><input type="radio" v-model="gender" value="여" /> 여자</label>
    </div>
    <div class="row">
      <select v-model="color">
        <option value="yellow">노랑</option>
        <option value="red">빨강</option>
        <option value="blue">파랑</option>
      </select>
    </div>
    <hr />
    <div class="row">활성: {{ enabled }}</div>
    <div class="row">성별: {{ gender }}</div>
    <div class="row">색상: {{ color }}</div>
  </div>
</template>

<style scoped>
div.MyForm { padding: 1em; background-color: #f8f8f8; }
div.row { margin: 0.7em; }
label:has(input[type=radio]) { margin-right: 1em; }
select { padding: 4px; width: 100px; }
</style>