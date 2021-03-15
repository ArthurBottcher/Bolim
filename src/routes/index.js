import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/Admin.vue'
import Bets from '../views/Bets.vue'
import Configs from '../views/Configs.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import PageError from '../views/PageError.vue'
import Ranking from '../views/Ranking.vue'
import Results from '../views/Results.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        redirect: '/page-error'
    },
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/page-error',
        name: 'PageError',
        component: PageError
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
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
    },
    {
        path: '/results',
        name: 'Results',
        component: Results
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
