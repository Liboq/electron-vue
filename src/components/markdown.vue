<template>
  <div class="markdown-container">
    <Post @send-post-text="getText"></Post>
    <View :text="postContent"></View>
  </div>
</template>

<script setup>
import Post from './md/post.vue'
import View from './md/view.vue'
// import "markdown-it-navbar/lib/style.css";

import { watch,onMounted, ref } from "vue";
const postContent = ref("")
const getText = (text)=>{
    postContent.value = text
}





</script>

<style lang="scss" scoped>
.markdown-container {
  display: flex;
  
 
}
</style>
