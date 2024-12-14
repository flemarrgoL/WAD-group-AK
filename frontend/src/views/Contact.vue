<template>
  <div>
    <AppHeader />
    <main style="padding-top: 60px;">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us.</p>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";

export default {
  name: "ContactPage",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style scoped>
main {
  padding: 20px;
  text-align: center;
}

main h1 {
  margin-bottom: 20px;
}
</style>
