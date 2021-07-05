import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/test";
import About from "../components/test2";
import test3 from "../components/test3";

const routes = [
    {
        path: "/",
        name: "test",
        component: test3,
    },
    {
        path: "/test",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
