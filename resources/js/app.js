import './bootstrap'
import '../css/app.css'

import { createApp, h } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './Pages/Home.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/Pages/Posts.vue'),
        },
        {
            path: '/profile-edit',
            component: () => import('@/Pages/Home.vue'),
        },
        {
            path: '/register',
            component: () => import('@/Pages/Home.vue'),
        },
        {
            path: '/login',
            component: () => import('@/Pages/Home.vue'),
        },
        {
            path: '/logout',
            component: () => import('@/Pages/Home.vue'),
        },
    ]
})

createApp(Home).use(router).mount(`#app`)