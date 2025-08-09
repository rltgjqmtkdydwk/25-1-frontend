<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const router = useRouter();

const id = route.params.id;
const department = ref({
  id: '',
  name: '',
  shortName: '',
  phone: '',
});

async function fetchDepartment() {
  try {
    const response = await axios.get(`http://localhost:3000/departments/${id}`);
    department.value = response.data;
  } catch (error) {
    console.error('학과 정보 조회 실패:', error);
  }
}

async function saveDepartment() {
  try {
    await axios.put(`http://localhost:3000/departments/${id}`, department.value);
    router.push('/departments');
  } catch (error) {
    console.error('저장 실패:', error);
  }
}

onMounted(fetchDepartment);
</script>

<template>
  <div>
    <h1>학과 수정</h1>
    <form @submit.prevent="saveDepartment">
      <div>
        <label>ID:</label>
        <input type="text" v-model="department.id" disabled />
      </div>
      <div>
        <label>학과명:</label>
        <input type="text" v-model="department.name" />
      </div>
      <div>
        <label>단축명:</label>
        <input type="text" v-model="department.shortName" />
      </div>
      <div>
        <label>전화번호:</label>
        <input type="text" v-model="department.phone" />
      </div>
      <div>
        <button type="submit">저장</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
form { font-size: 11pt; display: grid; grid-template-columns: 1fr 1fr; }
h1 { border-bottom: 1px solid gray; }
div { margin-top: 1.5em; }
label:nth-child(1) { display: inline-block; width: 6em; text-align: right;  margin-right: 1em;}
label:nth-child(2) { margin-right: 1em; }
input:not([type=radio]), select { padding: .7em; font-size: 1em; border: none; width: 13em;
  border: 1px solid #aaa; box-shadow: .15em .15em .3em rgba(0,0,0,.1); }
button { padding: .4em 2.5em; margin-left: 1em; border: 1px solid #aaa; border-radius: .3em;
  background-color: #eee; box-shadow: .15em .15em .3em  rgba(0,0,0,.1); font-size: 1em; }
button:active { transform: translateY(.2em); box-shadow: none; background-color: #ddd;}
div:last-child { margin-top: 2.5em; padding-left: 2em; }
</style>
