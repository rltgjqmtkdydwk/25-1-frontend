<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { postStudent, getDepartments } from '@/backendService';

const router = useRouter();
const student = ref({});
const departments = ref([]);

onMounted(loadData);

async function loadData() {
  try {
    departments.value = await getDepartments();
  } catch (error) {
    alert('조회 에러: ' + (error instanceof Error ? error.message : error));
  }
}

async function insertStudent() {
  try {
    await postStudent(student.value);
    goList();
  } catch (error) {
    alert('저장 에러: ' + (error instanceof Error ? error.message : error));
  }
}

function goList() {
  router.push("/");
}
</script>

<template>
  <h1>학생 등록</h1>
  <form>
    <div>
      <label>학번</label>
      <input type="text" v-model="student.studentNo" />
    </div>
    <div>
      <label>이름</label>
      <input type="text" v-model="student.name" />
    </div>
    <div>
      <label>전화</label>
      <input type="phone" v-model="student.phone" />
    </div>
    <div>
      <label>이메일</label>
      <input type="email" v-model="student.email" />
    </div>
    <div>
      <label>학과</label>
      <select v-model="student.departmentId">
        <option v-for="d of departments" :key="d.id" :value="d.id">
          {{ d.name }}
        </option>
      </select>
    </div>
    <div>
      <label>성별</label>
      <label><input type="radio" value="남" v-model="student.sex" /> 남자</label>
      <label><input type="radio" value="여" v-model="student.sex" /> 여자</label>
    </div>
    <div>
      <button type="button" class="btn lg" @click="insertStudent">저장</button>
      <button type="button" class="btn lg" @click="goList">취소</button>
    </div>
  </form>
</template>

<style scoped>
form { font-size: 11pt; display: grid; grid-template-columns: 1fr 1fr; }
h1 { border-bottom: 1px solid gray; }
div { margin-top: 1.5em; }
label:nth-child(1) { display: inline-block; width: 3em; text-align: right; margin-right: 1em; }
input:not([type=radio]), select { padding: .7em; font-size: 1em; border: none; width: 13em;
  border: 1px solid #aaa; box-shadow: .15em .15em .3em rgba(0,0,0,.1); }
button { padding: .4em 2.5em; margin-left: 1em; border: 1px solid #aaa; border-radius: .3em;
  background-color: #eee; box-shadow: .15em .15em .3em  rgba(0,0,0,.1); font-size: 1em; }
button:active { transform: translateY(.2em); box-shadow: none; background-color: #ddd;}
div:last-child { margin-top: 2.5em; padding-left: 2em; }
</style>