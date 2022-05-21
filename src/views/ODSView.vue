<script>
import ODSList from "@/components/ODSList.vue";
import ButtonNext from "@/components/ButtonNext.vue";

export default {
  components: {
    ODSList,
    ButtonNext,
  },
};
</script>

<template>
  <main>
    <ODSList />
    <ButtonNext
      go-to="/summary"
      :is-disabled="this.$store.state.odsFavourites.length === 0"
    />
  </main>
</template>
