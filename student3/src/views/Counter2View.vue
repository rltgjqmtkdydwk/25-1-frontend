<script setup>
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
</script>

<template>
  <div>
    <p>count: {{counterStore.count}}</p>
    <p>doubleCount: {{counterStore.doubleCount}}</p>
    <button @click="counterStore.increment()">increment</button>
  </div>
</template>

<style scoped>
p { font-size: 16pt; }
button { font-size: 14pt; padding: .2em 1em; }
</style>
