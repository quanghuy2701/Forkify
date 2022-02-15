<template>
  <div
    id="fruit-zone"
    class="h-100 d-flex flex-column align-items-center container-fluid px-0"
    style="background: var(--background); height: 100vh"
  >
    <Navbar class="fruit-zone__nav-bar w-100" />
    <div
      class="fruit-zone__container shadow d-flex align-items-center my-auto row"
    >
      <p class="d-block d-lg-none w-100 py-1 border px-2">
        Recipes with <br />
        combination of fruit
      </p>
      <div
        style="position: relative; top: 0"
        class="d-block d-lg-none fruit-zone__scroll-view h-100 col-lg-4 px-0 w-100 overflow-auto"
      >
        <div class="col-12">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>
      <div
        class="fruit-zone__detail col-lg-8 px-0 h-100 d-flex flex-column border-right"
      >
        <img
          class="fruit-zone__banner w-100 border-bottom d-none d-lg-block"
          src="~@/assets/fruit-bg.png"
          alt=""
        />
        <div class="banner-text mx-auto w-100">FRUIT ZONE</div>
        <div class="mx-0 mt-1 w-100 row">
          <div class="row w-100" v-for="(e, index) in fruitList" :key="index">
            <FruitCard
              data-toggle="modal"
              data-target="#fruitDetail"
              v-for="(fruit, index) in e"
              :key="index"
              :FruitName="fruit"
            />
          </div>
        </div>
      </div>
      <div
        style="position: relative; border-radius: 0 1rem 0 1rem; top: 0"
        class="d-none d-lg-block fruit-zone__scroll-view h-100 col-lg-4 px-0 w-100 overflow-auto"
      >
        <p class="py-1 border">
          Recipes with <br />
          combination of fruit
        </p>
        <RecipeCard
          v-for="(recipe, k) in listRecipe"
          :id="recipe.id"
          :imgUrl="recipe.image_url"
          :publisher="recipe.publisher"
          :title="recipe.title"
          :key="k"
        />
      </div>
      <FruitModal />
    </div>

    <!-- Modal -->
  </div>
</template>

<script>
import Navbar from "../../core/components/Navbar.vue";
import RecipeCard from "../../core/components/RecipeCard.vue";
import http from "../../core/http";
import FruitCard from "./FruitCard.vue";
import FruitModal from "./FruitModal.vue";
export default {
  data: function () {
    return {
      fruitList: [
        ["apple", "apricot", "bananas", "blackberry", "blueberry"],
        ["cherries", "grapes", "kiwi", "lemon", "lime"],
        ["lychee", "mango", "orange", "papaya", "pear"],
        ["persimmon", "pineapple", "strawberry", "tomato", "watermelon"],
      ],
      listRecipe: [],
    };
  },
  name: "FruitZone",
  components: {
    Navbar,
    RecipeCard,
    FruitCard,
    FruitModal,
  },
  mounted() {
    http
      .request({
        path: "https://forkify-api.herokuapp.com/api/search",
        data: { q: "kiwifruit" },
      })
      .then((data) => {
        this.listRecipe = data.data.recipes;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
* {
  padding: 0;
  box-sizing: border-box;
  margin: 0;
}

#fruit-zone {
  min-height: 100vh;
}

.fruit-zone__container {
  height: 87vh;
  width: 85%;
  background: #fff;
}

.fruit-zone__banner {
  position: relative;
}

.banner-text {
  position: absolute;
  top: 10%;
  font-family: "Griffy", cursive;
  font-size: 2rem;
  font-weight: bold;
  color: #00c851;
}

.fruit-zone__scroll-view > p {
  background-color: var(--primary_1);
  color: var(--text);
  font-weight: bold;
}

.fruit-zone__container > p {
  background-color: var(--text);
  color: var(--primary_1);
  font-weight: bold;
}

@media (max-width: 992px) {
  #fruit-zone {
    height: 100vh !important;
    background: #fff !important;
  }

  .banner-text {
    position: relative;
    top: 0;
  }
  .fruit-zone__container {
    margin: 0p;
    height: 90vh;
    width: 100%;
    border-radius: 0;
    box-shadow: none !important;
  }

  .fruit-zone__detail {
    width: 100%;
  }

  .fruit-zone__scroll-view {
    height: 20% !important;
  }
  .fruit-zone__scroll-view > p {
    height: 100%;
  }
}

/* @media (min-width: 576px) and (max-width: 992px) {
  .fruit-zone__container {
    width: 100%;
  }

  .fruit-zone__detail {
    width: 90%;
  }
} */
</style>
