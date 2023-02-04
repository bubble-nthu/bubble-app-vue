import { createApp } from 'vue'
// import router functions
import { createRouter, createWebHistory } from 'vue-router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// setup routes

app.use(ElementPlus)
// tell Vue to use router
app.use(router)
app.mount('#app')