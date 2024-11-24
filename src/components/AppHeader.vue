<template>
  <header>
    <nav class="navigation-bar">
      <div class="nav-left">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/addPost" class="nav-link">Add Post</router-link>
      </div>
      <div class="nav-right">
        <router-link to="/signup" class="nav-link">Sign Up/Log in</router-link>
        <img src="/assets/user.png" class="profile-image" id="profile-image" alt="User Icon" />
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>

</style>
