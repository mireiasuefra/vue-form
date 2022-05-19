<script setup>
import { RouterLink } from "vue-router";

defineProps({
  goTo: String,
});
</script>

<template>
  <RouterLink :to="goTo">
    <button class="button-next">Siguente</button>
  </RouterLink>
</template>

<style scoped>
.button-next {
  padding: 10px;
}
</style>
