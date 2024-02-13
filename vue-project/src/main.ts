import { createApp } from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import roteador from './roteador'
import { key, store } from './store'

const app = createApp(App)

app.use(roteador)
app.use(store, key)
app.mount('#app')
