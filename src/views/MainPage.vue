<template>
  <div>
    <AppHeader />
    <main class="posts-section">
      <h1>All Posts</h1>
      <!-- Reset Likes nupp -->
      <button @click="resetAllLikes">Reset Likes</button>
      <!-- Kuvatakse kõik postitused -->
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import Post from "../components/PostComponent.vue";

// Use Vuex store
const store = useStore();

// Computed properties
const posts = computed(() => store.getters.allPosts); // Use Vuex getter to retrieve posts

// Methods
const resetAllLikes = () => {
  store.commit("resetLikes"); // Commit a mutation to reset likes
};
</script>

<style scoped>

</style>
