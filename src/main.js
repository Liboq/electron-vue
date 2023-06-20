import { createApp } from 'vue'
import router from '@/router/index.js'
import App from './App.vue'
import directives from './directives'
import DraggableUploader from 'draggable-vue-uploader';
import 'draggable-vue-uploader/dist/style.css'

const app = createApp(App)
directives.forEach((item)=>{
    app.directive(item.name,item.method)
})
app.use(DraggableUploader)
app.use(router).mount('#app')