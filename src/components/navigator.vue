<template>
  <div class="nav-item">
    <router-link :to="props.path">{{ props.name }}</router-link>
  </div>
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

<style lang="scss">
.nav-item{
  margin: 10px;
  a {
  text-decoration: none;
  color: #000;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
}
.router-link-exact-active {
  color: #42b883;
  font-weight: 600;
  opacity: 1;
}
}

</style>
