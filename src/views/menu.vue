<template>
  <div class="menu-container">
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
  height: 100%;
  padding: 0 20px 0 5px;
}
</style>
