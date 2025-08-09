<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="wrapper">
      <nav>
        <RouterLink to="/exam1">ExamOne</RouterLink>
        <RouterLink to="/exam2">ExamTwo</RouterLink>
        <RouterLink to="/exam3">ExamThree</RouterLink>
      </nav>
      <RouterView />
    </div>
</template>

<style scoped>
nav a {
  margin-right: 1rem;
}
</style>