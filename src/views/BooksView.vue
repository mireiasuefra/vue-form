<script>
import ButtonNext from "@/components/ButtonNext.vue";

export default {
  components: {
    ButtonNext,
  },
};
</script>

<template>
  <main>
    Este es mi paso para los Libros
    <ButtonNext go-to="/summary" />
  </main>
</template>
