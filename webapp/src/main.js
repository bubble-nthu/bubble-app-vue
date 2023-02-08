import { createApp } from 'vue'
// import router functions
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import { route } from './route'

const app = createApp(App);

app.use(ElementPlus);
// tell Vue to use router
app.use(route);
app.mount('#app');