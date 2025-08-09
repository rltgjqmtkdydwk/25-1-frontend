<script setup>
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
</script>

<template>
  <div>
    <p>count: {{counterStore.count}}</p>
    <p>doubleCount: {{counterStore.doubleCount}}</p>
  </div>
</template>

<style scoped>
p { font-size: 16pt; }
</style>