<script setup>
import { ref } from 'vue';
const { message } = defineProps(["message"]);
const visible = ref(false);
let actionCallback = null;

function open(callback) {
  actionCallback = callback;
  visible.value = true;
}

function cancel() {
  visible.value = false;
}

function ok() {
  actionCallback();
  visible.value = false;
}

defineExpose({
  open
})
</script>

<template>
  <div class="backdrop" v-if="visible">
    <div class="modal">
      <div class="message">{{message}}</div>
      <button @click="ok" class="btn">확인</button>
      <button @click="cancel" class="btn">취소</button>
    </div>
  </div>
</template>

<style scoped>
.backdrop { background-color: rgba(0, 0, 0, 0.2);
  position: fixed; left: 0; top: 0; width: 100%; height: 100%; margin: 0; }
.modal { position: relative; width: fit-content;
  left: 50%; top: 30%; transform: translate(-50%, -50%);
  background-color: #fff; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  border-radius: 0.6em; padding: 1em 3em; text-align: center; }
.message { margin: 1em; }
</style>
