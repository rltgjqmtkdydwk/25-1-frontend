<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getBooks } from '@/backendService';

import axios from 'axios';   //category 때문에 필요
axios.defaults.baseURL = "http://localhost:3000/";

const router = useRouter();
const books = ref([]);
const categories = ref([]);

onMounted(() => {
  reloadBooks();
  reloadCategories()
});

async function reloadBooks() {
  try {
    books.value = await getBooks();
  } catch (error) {
    alert('도서 조회 에러: ' + (error instanceof Error ? error.message : error));
  }
}

async function reloadCategories() {
  try {
    const response = await axios.get("/categories");
    categories.value = response.data;
  } catch (error) {
    alert('카테고리 조회 에러: ' + (error instanceof Error ? error.message : error));
  }
}

function getCategoryName(categoryId) {
  const cate = categories.value.find(c => String(c.id) === String(categoryId));
  return cate ? cate.title : '-';
}

function goEdit(id) {
  router.push("/edit/" + id);
}
</script>

<template>
  <main>
    <h1>도서 목록</h1>
    <table>
      <thead>
        <tr><td>id</td><td>제목</td><td>작가</td><td>카테고리</td><td>가격</td>
          <td>출판사</td></tr>
      </thead>
      <tbody>
        <tr v-for="book in books" v-bind:key="book.id" @click="goEdit(book.id)">
          <td>{{ book.id }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ getCategoryName(book.categoryId) }}</td>
          <td>{{ book.price }}</td>
          <td>{{ book.publisher }}</td>
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