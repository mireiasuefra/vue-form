<script>
import odsData from "../assets/ods.json";

export default {
  data() {
    return {
      odsList: odsData,
    };
  },
};
</script>

<template>
  <div>
    <ul>
      <li v-for="ods in odsList" :key="ods.id">
        <p>{{ ods.name }}</p>
        <img :src="`src/assets/ods/${ods.image}`" :autocorrect="ods.name" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
