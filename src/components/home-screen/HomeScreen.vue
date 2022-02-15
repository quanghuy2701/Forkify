<template>
  <div
    class="container-fluid"
    style="
      height: 100vh;
      background-color: var(--background);
      position: relative;
    "
    id="app"
  >
    <Navbar class="row" />
    <BannerCarousel />
    <div
      class="hoome-screen__bookmarks row mt-2 flex-sm-column flex-md-row justify-content-between"
    >
      <div
        class="col-lg-3 d-flex flex-column align-items-center justify-content-center"
      >
        <p
          class="text-uppercase font-weight-bold"
          style="font-size: 1.5rem; color: var(--text)"
        >
          BOOKMARKS
        </p>
        <blockquote class="blockquote">
          <p class="mb-0">Your favorite recipes</p>
        </blockquote>
      </div>
      <BookMarkCarousel class="d-none d-lg-block col-lg-8 mr-lg-5" />
      <BookMarkResponsive class="d-lg-none d-sm-block" />
    </div>
  </div>
</template>

<script>
import Navbar from "../../core/components/Navbar.vue";
import BookMarkCarousel from "./BookMarkCarousel.vue";
import BookMarkResponsive from "./BookMarkResponsive.vue";
import BannerCarousel from "../home-screen/BannerCarousel.vue";
export default {
  name: "HomeScreen",
  components: {
    Navbar,
    BookMarkCarousel,
    BookMarkResponsive,
    BannerCarousel,
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
