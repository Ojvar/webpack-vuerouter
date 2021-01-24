"use strict";

import { Vue, VueRouter } from "./app";

/* Setup Router */
const router = new VueRouter({
    routes: [
        {
            path: "/home",
            component: () =>
                import(
                    /* webpackChunkName: "vue-home" */ "./components/home.vue"
                ),
        },
        {
            path: "/about",
            component: () =>
                import(
                    /* webpackChunkName: "vue-about" */ "./components/about.vue"
                ),
        },
    ],
});

/* Setup Vue */
new Vue({
    el: "#app",

    router,
});
