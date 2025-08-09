<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getMovie, putMovie, deleteMovie } from '@/backendService';
import ConfirmModal from '@/components/ConfirmModal.vue';

const router = useRouter();
const route = useRoute();
const id = route.params.id;
const movie = ref({});
const modal = ref(null);

onMounted(loadMovie);

async function loadMovie() {
  try {
    movie.value = await getMovie(id);
  } catch (error) {
    alert('조회 에러: ' + (error instanceof Error ? error.message : error));
  }
}

async function updateMovie() {
  try {
    await putMovie(movie.value);
    goList();
  } catch (error) {
    alert('저장 에러: ' + (error instanceof Error ? error.message : error));
  }
}

async function removeMovie() {
  try {
    modal.value.open(async () => {
      await deleteMovie(id);
      goList();
    });
  } catch (error) {
    alert('저장 에러: ' + (error instanceof Error ? error.message : error));
  }
}

function goList() {
  router.push("/");
}
</script>

<template>
  <div>
    <h1>영화 수정</h1>
    <ConfirmModal ref="modal" message="삭제 하시겠습니까?" />
    <form>
    <div>
      <label>제목</label>
      <input type="text" v-model="movie.title" />
    </div>
    <div>
      <label>감독</label>
      <input type="text" v-model="movie.director" />
    </div>
    <div>
      <label>장르</label>
      <select v-model="movie.genreId">
      <option value=1>SF</option>
      <option value=2>액션</option>
      <option value=3>드라마</option>
      <option value=4>뮤지컬</option>
      <option value=5>애니메이션</option>
      <option value=6>전쟁</option>
      <option value=7>미스터리</option>
      <option value=8>코미디</option>
      <option value=9>다큐멘터리</option>
      <option value=10>로멘스</option>
      </select>
    </div>
    <div>
      <label>연도</label>
      <input type="text" v-model="movie.year" />
    </div>
    <div>
      <label>국가</label>
      <input type="text" v-model="movie.country" />
    </div>
    <div>
      <button type="button" @click="updateMovie">저장</button>
      <button type="button" @click="removeMovie">삭제</button>
      <button type="button" @click="goList">취소</button>
    </div>
    </form>
  </div>
</template>


<style scoped>
form { font-size: 11pt; display: grid; grid-template-columns: 1fr 1fr; }
h1 { border-bottom: 1px solid gray; }
div { margin-top: 1.5em; }
label:nth-child(1) { display: inline-block; width: 3em; text-align: right; margin-right: 1em; }
input:not([type=radio]), select { padding: .7em; font-size: 1em; border: none; width: 13em;
    border: 1px solid #aaa; box-shadow: .15em .15em .3em rgba(0,0,0,.1); }
button { padding: .4em 2.5em; margin-left: 1em; border: 1px solid #aaa; border-radius: .3em;
  background-color: #eee; box-shadow: .15em .15em .3em  rgba(0,0,0,.1); font-size: 1em; }
button:active { transform: translateY(.2em); box-shadow: none; background-color: #ddd;}
div:last-child { margin-top: 2.5em; padding-left: 2em; }
</style>