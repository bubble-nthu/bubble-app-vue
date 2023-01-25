import { createApp } from 'vue'
// import router functions
import { createRouter, createWebHistory } from 'vue-router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// setup routes
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./components/HomePage/HomePage.vue')
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
    }
  ]
})

app.use(ElementPlus)
// tell Vue to use router
app.use(router)
app.mount('#app')