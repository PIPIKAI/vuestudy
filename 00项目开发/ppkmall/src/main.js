import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuex from './store'

import mitt from "mitt"

const app = createApp(App)

app.config.globalProperties.$bus = new mitt()

app.use(router).use(vuex).mount('#app')
