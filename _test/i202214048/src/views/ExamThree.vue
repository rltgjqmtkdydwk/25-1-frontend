<script setup>
import { ref } from 'vue'

const inputText = ref('')
const items = ref([])
const nextId = ref(1)

function onEnter() {
  const text = inputText.value.trim()
  if (text) {
    items.value.push({ id: nextId.value++, text })
    inputText.value = ''
  }
}

function removeItem(index) {
  items.value.splice(index, 1)
}
</script>

<template>
  <div class="exam">
    <h2>ExamThree</h2>
    <input
      v-model="inputText"
      @keyup.enter="onEnter"
      type="text"
    />

    <div class="list">
      <div class="list-title">자료 목록</div>
      <div v-if="items.length === 0" class="list-item empty">
        <span class="number-column"></span>
        <span class="text-column">자료가 없습니다</span>
      </div>
      <div
        v-else
        v-for="(item, idx) in items"
        :key="item.id"
        class="list-item clickable"
        @click="removeItem(idx)"
      >
        <span class="number-column">{{ item.id }}</span>
        <span class="text-column">{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type="text"] {
  font-size: 15px;
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

.list-title{
  flex: 1;
}

.list-item {
  border-top: 1px solid #ddd;
  padding: 0.5em;
  text-align: center;
  display: flex;
}

.number-column {
  width: 2em;
  border-right: 1px solid
}

.text-column {
  flex: 1;
}

.clickable {
  cursor: pointer;
}

.clickable:hover {
  background-color: #fffae0;
}

</style>