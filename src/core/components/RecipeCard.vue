<template>
  <div
    @click="handleClick"
    class="row no-gutters w-100 border-bottom px-3"
    style="background: #fff"
  >
    <div class="col-3 d-flex justify-content-center align-items-center">
      <img
        class="card-img-top rounded-circle"
        :src="imgUrl"
        alt="card-image"
        style="height: 5rem; width: 5rem"
      />
    </div>
    <div class="col-9 card-body w-100 px-2" style="bottom: 0">
      <h5 style="color: var(--text)" class="card-title font-weight-bold">
        {{ title }}
      </h5>
      <p class="card-text h-50 w-100 text-wrap">{{ publisher }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeCard",
  props: ["test", "title", "publisher", "id", "imgUrl"],
  components: {},
  methods: {
    handleClick() {
      this.$emit("clicked", this.id);
    },
  },
};
</script>

<style>
* {
  padding: 0;
  box-sizing: border-box;
  margin: 0;
}
</style>
