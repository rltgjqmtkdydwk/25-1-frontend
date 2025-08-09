<script setup>
import ExamOne from './ExamOne.vue';
import ExamTwo from './ExamTwo.vue';
import ExamThree from './ExamThree.vue';
import ExamThreeChild from './ExamThreeChild.vue';
</script>

<template>
  <div id="app">
    <ExamOne/>
    <ExamTwo/>
    <ExamThree/>
    <ExamThreeChild/>
  </div>
</template>

<style scoped>
div#app { padding: 30px; margin: 30px auto; max-width: 600px; 
  border: 1px solid #ccc; box-shadow: 3px 3px 3px #ddd;  }
</style>