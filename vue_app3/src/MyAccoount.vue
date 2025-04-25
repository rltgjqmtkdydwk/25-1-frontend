<script setup>
import { ref } from 'vue'
const student_num = ref("SSSSAAIII");
const name = ref("홍길동");
const affiliation = ref("소속"); //undefined -> 안뜸
const academic_status = ref("학적상태")
</script>

<template>
  <div class="MyAccount">
    <div class="row">
      <label> 학번 <input type="text" v-model="student_num" /> </label> 
      <br>
      <label> 이름 <input type="text" v-model="name" /> </label>
    </div>
    <div class="row">
      <select v-model="affiliation"> 
        <option value="소프"> 소프 </option>
        <option value="컴공"> 컴공 </option>
        <option value="정통"> 정통 </option>
        <option value="인지"> 인지 </option>
      </select>
    </div>
      <div class="row">
      <label><input type="radio" value="재학" v-model="academic_status"> 재학 </label>
      <label><input type="radio" value="휴학" v-model="academic_status"> 휴학 </label>
      <label><input type="radio" value="졸업" v-model="academic_status"> 졸업 </label>
    </div>
    <hr />
    <div class="row">학번: {{ student_num }}</div>
    <div class="row">이름: {{ name }}</div>
    <div class="row">소속: {{ affiliation }}</div>
    <div class="row">학적상태: {{ academic_status }}</div>
  </div>
</template>

<style scoped>
div.MyForm { padding: 1em; background-color: #f8f8f8; }
div.row { margin: 0.7em; }
label:has(input[type=radio]) { margin-right: 1em; }
select { padding: 4px; width: 100px; }
</style>
