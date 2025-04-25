<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import MyAccoount from './MyAccoount.vue';
import MyForm from './MyForm.vue'
</script>

<template>
  <main class="app">
    <MyAccoount />
    <!-- <MyForm /> -->
  </main>
</template>

<style scoped>
main.app { 
  width: 500px; min-height: 300px;
  margin: 1em auto; padding: 1em;
  border: 1px solid gray;
  box-shadow: 3px 3px 3px #ddd;
}
</style>
