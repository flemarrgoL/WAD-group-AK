import { createStore } from "vuex";
import api from "../axios";

export default createStore({
    state: {
        posts: [],
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        incrementLikes(state, postId) {
            const post = state.posts.find((post) => post.id === postId);
            console.log(state.posts)
            if (post) {
                post.likes++;
            }
        },
        resetLikes(state) {
            state.posts.forEach((post) => {
                post.likes = 0;
            });
        },
    },
    actions: {
        async fetchPosts({ commit }) {
            try {
                const response = await api.get("/api/posts", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
                    },
                });
                commit("setPosts", response.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        },
    },
    getters: {
        allPosts(state) {
            return state.posts;
        },
    },
});
