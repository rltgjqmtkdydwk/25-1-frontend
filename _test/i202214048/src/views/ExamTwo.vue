<script setup>
import { ref } from 'vue'

const inputText = ref('')
const items = ref([])

function onEnter() {
  const text = inputText.value.trim()
  if (text) {
    items.value.push(text)
    inputText.value = ''
  }
}

function removeItem(index) {
  items.value.splice(index, 1)
}
</script>

<template>
  <div>
    <h1>ExamTwo</h1>
    <input
      v-model="inputText"
      @keyup.enter="onEnter"
      type="text"
    />

    <div class="list">
      <div class="list-title">자료 목록</div>
      <div v-if="items.length === 0" class="list-item empty">자료가 없습니다</div>
      <div
        v-else
        v-for="(item, idx) in items"
        :key="idx"
        class="list-item clickable"
        @click="removeItem(idx)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type="text"] {
  font-size: 15px;
  box-sizing: border-box;
  margin-bottom: 1em;
}

.list {
  border: 1px solid #aaa;
  border-top: none;
  width: 250px;
  box-sizing: border-box;
}

.list-title {
  background-color: #eee;
  padding: 0.5em;
  text-align: center;
  border: 1px solid #aaa;
}

.list-item {
  border-top: 1px solid #ddd;
  padding: 0.5em;
  text-align: center;
}

.clickable {
  cursor: pointer;
}

.clickable:hover {
  background-color: #fffae0;
}
</style>