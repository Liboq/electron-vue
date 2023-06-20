<template>
  <div
    v-if="visible"
    class="overlay"
    :style="{ backgroundColor: color, opacity: opacity }"
  >
    <div class="dialog-content">
      <slot />
      <span class="title-text">{{ props.title }}</span>

      <span class="close-icon" @click="emit('close')">X</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: "white",
  },
  opacity: {
    type: Number,
    default: 0.5,
  },
  title: {
    type: String,
    default: "设置",
  },
});
const emit = defineEmits(['close'])
</script>

<style scoped lang="scss">
.overlay {
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .dialog-content {
    position: relative;
    background-color: #ccc;
    min-width: 400px;
    min-height: 400px;
    z-index: 100;
    padding-top: 30px;
    .close-icon {
      position: absolute;
      right: 10px;
      top: 0;
    }
    .title-text{
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
