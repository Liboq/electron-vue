<template>
  <div class="markdown-container">
    <div class="flex1">
    <div>markdown 编辑区</div>
    <Post @send-post-text="getText"></Post>
    </div>
    <div class="flex1">
    <div>预览区</div>
    <View :text="postContent"></View>
    </div>
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
  
 .flex1{
  width: 50%;
  display: flex;
  flex-direction: column;
  height: 80vh;
 }
}
</style>
