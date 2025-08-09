<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="exam">
    <h1>ExamOne</h1>
    <br/>
    <div class="counter-boxes">
      <p class="counter">{{ count }}</p>
      <div class="boxes">
        <span v-for="n in count" :key="n" class="box">{{ n }}</span>
      </div>
    </div>

    <div class="buttons">
      <button @click="count++">증가</button>
      <button @click="count--">감소</button>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-weight: bold;
}
.counter-boxes {
  display: flex;
  align-items: center;
  gap: 1em;
  margin-bottom: 1em;
}
.counter {
  color: blue;
  font-size: 24px;
}

.boxes {
  display: flex;
  gap: 6px;
  margin-bottom: 1em;
}

.box {
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border: 1px solid #999;
  font-size: 14px;
}

.buttons button {
  margin-right: 10px;
  padding: 0.5em 1.2em;
  font-size: 14px;
}
</style>