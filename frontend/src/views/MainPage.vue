<template>
  <div>
    <AppHeader />
    <main class="posts-section">
      <h1>All Posts</h1>

      <!-- Display a message if the user is not signed in -->
      <div v-if="!isLoggedIn">
        <p>Please log in to view the posts.</p>
        <button @click="goToLoginPage">Go to Login</button>
      </div>

      <!-- Show posts if the user is signed in -->
      <div v-if="isLoggedIn">
        <button @click="resetAllLikes">Reset Likes</button>

        <!-- Loop through posts -->
        <Post v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import Post from "../components/PostComponent.vue";
import axios from "../axios"; // Assuming Axios instance is configured

// Use Vuex store
const store = useStore();
const router = useRouter();

// Local state to check if the user is logged in
const isLoggedIn = computed(() => !!localStorage.getItem("jwt_token"));

const posts = ref([]);

// Fetch posts from API
const fetchPosts = async () => {
  try {
    const response = await axios.get("/api/posts", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
    posts.value = response.data; // Store posts in the local state
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

// Reset Likes method
const resetAllLikes = () => {
  store.commit("resetLikes"); // Commit a mutation to reset likes
};

// Navigate to the login page
const goToLoginPage = () => {
  router.push("/login");
};

// Fetch posts when component is mounted
onMounted(() => {
  if (isLoggedIn.value) {
    fetchPosts(); // Fetch posts if the user is logged in
  }
});
</script>

<style scoped>
</style>