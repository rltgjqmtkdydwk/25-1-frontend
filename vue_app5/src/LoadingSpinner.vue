<template>
  <div class="spinner" />
</template>

<style scoped>
div.spinner {
  display: inline-block;
  padding: 0; margin: 0 0.4em;
  width: 1.5em; height: 1.5em;
  border: 0.2em solid #ddd;
  border-top: 0.2em solid #88f;
  border-radius: 50%;
  transform: rotate(45deg);
  animation: spin-animation 1s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
  /* animation: spin-animation 1s cubic-bezier(0.42, 0, 0.58, 1) infinite; */
  /* animation: spin-animation 1s cubic-bezier(0.42, 0, 1, 1) infinite; */
  /* animation: spin-animation 1s cubic-bezier(0, 0, 0.58, 1) infinite; */
}
@keyframes spin-animation {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>