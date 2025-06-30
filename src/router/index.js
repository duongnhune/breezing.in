import { createRouter, createWebHistory } from 'vue-router'
import Case1Layout from '../views/UserManagement.vue'
import Case2Layout from '../views/Case2Layout.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Case1Layout
    },
    {
        path: '/case-2',
        name: 'case2',
        component: Case2Layout
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
