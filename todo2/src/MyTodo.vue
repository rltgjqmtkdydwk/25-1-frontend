<script setup>
import { ref, onMounted } from 'vue';

const todos = ref([]);   // 할일 목록
const title = ref('');   // 제목 입력
const due = ref('');     // 기한 입력
const progress = ref(0); // 진척도 입력
const editId = ref(0);   // 수정할 항목의 id

const KEY = "todo2.todos"; // localStorage 저장 키

onMounted(() => load());

function addTodo() {
  const lastId = todos.value.length == 0 ? 0 :
    todos.value[todos.value.length - 1].id;

  todos.value.push({id: lastId + 1, title: title.value, // 입력된 내용으로 새 할일 등록
    due: due.value, progress: progress.value});

  title.value = "";
  progress.value = 0;
  save();
}

function load() {
  const json = localStorage.getItem(KEY);
  if (json) todos.value = JSON.parse(json);  
}

function save() {
  localStorage.setItem(KEY, JSON.stringify(todos.value));
}

function deleteTodo(index) {
  if (confirm("삭제하시겠습니까?")) {
    todos.value.splice(index, 1);
    save();
  }
}

function updateTodo() {
  save();
  editId.value = 0;
}

function cancel() { // 수정 취소 함수
  load();           // 로컬에 저장된 내용 불러오기
  editId.value = 0;
}
</script>

<template>
  <div>
    <h1>할 일</h1>
    <table>
      <thead>
        <tr><td>ID</td><td>기한</td><td>진척도</td><td>할일</td></tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" v-bind:key="todo.id">
        <template v-if="editId != todo.id">
          <td>{{ todo.id }}</td>
          <td>{{ todo.due }}</td>
          <td>{{ todo.progress }}</td>
          <td>{{ todo.title }}</td>
          <td>
            <button @click="editId = todo.id" :disabled="editId > 0" title="수정">e</button>
            <button @click="deleteTodo(index)" :disabled="editId > 0" title="삭제">-</button>
          </td>
        </template>
        <template v-else>
            <td>{{ todo.id }}</td>
            <td><input type="date" v-model="todo.due" /></td>
            <td><input type="number" v-model="todo.progress" step="10" /></td>
            <td><input type="text" v-model.trim="todo.title" /></td>
            <td>
                <button @click="updateTodo()" class="sm">저장</button>
                <button @click="cancel()" class="sm">취소</button>
            </td>
        </template>
        </tr>
        <tr v-if="todos.length == 0">
          <td></td><td>할 일이 없습니다</td>
        </tr>
        <tr>
          <td></td>
          <td><input type="date" v-model="due" :disabled="editId > 0" /></td>
          <td><input type="number" v-model="progress" step="10" :disabled="editId > 0" /></td>
          <td><input type="text" v-model.trim="title" :disabled="editId > 0" /></td>
          <td><button @click="addTodo()" title="저장" :disabled="editId > 0" >+</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
h1 { border-bottom: 1px solid gray; }
table { margin: 1em 0; }
thead { background-color: #eee; text-align: center; }
td { border-bottom: 1px solid #ccc; padding: 0.4em; font-size: 11pt; }
td:nth-child(1) { text-align: center; width: 2em; }
td:has(input) { padding: 0; }
input[type=date], input[type=number], input[type=text] {
  padding: 0.4em; height: 1.2em; font-size: 11pt; }
input[type=number] { width: 4em; }
input[type=text] { width: 17em; }
button { font-family: Courier; margin-right: 2px; font-size: 11pt; }
</style>