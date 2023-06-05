<template>
  <div class="view">
    <div v-html="transTextToMd(props.text)"></div>

    <MarkDownItNavibar
      :content="props.text"
      height="80vh"
      title="666"
      isWatched
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
.view {
  height: 80vh;
  padding: 5px;
  flex: 1;
}
</style>
