<template>
  <div class="layout-content">
    <Header></Header>
    <div class="flex-box"><Menu></Menu><Content></Content> </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Content from "./content.vue";
import Header from "./header.vue";
import Menu from "./menu.vue";
import Footer from "./footer.vue";
</script>

<style lang="scss" scoped>
@import url(@/assets/common.scss);
.layout-content {
  width: 100%;
  height: 100%;
  .flex-box {
    display: flex;
    height: 80vh;
  }
}
</style>
