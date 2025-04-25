<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import HelloOne from './HelloOne.vue'
import HelloTwo from './HelloTwo.vue'
import HelloThree from './HelloThree.vue';

</script>

<template>
  <main class="app">
    <HelloOne />
    <hr />
    <HelloTwo />
    <hr />
    <HelloThree />
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