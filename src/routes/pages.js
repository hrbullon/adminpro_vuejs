import DashboardComponent from './../pages/DashboardComponent.vue'
import UserComponent from './../pages/UserComponent.vue'

export const routes = [
    { path: '/', component: DashboardComponent },
    { path: '/users/:id', component: UserComponent }

]