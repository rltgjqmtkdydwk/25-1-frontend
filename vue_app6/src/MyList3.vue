<script setup>
const row_size = 8;
const col_size = 12;
</script>

<template>
  <table>
    <tr v-for="r in row_size" :key="r">
      <td v-for="c in col_size" :key="c">
        {{ (r - 1) * col_size + c }}
      </td>
    </tr>
  </table>
</template>

<style scoped>
table { border-collapse: collapse; margin: auto; }
td { padding: 15px; border: 1px solid black;  text-align: center; }
</style>