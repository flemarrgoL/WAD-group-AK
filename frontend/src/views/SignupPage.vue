<template>
  <div>
    <AppHeader />
    <main>
      <h1>Welcome to Our Site!</h1>
      <div class="form-container">
        <form id="signupForm" @submit.prevent="signupUser">
          <a href="/login" class="create-account">Back to Log in page</a>

          <label for="user-email">Email:</label>
          <input v-model="email" type="text" id="user-email" name="user-email" required />

          <label for="password">Password:</label>
          <input
              v-model="password"
              type="password"
              id="password"
              name="password"
              @input="validatePassword"
              required
          />
          <!-- Show password validation errors -->
          <div v-if="passwordErrors.length">
            <p v-for="(error, index) in passwordErrors" :key="index" class="error">{{ error }}</p>
          </div>

          <div v-if="passwordErrors.length" class="error-message">
            <p>Please choose a different password. It does not meet the required criteria.</p>
          </div>

          <button type="submit" :disabled="passwordErrors.length > 0">Sign up</button>
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

// Data properties for form
const email = ref("");
const password = ref("");
const passwordErrors = ref([]);
const errorMessage = ref(""); // Error message for signup failure

const validatePassword = () => {
  const errors = [];

  if (password.value.length < 8 || password.value.length > 15) {
    errors.push("Password must be between 8 and 15 characters.");
  }

  if (!/[A-Z]/.test(password.value)) {
    errors.push("Password must include at least one uppercase letter.");
  }

  if (!/[a-z].*[a-z]/.test(password.value)) {
    errors.push("Password must include at least two lowercase letters.");
  }

  if (!/\d/.test(password.value)) {
    errors.push("Password must include at least one numeric value.");
  }

  if (!/^[A-Z]/.test(password.value)) {
    errors.push("Password must start with an uppercase letter.");
  }

  if (!/_/.test(password.value)) {
    errors.push("Password must include the character '_'");
  }

  // Update the errors
  passwordErrors.value = errors;
};

const router = useRouter();

const signupUser = async () => {
  try {
    // Send POST request to backend with email and password
    const response = await axios.post("/api/auth/signup", {
      email: email.value,
      password: password.value,
    });

    localStorage.setItem("jwt_token", response.data.token);

    router.push("/");
  } catch (error) {
    // Handle error during signup (e.g., email already exists)
    console.error("Signup failed:", error);
    errorMessage.value = "An error occurred. Please try again later.";
  }
};
</script>

<style scoped>
.error {
  color: red;
}
.error-message {
  color: red;
  font-size: 14px;
}
</style>