import { createApp } from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import roteador from './roteador'

const app = createApp(App)

app.use(roteador)
app.mount('#app')
