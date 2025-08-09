<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getStudents } from '@/backendService';
import axios from 'axios';   //department 때문에 필요
axios.defaults.baseURL = "http://localhost:3000/";

const router = useRouter();
const students = ref([]);
const departments = ref([]);

onMounted(() => {
  reloadStudents();
  reloadDepartments();
});

async function reloadStudents() {
  try {
    students.value = await getStudents();
  } catch (error) {
    alert('학생 조회 에러: ' + (error instanceof Error ? error.message : error));
  }
}

async function reloadDepartments() {
  try {
    const response = await axios.get("/departments");
    departments.value = response.data;
  } catch (error) {
    alert('학과 조회 에러: ' + (error instanceof Error ? error.message : error));
  }
}

function getDepartmentName(departmentId) {
  const dept = departments.value.find(d => String(d.id) === String(departmentId));
  return dept ? dept.name : '-';
}

function goEdit(id) {
  router.push("/edit/" + id);
}
</script>

<template>
  <main>
    <h1>학생 목록</h1>
    <table>
      <thead>
        <tr><td>id</td><td>학번</td><td>이름</td><td>전화</td><td>성별</td>
          <td>이메일</td><td>학과</td></tr>
      </thead>
      <tbody>
        <tr v-for="student in students" v-bind:key="student.id" @click="goEdit(student.id)">
          <td>{{ student.id }}</td>
          <td>{{ student.studentNo }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.phone }}</td>
          <td>{{ student.sex }}</td>
          <td>{{ student.email }}</td>
          <td>{{ getDepartmentName(student.departmentId) }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style scoped>
h1 { border-bottom: 1px solid gray; }
table { margin: 3em 0; width: 100%; }
thead { background-color: #eee; text-align: center; }
td { border-bottom: 1px solid gray; padding: .5em; }
td:nth-child(1) { text-align: center; width: 3em; }
tbody tr:hover { background-color: #ffd; cursor: pointer }
</style>