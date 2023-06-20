<template>
  <div class="header-container">
    <div class="title">pic-uploader</div>
    <div class="right-icon">
      <div class="icon mini-icon" @click="miniApp">-</div>
      <div class="icon max-icon" @click="maxApp">@</div>
      <div class="icon close-icon" @click="closeApp">x</div>
    </div>
  </div>
</template>

<script setup>
import { ipcRenderer } from "electron";

const miniApp = () => {
  ipcRenderer.send("window-minimize");
};
const maxApp = () => {
  ipcRenderer.send("window-maximize");
};
const closeApp = () => {
  ipcRenderer.send("window-close");
};
</script>

<style lang="scss" scoped>
$header-height:5vh;
.header-container {
  height: $header-height;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  .title{
    font-size: 12px;
  }
  .right-icon{
    display: flex;
    .icon{
        cursor: pointer;
    }
    .icon+.icon{
        font-size: 16px;
        margin-left: 10px;
    }
  }
}
</style>
