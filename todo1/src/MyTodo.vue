<script setup>
import { ref, onMounted } from 'vue';

const todos = ref([]);
const title = ref('');
const date = ref('');

const KEY = "todo1.todos";

onMounted(() => {
  const json = localStorage.getItem(KEY);
  if (json) todos.value = JSON.parse(json);
})

function addTodo() {
  const lastId = todos.value.length == 0 ? 0 :
    todos.value[todos.value.length - 1].id;
  todos.value.push({id: lastId + 1, title: title.value, date: date.value, done: false});
  todos.value.sort((a, b) => a.date.localeCompare(b.date))
  localStorage.setItem(KEY, JSON.stringify(todos.value))
  title.value = "";
}

function deleteTodo(index) {
  if (confirm("삭제하시겠습니까?")) {
    todos.value.splice(index, 1);
    localStorage.setItem(KEY, JSON.stringify(todos.value))
  }
}

function save() {
  localStorage.setItem(KEY, JSON.stringify(todos.value))
}
</script>

<template>
  <div>
    <h1>할 일</h1>
    <table>
      <thead>
        <tr><td>ID</td><td>기한</td><td>할일</td></tr>
      </thead>
      <tbody>
        <tr v-for="(todo, index) in todos"
            v-bind:key="todo.id" v-bind:class="{gray: todo.done}">
          <td>{{ todo.id }}</td>
          <td>{{ todo.date }}</td>
          <td>
            <input type="checkbox" v-model="todo.done" v-on:change="save"/>
            {{ todo.title }}
            <span v-on:click="deleteTodo(index)">x</span>
          </td>
        </tr>
        <tr v-if="todos.length == 0">
          <td></td><td></td><td id="noTodo">할 일이 없습니다</td>
        </tr>
      </tbody>
    </table>
    <inline-block>
    <input type="text" v-model.trim="title" />
    <input type="date" v-model="date" />
    <button type="button" v-on:click="addTodo">추가</button>
    </inline-block>
  </div>
</template>

<style scoped>
h1 { border-bottom: 1px solid gray; }
table { border-collapse: collapse; margin: 20px 0; width: 100%; }
thead { background-color: #eee; text-align: center; }
td { border: 1px solid gray; padding: 6px; }
td:nth-child(1) { text-align: center; width: 30px; }
input[type=text] { padding: 5px; margin-right: 2px; width: 195px; }
button { padding: 0.3em 1.5em; margin-right: 2px; margin-left: 2px;}
span { font-weight: bold; cursor: pointer; float: right; }
span:hover { color: red; }
tr:has(span:hover) { background-color: #ffd; }
tr.gray { background-color: #f8f8f8; color: #bbb; text-decoration: line-through; }
input[type=checkbox] { accent-color: #bbb; }
#noTodo { text-align: center; }
</style>