<template>
  <div>
    <AppHeader />
    <main class="main-container">
      <div class="form-container">
        <h1 class="form-header">Add a New Post</h1>
        <form @submit.prevent="navigateToHome">
          <label for="title">Post Title:</label>
          <input type="text" id="title" v-model="postTitle" required />

          <label for="content">Post Content:</label>
          <textarea id="content" v-model="postContent" rows="4" required></textarea>

          <label for="file">Select file:</label>
          <input type="file" id="file" @change="handleFileUpload" />

          <button type="submit">Create Post</button>
        </form>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";

// Router instance
const router = useRouter();

// Reactive state variables
const postTitle = ref("");
const postContent = ref("");
const selectedFile = ref(null);

// Methods
const handleFileUpload = (event) => {
  selectedFile.value = event.target.files[0];
};

const navigateToHome = () => {
  // Redirect to Home page
  router.push("/");
};
</script>
<style scoped>
</style>
