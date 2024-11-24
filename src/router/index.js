import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import SignupPage from "../views/SignupPage.vue";
import AddPostPage from "../views/AddPostPage.vue";

const routes = [
    { path: "/", name: "MainPage", component: MainPage },
    { path: "/signup", name: "SignupPage", component: SignupPage },
    { path: "/addPost", name: "AddPostPage", component: AddPostPage },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
