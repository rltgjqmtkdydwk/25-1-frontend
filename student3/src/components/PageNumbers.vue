<script setup>
import { computed } from "vue";
const {page, lastPage, gotoPage} = defineProps(["page", "lastPage", "gotoPage"])

const pageList = computed(() => {
  console.log("pageList computed", page);
  const baseNo = Math.floor((page - 1) / 10) * 10;
  const list = [];
  if (baseNo > 0) list.push({label: "<", page: baseNo});
  for (let i = 1; i <= 10; ++i) {
    const pg = baseNo + i;
    if (pg > lastPage) break;
    list.push({label: pg.toString(), page: pg});
  }
  if (baseNo + 11 <= lastPage)
    list.push({label: ">", page: baseNo + 11});
  return list;
});
</script>

<template>
  <ul>
    <li v-for="el in pageList" :key="el.page"
          @click="gotoPage(el.page)"
          :class="{active: el.page == page}">
      {{ el.label }}
    </li>
  </ul>
</template>

<style scoped>
li { display: inline-block; width: 2em; text-align: center;
  padding: .25em 0; margin: 0 .3em; }
li:hover { cursor: pointer; background-color: #ddd; }
li.active { background-color: #08f; color: white; }
</style>