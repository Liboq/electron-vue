<template>
  <router-view></router-view>
</template>

<script setup>
import "@/assets/index.scss";
import "@/assets/highlight.scss"
import { ipcRenderer } from "electron";
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    ipcRenderer.send("window-reset");
  }
});
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
