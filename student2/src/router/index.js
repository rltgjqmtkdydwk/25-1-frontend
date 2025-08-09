import { createRouter, createWebHistory } from 'vue-router'
import StudentListView from '../views/StudentListView.vue'
import StudentEditView from '../views/StudentEditView.vue'
import StudentCreateView from '../views/StudentCreateView.vue'
import DepartmentListView from '@/views/DepartmentListView.vue';
import DepartmentEditView from '@/views/DepartmentEditView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'studentListView',
      component: StudentListView,
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
      path: '/departments',
      name : 'DepartmentListView',
      component: DepartmentListView },
    {
      path: '/departments/edit/:id',
      name : 'DepartmentEditView',
      component: DepartmentEditView },
  ],
})

export default router