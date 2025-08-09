import { createRouter, createWebHistory } from 'vue-router'
import StudentListView from '../views/StudentListView.vue'
import StudentEditView from '../views/StudentEditView.vue'
import StudentCreateView from '../views/StudentCreateView.vue'
import Counter1View from '../views/Counter1View.vue'
import Counter2View from '../views/Counter2View.vue'
import Counter3View from '../views/Counter3View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'StudentListView',
      component: StudentListView
    },
    {
      path: '/edit/:id',
      name: 'StudentEditView',
      component: StudentEditView
    },
    {
      path: '/create',
      name: 'StudentCreateView',
      component: StudentCreateView
    },
    {
      path: '/counter1',
      name: 'Counter1View',
      component: Counter1View
    },
    { path: '/counter2',
      name: 'Counter2View',
      component: Counter2View
    },
    { path: '/counter3',
      name: 'Counter3View',
      component: Counter3View
    },
  ],
})

export default router