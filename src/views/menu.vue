<template>
  <div class="menu-container">
    <div class="title">功能区</div>
    <div v-for="item in menu" :key="item.name">
      <navigator :name="item.name" :path="item.path"></navigator>
    </div>

    <div></div>
  </div>
</template>

<script setup>
import navigator from "@/components/navigator.vue";
const menu = [
  { path: "/markdown", name: "markdown" },
  { path: "/uploader", name: "uploader" },
];
</script>

<style lang="scss" scoped>
.menu-container{
  margin-top: 20px;
  padding: 2rem 20px 0 5px;
  border-right: 1px solid #ddd;
  .title{
    font-size: 14px;
  }
}

</style>
