import { createApp } from 'vue'
import router from '@/router/index.js'
import App from './App.vue'
import directives from './directives'


const app = createApp(App)
directives.forEach((item)=>{
    app.directive(item.name,item.method)
})
app.use(router).mount('#app')