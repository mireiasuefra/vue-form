<script>
import odsData from "../assets/ods.json";
import ODSItem from "@/components/ODSItem.vue";

export default {
  components: {
    ODSItem,
  },
  data() {
    return {
      odsList: odsData,
    };
  },
  methods: {
    onClick(odsClicked) {
      const odsFound = this.$store.state.odsFavourites.find(
        (odsFavourite) => odsFavourite.id === odsClicked.id
      );

      if (!odsFound) {
        if (this.$store.state.odsFavourites.length < 3) {
          this.$store.commit("addFavourite", odsClicked);
          odsClicked.isSelected = true;
        }
      } else {
        this.$store.commit("removeFavourite", odsClicked);
        odsClicked.isSelected = false;
      }
    },
  },
};
</script>

<template>
  <section class="ods-list">
    <h2 class="ods-list__title">Objetivos de Desarrollo Sostenible</h2>
    <ul class="ods-list__list">
      <ODSItem
        v-for="ods in odsList"
        :key="ods.id"
        :ods="ods"
        @click="onClick(ods)"
      />
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.ods-list {
  &__title {
    color: $terciary-color;
    font-size: 20px;
    display: flex;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;

    @media (min-width: $breakpoint-tablet) {
      font-size: 30px;
    }
  }

  &__list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
