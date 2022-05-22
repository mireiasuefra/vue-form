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
    <p class="summary-info__name">
      Nombre:
      <span class="summary-info__name-span"> {{ this.$store.state.name }}</span>
    </p>
    <p class="summary-info__surname">
      Apellidos:
      <span class="summary-info__surname-span">
        {{ this.$store.state.surname }}
      </span>
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
    color: $terciary-color;
    font-size: 20px;
    padding-bottom: 15px;
    padding-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__name {
    color: $secondary-color;
  }
  &__name-span {
    color: $principal-color;
  }
  &__surname {
    color: $secondary-color;
  }
  &__surname-span {
    color: $principal-color;
  }
  &__comment-title {
    color: $secondary-color;
    font-size: 16px;
  }
  &__comment-text {
    color: $principal-color;
    font-size: 16px;
  }

  &__list {
    cursor: default;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: $breakpoint-tablet) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
