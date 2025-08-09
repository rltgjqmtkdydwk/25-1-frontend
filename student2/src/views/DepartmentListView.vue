<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const departments = ref([]);

async function fetchDepartments() {
  try {
    const response = await axios.get('http://localhost:3000/departments');
    departments.value = response.data;
  } catch (error) {
    console.error('학과 목록 조회 실패:', error);
  }
}

function goEdit(id) {
  router.push(`/departments/edit/${id}`);
}

onMounted(fetchDepartments);
</script>

<template>
  <div>
    <h1>학과 목록</h1>
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>학과명</td>
          <td>단축명</td>
          <td>전화번호</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dept in departments" :key="dept.id" @click="goEdit(dept.id)">
          <td>{{ dept.id }}</td>
          <td>{{ dept.name }}</td>
          <td>{{ dept.shortName }}</td>
          <td>{{ dept.phone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
h1 { border-bottom: 1px solid gray; }
table { margin: 3em 0; width: 100%; }
thead { background-color: #eee; text-align: center; }
td { border-bottom: 1px solid gray; padding: .5em; }
td:nth-child(1) { text-align: center; width: 3em; }
tbody tr:hover { background-color: #ffd; cursor: pointer }
</style>
