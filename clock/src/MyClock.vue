<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import moment from "moment";

const { format = "HH:mm:ss", interval = 1000 } = defineProps(["format", "interval"])  // props 전달
const time = ref(null);
const timerId = ref(0);  //반응형 변수이기 때문에 값을 가져오기 위해 value

function start() {
    const callback = () => {
        time.value = moment().format(format);
        console.log(time.value);
    };
    callback();
    timerId.value = setInterval(callback, interval);
}

function stop() {
    clearInterval(timerId.value);
    timerId.value = 0;
}

onMounted(() => start());
onBeforeUnmount(() => stop());

// onMounted(() => {
//     const callback = () => {
//         time.value = moment().format(format);
//         console.log(time.value);
//     };
//     callback();
//     const timerId = setInterval(callback, interval);
//     onBeforeUnmount(() => clearInterval(timerId));   // 메모리 누출 방지 : 컴포넌트 파괴 시 콜백 등록 취소
// })
</script>

<template>
    <div>
        <span>{{ time }}</span>
        <button type="button" @click="start" v-show="timerId == 0">start</button>
        <button type="button" @click="stop" v-show="timerId != 0">stop</button>
    </div>
</template>

<style scoped>
div {
    display: inline-block;
    font-size: 20pt;
    padding: 3px 12px;
    border: 1px solid gray;
}
</style>