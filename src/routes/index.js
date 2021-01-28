import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Ranking from '../views/Ranking.vue'
import Bets from '../views/Bets.vue'
import Admin from '../views/Admin.vue'
import Configs from '../views/Configs.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/ranking',
        name: 'Ranking',
        component: Ranking
    },
    {
        path: '/bets',
        name: 'Bets',
        component: Bets
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin
    },
    {
        path: '/configs',
        name: 'Configs',
        component: Configs
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
