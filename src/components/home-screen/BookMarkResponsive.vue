<template>
  <div class="w-100">
    <div
      v-for="n in 5"
      class="card align-items-center w-75 px-2 mx-auto py-3 rounded-2 shadow mt-3"
      :key="n"
    >
      <div class="row no-gutters w-100">
        <div
          class="col-4 col-md-5 d-flex justify-content-center align-items-center"
        >
          <img
            class="card-img-top rounded-circle"
            src="https://forkify-api.herokuapp.com/images/Pizza2BDip2B12B500c4c0a26c.jpg"
            alt="card-image"
            style="height: 5rem; width: 5rem"
          />
        </div>
        <div class="col-8 col-md-7 card-body" style="bottom: 0">
          <h5 class="card-title font-weight-bold">Pizza Dip</h5>
          <p class="card-text h-50 w-100 text-wrap">Closet Cooking</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookMarkResponsive",
  components: {},
};
</script>

<style>
* {
  padding: 0;
  box-sizing: border-box;
  margin: 0;
}

.card {
  background-color: var(--primary_1);
}
</style>
