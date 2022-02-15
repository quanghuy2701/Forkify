<template>
  <div style="width: 20%; cursor: pointer">
    <img :src="getImgUrl(FruitName)" alt="fruit" />
    <p class="text-uppercase mt-1">
      {{ FruitName }}
    </p>
  </div>
</template>

<script>
export default {
  name: "FruitCard",
  props: ["FruitName"],
  components: {},
  methods: {
    getImgUrl(fruit) {
      let images = require.context("@/assets/fruit", false, /\.png$/);
      return images("./" + fruit + ".png");
    },
  },
};
</script>

<style></style>
