<template>
  <div>
    <AppHeader />
    <main class="main-container">
      <div class="form-container">
        <h1 class="form-header">Add a New Post</h1>

        <!-- Show if the user is not logged in -->
        <div v-if="!isLoggedIn">
          <p>Please log in to create a post.</p>
          <button @click="goToLoginPage">Go to Login</button>
        </div>

        <!-- Show post creation form if the user is logged in -->
        <form v-else @submit.prevent="createPost">
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
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import axios from "../axios";
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";

// Router instance
const router = useRouter();

// Reactive state variables
const postTitle = ref("");
const postContent = ref("");
const selectedFile = ref(null);

// Computed property to check if the user is logged in
const isLoggedIn = computed(() => !!localStorage.getItem("jwt_token"));

// Methods
const handleFileUpload = (event) => {
  selectedFile.value = event.target.files[0];
};

const createPost = async () => {
  const formData = new FormData();
  formData.append("title", postTitle.value);
  formData.append("content", postContent.value);
  if (selectedFile.value) {
    formData.append("file", selectedFile.value);
  }

  try {
    const response = await axios.post("/api/posts/post", formData, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
    console.log("Post created:", response.data);
    // Redirect to home or some other page after successful post creation
    router.push("/");
  } catch (error) {
    console.error("Error creating post:", error);
  }
};

const goToLoginPage = () => {
  router.push("/login");
};
</script>

<style scoped>
</style>