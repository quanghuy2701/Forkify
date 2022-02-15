<template>
  <div
    id="search-result"
    class="h-100 d-flex flex-column align-items-center justify-content-center"
    style="background: var(--background); height: 100vh"
  >
    <div
      class="search-result__container shadow d-flex flex-column align-items-center"
    >
      <Navbar
        @clicked="handleSearch"
        showSearchBar="true"
        class="search-result__nav-bar w-100"
      />
      <p>Search Result:</p>
      <div class="my-3 row mh-100 search-result__detail shadow">
        <div
          style="border-radius: 1rem 0 0 1rem; cursor: pointer"
          class="search-result__scroll-view h-100 col-lg-4 px-0 overflow-auto"
        >
          <RecipeCard
            v-for="(recipe, k) in searchRes"
            @clicked="handleCardClick"
            :id="recipe.recipe_id"
            :imgUrl="recipe.image_url"
            :publisher="recipe.publisher"
            :title="recipe.title"
            :key="k"
          />
        </div>
        <RecipeDetail
          class="search-result__detail col-lg-8 h-100 px-0"
          :ingredients="ingredients"
          :title="detailTitle"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../../core/components/Navbar.vue";
import RecipeCard from "../../core/components/RecipeCard.vue";
import http from "../../core/http";
import RecipeDetail from "./RecipeDetail.vue";
export default {
  name: "SearchResult",
  data: function () {
    return {
      searchRes: [],
      ingredients: [],
      detailTitle: "",
    };
  },
  components: {
    Navbar,
    RecipeCard,
    RecipeDetail,
  },
  props: ["search"],
  mounted() {
    http
      .request({
        path: "https://forkify-api.herokuapp.com/api/search",
        data: { q: this.search },
      })
      .then((data) => {
        this.searchRes = data.data.recipes;
        console.log(this.searchRes);
      })
      .then(() => {
        this.getFirstRecipeDetail(this.searchRes[0].recipe_id);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    handleSearch(value) {
      console.log(value);
      http
        .request({
          path: "https://forkify-api.herokuapp.com/api/search",
          data: { q: value },
        })
        .then((data) => {
          this.searchRes = data.data.recipes;
        })
        .then(() => {
          this.getFirstRecipeDetail(this.searchRes[0].recipe_id);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getFirstRecipeDetail(id) {
      http
        .request({
          path: "https://forkify-api.herokuapp.com/api/get",
          data: { rId: id },
        })
        .then((data) => {
          this.ingredients = data.data.recipe.ingredients;
          this.detailTitle = data.data.recipe.title;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleCardClick(value) {
      console.log(value);
      this.getFirstRecipeDetail(value);
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

#search-result {
  min-height: 100vh;
}

.search-result__container {
  height: 90vh;
  width: 85%;
  background: var(--primary_1);
  border-radius: 1rem;
}

.search-result__container > p {
  width: 85%;
  text-align: start;
  margin-bottom: -0.5rem;
  font-weight: bold;
  padding: 0 0.5rem;
  color: var(--text);
}

.search-result__container .search-result__nav-bar {
  border-radius: 1rem 1rem 0 0;
}

.search-result__detail {
  background-color: #fff;
  min-height: 70vh;
  width: 85%;
  border-radius: 1rem;
}

@media (max-width: 992px) {
  .search-result__container {
    margin: 0p;
    height: 120vh;
    width: 100%;
    border-radius: 0;
  }

  .search-result__detail {
    width: 100%;
  }

  .search-result__scroll-view {
    height: 20% !important;
    border: solid #000 1px;
    border-radius: 0 !important;
  }

  .search-result__detail {
    height: 60%;
  }
}

/* @media (min-width: 576px) and (max-width: 992px) {
  .search-result__container {
    width: 100%;
  }

  .search-result__detail {
    width: 90%;
  }
} */
</style>
