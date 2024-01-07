import './bootstrap'
import '../css/app.css'

import { createApp, h } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './Pages/Home.vue'
import { logout$ } from './lib'


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
            component: () => import('@/Pages/Auth/Register.vue'),
        },
        {
            path: '/login',
            component: () => import('@/Pages/Auth/Login.vue'),
        },
        {
            path: '/logout',
            component: () => null,
            redirect(to) {
                logout$.next()
                return '/'
            }
        },
    ]
})

void async function() {
    if (!Reflect.has(globalThis, 'cookieStore')) {
        await import('@/lib/cookieStore')
    }
    createApp(Home).use(router).mount(`#app`)
}()