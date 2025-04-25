<script setup>
</script>

<template>
<br>
<div>
    <table cellspacing="0" cellpadding="5">
    <tr v-for="i in 9" :key="i">
        <td v-for="j in 8" :key="j">
        {{ (j + 1) + ' * ' + i + ' = ' + ((j + 1) * i) }}
        </td>
    </tr>
    </table>
</div>
</template>

<style scoped>
table { border-collapse: collapse; margin: auto; }
td { padding: 4px 8px; border: 1px solid black; text-align: center; }
</style>