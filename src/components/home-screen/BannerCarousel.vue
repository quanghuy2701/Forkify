<template>
  <div class="w-100" style="height: 45%">
    <div
      id="carouselExampleControls"
      class="carousel slide row h-100"
      data-ride="carousel"
      data-interval="2000"
      style="height: 45%; position: relative"
    >
      <div class="carousel-inner h-100">
        <div class="carousel-item h-100 active">
          <Banner foodName="PIZZA" btnColor="#d22b2b" isPizza="true" />
        </div>
        <div class="carousel-item h-100">
          <Banner foodName="STEAK" btnColor="#813531" isSteak="true" />
        </div>
        <div class="carousel-item h-100">
          <Banner foodName="CHICKEN" btnColor="#f26b38" isChicken="true" />
        </div>
        <div class="carousel-item h-100">
          <Banner foodName="CAKE" btnColor="#ff8c96" isCake="true" />
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>

    <SearchBar class="home-screen__search-bar" />
  </div>
</template>

<script>
import Banner from "../home-screen/Banner.vue";
import SearchBar from "../home-screen/SearchBar.vue";
export default {
  name: "BannerCarousel",
  components: {
    Banner,
    SearchBar,
  },
};
</script>

<style>
* {
  padding: 0;
  box-sizing: border-box;
  margin: 0;
}

.home-screen__search-bar {
  font-size: 2rem;
  position: absolute;
  margin-top: -27vh;
}
</style>
