<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="App">
    <nav>
      <RouterLink to="/">학생 목록</RouterLink>
      <RouterLink to="/create">학생 등록</RouterLink>
      <RouterLink to="/counter1">카운터1</RouterLink>
      <RouterLink to="/counter2">카운터2</RouterLink>
      <RouterLink to="/counter3">카운터3</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<style scoped>
div#App { padding: 3em; margin: 1em auto; width: 800px;
  border-radius: .5em; box-shadow: .2em .2em .6em rgba(0,0,0,.25); }
nav { margin-bottom: 1.5em; }
a { text-decoration: none; color: #080; padding: .4em 1.5em; margin-right: 2em; }
a.router-link-active { border-bottom: 1px solid #0a0; }
</style>