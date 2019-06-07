import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes/pages'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
    routes: routes
})

const APP_NAME = 'Admin Pro - VueJS'

new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app')