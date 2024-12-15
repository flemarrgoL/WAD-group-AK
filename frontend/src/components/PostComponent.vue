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
      <span class="like-counter">{{ likes }} Likes</span>
    </div>
  </article>
</template>

<script setup>
import { computed, defineProps, ref } from "vue";
import axios from "../axios";

// Props
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const likes = ref(props.post.likes);

// Computed property for formatted date
const formattedDate = computed(() => {
  const options = { month: "short", day: "numeric", year: "numeric" };
  return new Date(props.post.date).toLocaleDateString("en-US", options);
});


const likePost = async () => {
  try {
    const response = await axios.put(`/api/posts/${props.post.id}/like`);

    if (response.status === 200) {
      // Update the local post object with the new likes count
      likes.value = response.data.likes;
    }
  } catch (error) {
    console.error("Error updating likes:", error);
  }
};
</script>

<style scoped>
</style>

