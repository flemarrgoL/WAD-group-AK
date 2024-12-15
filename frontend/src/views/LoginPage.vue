<template>
  <div>
    <AppHeader />
    <main>
      <h1>Welcome to Our Site!</h1>
      <div class="form-container">
        <form id="loginForm" @submit.prevent="loginUser">
          <a href="/signup" class="create-account">Create an account</a>
          <p>or Please log in</p>

          <label for="user-email">Email:</label>
          <input v-model="email" type="text" id="user-email" name="user-email" required />

          <label for="password">Password:</label>
          <input v-model="password" type="password" id="password" name="password" required />

          <button type="submit">Log in</button>
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
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
import axios from "../axios";

// Router instance
const router = useRouter();

// Data properties for form
const email = ref("");
const password = ref("");
const errorMessage = ref("");

const loginUser = async () => {
  try {
    const response = await axios.post("/api/auth/login", {
      email: email.value,
      password: password.value,
    });

    localStorage.setItem("jwt_token", response.data.token);

    router.push("/");
  } catch (error) {
    // Handle errors, e.g., incorrect credentials
    console.error("Login failed:", error);
    errorMessage.value = "Invalid email or password. Please try again.";
  }
};
</script>

<style scoped>
.error-message {
  color: red;
  font-size: 14px;
}
</style>