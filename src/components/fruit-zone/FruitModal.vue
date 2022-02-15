<template>
  <div
    class="w-100 modal fade fruit-card"
    id="fruitDetail"
    tabindex="-1"
    role="dialog"
    aria-labelledby="fruitDetailTitle"
    aria-hidden="true"
  >
    <div class="modal-lg modal-dialog modal-dialog-centered" role="document">
      <div
        style="background-color: var(--primary_1); border-radius: 1rem"
        class="modal-content"
      >
        <div class="modal-body row">
          <div class="my-auto d-flex col-3 px-0">
            <FruitCard class="w-100 my-auto" FruitName="apple" />
          </div>
          <div class="col-9">
            <div
              style="background-color: #fff; border-radius: 1rem; padding: 1rem"
              class="h-100 w-100"
            >
              <p
                style="font-size: 1.5rem; color: var(--text)"
                class="font-weight-bold"
              >
                NUTRITION
              </p>
              <div class="mx-auto fruit-card__nutrition">
                <p>+ carbohydrates: 11.4</p>
                <p>+ protein: 0.3</p>
                <p>+ fat: 0.4</p>
                <p>+ calories: 52</p>
                <p>+ sugar: 10.2</p>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">Recipes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FruitCard from "./FruitCard.vue";
export default {
  name: "FruitModal",
  props: ["FruitName"],
  components: {
    FruitCard,
  },
  methods: {
    getImgUrl(fruit) {
      let images = require.context("@/assets/fruit", false, /\.png$/);
      return images("./" + fruit + ".png");
    },
  },
};
</script>

<style>
.fruit-card__nutrition {
  display: grid;
  grid-template-columns: auto auto;
  text-align: justify;
  grid-column-gap: 3rem;
  width: 90%;
}

.fruit-card__nutrition p {
  font-size: 1.2rem;
}
</style>
