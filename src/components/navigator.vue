<template>
  <router-link :to="props.path">{{ props.name }}</router-link>
</template>

<script setup>
const props = defineProps({
  path: {
    type: String,
    default: "/",
  },
  name: {
    type: String,
    default: "/",
  },
});
</script>

<style></style>
