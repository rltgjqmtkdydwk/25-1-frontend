<script setup>
const todos = [
  { id: 1, title: "과제" },
  { id: 2, title: "시험공부" },
  { id: 3, title:"코딩훈련" }
]
</script>

<template>
  <div>
    <h1>할 일</h1>
    <table>
      <thead>
        <tr><td>ID</td><td>할일</td></tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" v-bind:key="todo.id">
          <td>{{ todo.id }}</td>
          <td>{{ todo.title }}</td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<style scoped>
h1 { border-bottom: 1px solid gray; }
table { border-collapse: collapse; margin: 20px 0; width: 100%; }
thead { background-color: #eee; text-align: center; }
td { border: 1px solid gray; padding: 6px; }
td:nth-child(1) { text-align: center; width: 30px; }
</style>