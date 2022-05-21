<script>
import odsData from "../assets/ods.json";

export default {
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
  <div>
    <ul class="ods">
      <li
        class="ods__item"
        :class="{ 'ods__item--favourite': ods.isSelected }"
        v-for="ods in odsList"
        :key="ods.id"
        @click="() => onClick(ods)"
      >
        <p class="ods__name">{{ ods.name }}</p>
        <img
          class="ods__image"
          :src="`src/assets/ods/${ods.image}`"
          :autocorrect="ods.name"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.ods {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  &__item {
    min-width: 100px;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 10px;
    border: 1px solid rgb(219, 54, 109);
    border-radius: 10%;
    cursor: pointer;

    &--favourite {
      background-color: rgba(219, 54, 109, 0.377);
    }
  }
  &__name {
    text-align: center;
    font-size: 18px;
    padding-top: 10px;
  }
  &__image {
    width: 75%;
    padding: 15px;
    border-radius: 10%;
  }
}
</style>
