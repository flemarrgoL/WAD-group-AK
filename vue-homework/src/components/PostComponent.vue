<template>
  <article class="post">
    <div class="post-header">
      <span class="post-user">{{ post.author }}</span>
      <span class="post-date">{{ formattedDate }}</span>
    </div>
    <img v-if="post.image" :src="post.image" alt="Post image" class="post-image" />
    <p class="post-content">{{ post.content }}</p>
    <div class="post-footer">
      <!-- Like nupp -->
      <button class="like-button" @click="likePost">Like ❤️</button>
      <!-- Likes loendur -->
      <span class="like-counter">{{ post.likes }} Likes</span>
    </div>
  </article>
</template>

<script setup>
import { computed, defineProps } from "vue";
import { useStore } from "vuex";

// Props
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

// Vuex Store
const store = useStore();

// Computed property for formatted date
const formattedDate = computed(() => {
  const options = { month: "short", day: "numeric", year: "numeric" };
  return new Date(props.post.date).toLocaleDateString("en-US", options);
});


const likePost = () => {
  store.commit("incrementLikes", props.post.id); // Commit Vuex mutation
};
</script>

<style scoped>
</style>

