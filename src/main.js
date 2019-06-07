import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const APP_NAME = 'Admin Pro - VueJS'

new Vue({
    render: h => h(App),
}).$mount('#app')