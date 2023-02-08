import { createRouter, createWebHistory } from 'vue-router'

// setup routes
export const route = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/HomePage/HomePage.vue')
    },
    {
      path: '/user',
      name: 'Users',
      component: () => import('./views/UsersView.vue')
    },
    {
      path: '/user/:id',
      name: 'UserSingle',
      props: true,
      component: () => import('./views/UserSingleView.vue')
    },
    /*{
      path: '/search',
      name: 'Search',
      component: () => import('./views/SearchResult/SearchResultView.vue')
    },*/
  ]
})