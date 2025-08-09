import { createRouter, createWebHistory } from 'vue-router'
import MovieListView from '../views/MovieListView.vue'
import MovieCreateView from '../views/MovieCreateView.vue'
import MovieEditView from '../views/MovieEditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MovieListView',
      component: MovieListView
    },
    {
      path: '/create',
      name:  'MovieCreateView',
      component: MovieCreateView
    },
    {
      path: '/edit/:id',
      name:  'MovieEditView',
      component: MovieEditView
    },
  ],
})

export default router