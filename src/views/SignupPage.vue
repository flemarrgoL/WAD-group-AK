<template>
  <div>
    <AppHeader />
    <main>
      <h1>Welcome to (Our site name)!</h1>
      <div class="form-container">
        <form id="signupForm" @submit.prevent="navigateToHome">
          <a href="/signup" class="create-account">Create an account</a>
          <p>or Please log in</p>

          <label for="user-email">Email:</label>
          <input type="text" id="user-email" name="user-email" required />

          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            v-model="password"
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

          <a href="/forgot-password" class="forgot-password">Forgot your password?</a>
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


const password = ref("");
const passwordErrors = ref([]);

// Password validation
const validatePassword = () => {
  const errors = [];

  // Checking whether a condition is filled that makes the password invalid and

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
    errors.push("Password must include the character '_'.");
  }

  // Update the errors
  passwordErrors.value = errors;
};

const router = useRouter();

// Navigate to home page after successful psignup
const navigateToHome = () => {
  router.push("/");
};
</script>

<style scoped>
.error {
  color: red;
}
</style>