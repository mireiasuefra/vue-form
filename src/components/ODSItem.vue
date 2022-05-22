<script>
export default {
  props: {
    ods: Object,
  },
};
</script>

<template>
  <li class="ods-item" :class="{ 'ods-item--favourite': ods.isSelected }">
    <p class="ods-item__name">{{ ods.name }}</p>
    <img
      class="ods-item__image"
      :src="`src/assets/ods/${ods.image}`"
      :alt="ods.name"
    />
  </li>
</template>

<style lang="scss" scoped>
.ods-item {
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
