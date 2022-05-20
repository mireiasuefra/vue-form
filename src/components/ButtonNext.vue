<script setup>
import { RouterLink } from "vue-router";

defineProps({
  goTo: String,
});
</script>

<template>
  <RouterLink :to="goTo">
    <button class="btn btn-primary mr-1">Siguente</button>
  </RouterLink>
</template>
