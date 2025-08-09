import { createRouter, createWebHistory } from 'vue-router'
import ExamOne from '../views/ExamOne.vue'
import ExamTwo from '../views/ExamTwo.vue'
import ExamThree from '../views/ExamThree.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',
      redirect: '/exam1' 
    },
    {
      path: '/exam1',
      name: 'ExamOne',
      component: ExamOne,
    },
    {
      path: '/exam2',
      name: 'ExamTwo',
      component: ExamTwo,
    },
    {
      path: '/exam3',
      name: 'ExamThree',
      component: ExamThree,
    },
  ],
})

export default router