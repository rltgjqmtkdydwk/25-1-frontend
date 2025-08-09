<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="App">
    <nav>
      <RouterLink to="/">영화 목록</RouterLink>
      <RouterLink to="/create">영화 등록</RouterLink>
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