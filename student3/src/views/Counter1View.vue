<script setup>
import { ref, computed } from 'vue';

const count = ref(0);
const doubleCount = computed(() => count.value * 2);

function increment() {
  count.value++
}
</script>

<template>
  <div>
    <p>count: {{count}}</p>
    <p>doubleCount: {{doubleCount}}</p>
    <button @click="increment()">increment</button>
  </div>
</template>

<style scoped>
p { font-size: 16pt; }
button { font-size: 14pt; padding: .2em 1em; }
</style>
