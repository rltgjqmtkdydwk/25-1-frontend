import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const usePaginationStore = defineStore('pagination', () => {
  const page = ref(1);
  const pageSize = ref(10);
  const totalCount = ref(0);
  const lastPage = computed(() => Math.ceil(totalCount.value / pageSize.value));
  let reload = () => {};

  function init(reloadFn) { 
    reload = reloadFn;
  } 
  function gotoPage(val) {
    console.log("gotoPage", val);
    page.value = val;
    reload();
  }

  return { page, pageSize, totalCount, lastPage, gotoPage, init }; 
})