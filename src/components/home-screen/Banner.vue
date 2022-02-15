<template>
  <div
    :class="background"
    class="d-flex align-items-center justify-content-end"
    id="banner"
  >
    <div class="col-lg-5 col-6">
      <button
        :style="cssProps"
        class="btn btn-primary px-4 py-3 rounded banner__btn"
        @click="handleBtnClick"
      >
        {{ foodName }}
        <i style="font-size: 1.2rem" class="fas fa-arrow-right ml-4"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  components: {},
  data: function () {
    return {
      image: "../assets/food-type/pizza.png",
    };
  },
  props: ["btnColor", "foodName", "isPizza", "isSteak", "isChicken", "isCake"],
  computed: {
    cssProps() {
      return {
        "--btn-color": this.btnColor,
      };
    },
    background() {
      return {
        "bg-pizza": this.isPizza,
        "bg-steak": this.isSteak,
        "bg-chicken": this.isChicken,
        "bg-cake": this.isCake,
      };
    },
  },
  methods: {
    handleBtnClick() {
      console.log(this.foodName.toLowerCase());
      this.$router.push({
        name: "SearchResult",
        params: { search: this.foodName.toLowerCase() },
      });
    },
  },
};
</script>

<style>
#banner {
  position: relative;
  height: 100%;
}

#banner::before {
  position: absolute;
  background-repeat: no-repeat;
  background-size: 100%;
  opacity: 0.9;
  z-index: -1;
  content: "";
  width: 100%;
  height: 100%;
}

.banner__btn {
  min-width: 30%;
  font-weight: bold;
  font-size: 1.2rem;
  background-color: var(--btn-color);
  border: none;
}

.banner__btn:hover {
  background-color: var(--primary_1);
  color: var(--text);
}

.banner__btn:hover i {
  transform: translate(0.5rem, 0);
}

/* set background */
.bg-steak::before {
  background-image: url("~@/assets/food-type/steak.png");
}

.bg-chicken::before {
  background-image: url("~@/assets/food-type/chicken.png");
}

.bg-cake::before {
  background-image: url("~@/assets/food-type/cake.png");
}

.bg-pizza::before {
  background-image: url("~@/assets/food-type/pizza.png");
}
</style>
