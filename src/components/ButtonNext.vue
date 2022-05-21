<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
  props: {
    goTo: String,
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <RouterLink v-if="!isDisabled" :to="goTo">
    <button class="btn btn-primary mr-1">Siguente</button>
  </RouterLink>
  <button v-else class="btn btn-primary mr-1 disabled">Siguente</button>
</template>
