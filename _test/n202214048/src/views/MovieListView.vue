<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getMovies } from '@/backendService';

const router = useRouter();
const movies = ref([]);
onMounted(reloadMovies);

async function reloadMovies() {
  try {
    movies.value = await getMovies();
  } catch (error) {
    alert('조회 에러: ' + (error instanceof Error ? error.message : error));
  }
}

function goEdit(id) {
  router.push("/edit/" + id);
}
</script>

<template>
  <div>
    <main>
      <h1>영화 목록</h1>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>제목</td>
            <td>감독</td>
            <td>장르</td>
            <td>년도</td>
            <td>국가</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="movie in movies" v-bind:key="movie.id" @click="goEdit(movie.id)">
            <td>{{ movie.id }}</td>
            <td>{{ movie.title }}</td>
            <td>{{ movie.director }}</td>
            <td>{{ movie.genre?.title }}</td>
            <td>{{ movie.year }}</td>
            <td>{{ movie.country }}</td>
          </tr>
        </tbody>
      </table>
    </main>
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