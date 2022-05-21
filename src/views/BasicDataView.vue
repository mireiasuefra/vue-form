<script>
import BasicDataForm from "@/components/BasicDataForm.vue";
import ButtonNext from "@/components/ButtonNext.vue";

export default {
  components: {
    BasicDataForm,
    ButtonNext,
  },
};
</script>

<template>
  <main>
    <BasicDataForm />
    <ButtonNext
      go-to="/ods"
      :is-disabled="!this.$store.state.name || !this.$store.state.surname"
    />
  </main>
</template>
