<script setup>
defineProps({
    message: String
})
</script>

<template>
  <span>{{ message }}</span>
</template>

<style scoped>
    span {
    background-color: #aaffaa; padding: 0.4em 4em;;
    }
</style>