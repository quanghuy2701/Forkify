<template>
  <div
    id="recipe-detail"
    class="d-flex flex-column align-items-center recipe-detail mt-5 mt-lg-0"
  >
    <img
      style="border-radius: 0 1rem 0 0"
      src="~@/assets/kitchen.png"
      alt="kitchen"
      class="w-100 d-none d-lg-block"
    />
    <div class="recipe-detail__name w-50 py-3 rounded">{{ title }}</div>
    <div style="" class="mt-lg-auto mt-4 row w-100 h-100">
      <div class="col-lg-8">
        <p style="color: var(--text)" class="font-weight-bold mt-2">
          Ingredients
        </p>
        <ul
          style="height: 14rem"
          class="recipe-detail__indregident-list overflow-auto"
        >
          <li v-for="(ingredient, k) in ingredients" :key="k">
            {{ ingredient }}
          </li>
        </ul>
      </div>
      <div
        class="d-flex flex-column justify-content-center h-100 mt-4 mt-lg-0 col-lg-4"
      >
        <p style="color: var(--text)" class="font-weight-bold">
          How to cook it
        </p>
        <button
          style="background-color: #d22b2b"
          class="btn btn-primary px-4 py-3 rounded banner__btn border-0"
        >
          Direction
          <i style="font-size: 1.2rem" class="fas fa-arrow-right ml-4"></i>
        </button>
        <p style="font-size: 0.8rem" class="mt-3">
          This recipe was carefully designed and tested by All Recipes.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeDetail",

  components: {},
  props: ["ingredients", "title"],
};
</script>

<style>
* {
  padding: 0;
  box-sizing: border-box;
  margin: 0;
}

#recipe-detail {
  max-height: 100vh;
}

.recipe-detail__name {
  margin-top: -4rem;
  background-color: var(--primary_1);
  font-size: 1.5rem;
  transform: matrix(1, 0.1, 0.01, 1, 0, 0);
  font-weight: bold;
  color: var(--text);
}

.recipe-detail__indregident-list {
  display: grid;
  grid-template-columns: auto auto;
  grid-row-gap: 1rem;
  grid-column-gap: 2rem;
}

.recipe-detail__indregident-list li {
  list-style-type: none;
  text-align: start;
}
</style>
