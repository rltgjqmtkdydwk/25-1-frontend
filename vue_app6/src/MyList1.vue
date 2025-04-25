<script setup>
import { ref } from 'vue';
const list = ref(["zero", "one", "two", "three", "four", "five"]);
const word = ref("")

function remove(index) {
  if (confirm("삭제하시겠습니까?"))
    list.value.splice(index, 1);
}

function addWord() {
  list.value.push(word.value);
}
</script>

<template>
  <div>
    <span v-for="(s, index) in list" v-bind:key="s" v-on:click="remove(index)">
      {{ s }}
    </span>
  </div>
  <input type="text" v-model="word" />
  <button type="button" @click="addWord">추가</button>
</template>

<style scoped>
span { display: inline-block; margin: 5px; padding: 8px 15px; 
  border: 1px solid black; cursor: pointer; }
input { padding: 4px; margin: 5px; }
button { padding: 4px 10px; margin: 5px; }
</style>