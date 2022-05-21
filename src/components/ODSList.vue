<script>
import odsData from "../assets/ods.json";

export default {
  data() {
    return {
      odsList: odsData,
      favourites: [],
    };
  },
  methods: {
    onClick(odsClicked) {
      const odsFound = this.favourites.find(
        (odsFavourite) => odsFavourite.id === odsClicked.id
      );

      if (!odsFound) {
        this.favourites.push(odsClicked);
        odsClicked.isSelected = true;
      } else {
        const index = this.favourites.findIndex(
          (odsFavourite) => odsFavourite.id === odsClicked.id
        );
        this.favourites.splice(index, 1);
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
    min-width: 250px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 10px;
    border: 1px solid rgb(219, 54, 109);
    border-radius: 10%;

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
