<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <RouterLink to="/">
      <img alt="Vue logo" class="logo" src="@/assets/logomireiasuero.png" />
    </RouterLink>
  </header>

  <RouterView />
</template>

<style>
#app {
  max-width: 1720px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 2rem;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  width: 200px;
}
</style>
