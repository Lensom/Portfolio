import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router);
import Index from '@/components/pages/Index';
import About from '@/components/pages/About';
import Skills from '@/components/pages/Skills';
import Works from '@/components/pages/Works';
import Contact from '@/components/pages/Contact';

const router = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/skills',
            name: 'skills',
            component: Skills
        },
        {
            path: '/works',
            name: 'works',
            component: Works
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
    ]
})

export default router;
