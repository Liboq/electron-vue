<template>
  <div class="view">
    <div class="viewHtml" v-html="transTextToMd(props.text)"></div>

    <MarkDownItNavibar
      :content="props.text"
      height="80vh"
      title="大纲"
      isWatched
      scrollEL=".view"
    ></MarkDownItNavibar>
  </div>
</template>

<script setup>
import { transTextToMd } from "@/utils/transTextToMd";
import MarkDownItNavibar from "markdown-it-navbar";
import "markdown-it-navbar/lib/style.css"
const props = defineProps({
  text: {
    type: String,
    default: "#222",
  },
});
</script>

<style lang="scss">
@media screen and (max-width: 1000px) {
  .anchor-container {
    display: none !important;
  }
}
.view {
  height: 80vh;
  padding: 5px;
  flex: 1;
  display: flex;
  overflow: auto;
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
    &:hover{
        cursor: pointer;
        background-color: #ccc;
    }
  }

  /* 滑块悬停状态 */
  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
  .anchor-container {
    width: 200px;
  }
}
</style>
