import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import LoginPage from "../views/LoginPage.vue";
import AddPostPage from "../views/AddPostPage.vue";

const routes = [
    { path: "/", name: "MainPage", component: MainPage },
    { path: "/login", name: "LoginPage", component: LoginPage },
    { path: "/addPost", name: "AddPostPage", component: AddPostPage },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
