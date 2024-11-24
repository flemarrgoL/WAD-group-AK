<template>
  <div>
    <AppHeader />
    <main>
      <h1>Welcome to (Our site name)!</h1>
      <div class="form-container">
        <form id="loginForm" @submit.prevent="navigateToHome">
          <a href="/signup" class="create-account">Create an account</a>
          <p>or Please log in</p>

          <label for="user-email">Email:</label>
          <input type="text" id="user-email" name="user-email" required />

          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Log in</button>

          <a href="/forgot-password" class="forgot-password">Forgot your password?</a>
        </form>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";

// Router instance
const router = useRouter();

// Methods
const navigateToHome = () => {
  // Redirect to Home page
  router.push("/");
};
</script>

<style scoped>
/* Siin stiile ei lisata, kõik tuleb styles.css failist */
</style>
