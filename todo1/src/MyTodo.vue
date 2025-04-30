<script setup>
import { ref } from 'vue';

const todos = ref([
  { id: 1, title: "과제" },
  { id: 2, title: "시험공부" },
  { id: 3, title:"코딩훈련" }
]);
const title = ref('');

function addTodo() {
  const lastId = todos.value.length == 0 ? 0 :
    todos.value[todos.value.length - 1].id;
  todos.value.push({id: lastId + 1, title: title.value});
  title.value = "";
}

function deleteTodo(index) {
  if (confirm("삭제하시겠습니까?"))
    todos.value.splice(index, 1);
}
</script>

<template>
  <div>
    <h1>할 일</h1>
    <table>
      <thead>
        <tr><td>ID</td><td>할일</td></tr>
      </thead>
      <tbody>
        <tr v-for="(todo, index) in todos" v-bind:key="todo.id">
          <td>{{ todo.id }}</td>
          <td>{{ todo.title }}
            <span v-on:click="deleteTodo(index)">x</span>
          </td>
        </tr>
      </tbody>
    </table>
    <input type="text" v-model.trim="title" />
    <button type="button" v-on:click="addTodo">추가</button>
  </div>
</template>

<style scoped>
h1 { border-bottom: 1px solid gray; }
table { border-collapse: collapse; margin: 20px 0; width: 100%; }
thead { background-color: #eee; text-align: center; }
td { border: 1px solid gray; padding: 6px; }
td:nth-child(1) { text-align: center; width: 30px; }
input[type=text] { padding: 5px; margin-right: 5px; width: 300px; }
button { padding: 0.3em 1.5em; }
span { font-weight: bold; float: right; }
span:hover { color: red; cursor: pointer; }
tr:has(span:hover) { background-color: #ffd; }
</style>