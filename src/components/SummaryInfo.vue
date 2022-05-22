<script>
import ODSItem from "@/components/ODSItem.vue";

export default {
  components: {
    ODSItem,
  },
};
</script>

<template>
  <section class="summary-info">
    <h2 class="summary-info__title">Datos del usuario:</h2>
    <p class="summary-info__name">Nombre: {{ this.$store.state.name }}</p>
    <p class="summary-info__surname">
      Apellidos: {{ this.$store.state.surname }}
    </p>
    <h3 class="summary-info__comment-title">Observaciones:</h3>

    <p class="summary-info__comment-text">
      {{ this.$store.state.comment }}
    </p>

    <h2 class="summary-info__title">ODS seleccionados:</h2>
    <ul class="summary-info__list">
      <ODSItem
        v-for="ods in this.$store.state.odsFavourites"
        :key="ods.id"
        :ods="ods"
      />
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.summary-info {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  &__title {
    color: $principal-color;
    font-size: 20px;
    padding-bottom: 10px;
  }
  &__list {
    @media (min-width: $breakpoint-tablet) {
      display: flex;
      flex-direction: row;
    }
  }
}
</style>
