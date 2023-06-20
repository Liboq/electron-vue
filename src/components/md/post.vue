<template>
  <div contenteditable="true" ref="postRef" class="post" @input="writeMd"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const props = defineProps({
  content: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["sendPostText"]);
const contentMd = ref(props.content);
const postRef = ref(null);
onMounted(() => {
  if (props.content) {
    postRef.target.innertext = props.content;
  }
});
const writeMd = (e) => {
  emit("sendPostText", e.target.innerText);
};
</script>

<style lang="scss">
.post {
  height: 100%;
  flex: 1;
  padding: 5px;
  white-space: normal;
  max-width: 738px;
  word-wrap: break-word;
  overflow-y: auto;
  /* 宽度 */
  &::-webkit-scrollbar {
    cursor: pointer;
    width: 8px;
  }

  /* 背景色 */
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  /* 滑块 */
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    cursor: pointer !important;
    &:hover {
      cursor: pointer;
      background-color: #ccc;
    }
  }

  /* 滑块悬停状态 */
  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
}
</style>
