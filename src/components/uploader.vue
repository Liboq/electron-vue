<template>
  <draggable-upload action="/" :fileList="fileList"></draggable-upload>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import COS from "cos-js-sdk-v5";
const SecretId = ref("");
const SecretKey = ref("");
const fileList = ref([])
</script>

<style></style>
