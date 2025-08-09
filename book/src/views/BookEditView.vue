<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getBook, putBook, deleteBook } from '@/backendService';

const router = useRouter();
const route = useRoute();
const id = route.params.id;
const book = ref({});

onMounted(loadBook);

async function loadBook() {
  try {
    book.value = await getBook(id);
  } catch (error) {
    alert('조회 에러: ' + (error instanceof Error ? error.message : error));
  }
}

async function updateBook() {
  try {
    await putBook(book.value);
    alert("도서 정보가 수정되었습니다!");
    goList();
  } catch (error) {
    alert('저장 에러: ' + (error instanceof Error ? error.message : error));
  }
}

async function removeBook() {
  try {
    if (confirm("삭제하시겠습니까?")) {
      await deleteBook(id);
      goList();
    }
  } catch (error) {
    alert('저장 에러: ' + (error instanceof Error ? error.message : error));
  }
}

function goList() {
  router.push("/");
}
</script>

<template>
  <div>
    <h1>도서 수정</h1>
    <form>
      <div>
        <label>id</label>
        <input type="text" v-model="book.id" />
      </div>
      <div>
        <label>제목</label>
        <input type="text" v-model="book.title" />
      </div>
      <div>
        <label>작가</label>
        <input type="text" v-model="book.author" />
      </div>
      <div>
        <label>카테고리</label>
        <select v-model="book.categoryId">
          <option value=1>소설</option>
          <option value=2>수필</option>
          <option value=3>경제</option>
          <option value=4>과학</option>
          <option value=5>역사</option>
        </select>
      </div>
      <div>
        <label>가격</label>
        <input type="number" v-model="book.price" />
      </div>
      <div>
        <label>출판사</label>
        <input type="text" v-model="book.publisher" />
      </div>
      <div>
        <button type="button" @click="updateBook">저장</button>
        <button type="button" @click="removeBook">삭제</button>
        <button type="button" @click="goList">취소</button>
      </div>
    </form>
    </div>
  </template>  

<style scoped>
form { font-size: 11pt; display: grid; grid-template-columns: 1fr 1fr; }
h1 { border-bottom: 1px solid gray; }
div { margin-top: 1.5em; }
label:nth-child(1) { display: inline-block; width: 5em; text-align: right;  margin-right: 1em;}
label:nth-child(2) { margin-right: 1em; }
input:not([type=radio]), select { padding: .7em; font-size: 1em; border: none; width: 13em;
  border: 1px solid #aaa; box-shadow: .15em .15em .3em rgba(0,0,0,.1); }
button { padding: .4em 2.5em; margin-left: 1em; border: 1px solid #aaa; border-radius: .3em;
  background-color: #eee; box-shadow: .15em .15em .3em  rgba(0,0,0,.1); font-size: 1em; }
button:active { transform: translateY(.2em); box-shadow: none; background-color: #ddd;}
div:last-child { margin-top: 2.5em; padding-left: 2em; }
</style>
