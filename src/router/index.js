import Vue from 'vue'
import VueRouter from "vue-router";
import NotFound from "@/views/NotFound";
import ListView from "@/views/ListView";
import ScrapView from "@/views/ScrapView";

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        redirect: '/list',
    }, {
        path: '/list',
        name: 'list',
        component: ListView,
    }, {
        path: '/scrap',
        name: 'scrap',
        component: ScrapView,
    }, {
        path: '*',
        name: 'notfound',
        component: NotFound,
    }]
})