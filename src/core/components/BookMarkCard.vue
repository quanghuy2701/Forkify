<template>
  <div
    id="card"
    class="card align-items-center pt-3 mt-3 px-3 h-100 w-sm-100"
    style="width: 15rem; height: 100%"
  >
    <img
      class="card-img-top rounded-circle"
      src="https://forkify-api.herokuapp.com/images/Pizza2BDip2B12B500c4c0a26c.jpg"
      alt="card-image"
      style="height: 10rem; width: 10rem"
    />
    <div class="card-body" style="bottom: 0">
      <h5 class="card-title font-weight-bold">Pizza Dip</h5>
      <p class="card-text h-50 w-100 text-wrap">{{ test }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MarkUpCard",
  props: ["test"],
  components: {},
};
</script>

<style>
* {
  padding: 0;
  box-sizing: border-box;
  margin: 0;
}

#card {
  border-radius: 50% 50% 0 0;
  background-color: var(--primary_1);
}
</style>
