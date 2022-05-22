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
  <section>
    <ul class="ods-list">
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
