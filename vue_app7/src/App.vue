<script setup>
import MyTrim from './MyTrim.vue';
import MyLazy from './MyLazy.vue';
import MyEnter from './MyEnter.vue';
</script>

<template>
  <div id="app">
    <MyTrim />
    <hr />
    <MyLazy />
    <hr />
    <MyEnter />
  </div>
</template>

<style scoped>
div#app { padding: 30px; margin: 30px auto; max-width: 600px;
  border: 1px solid #ccc; box-shadow: 3px 3px 3px #ddd;  }
hr { margin: 20px 0; }
</style>