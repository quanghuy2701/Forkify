<template>
  <div>
    <carousel
      :per-page="3"
      :mouse-drag="false"
      :paginationEnabled="false"
      :navigationEnabled="true"
      navigation-next-label=""
      navigation-prev-label=""
    >
      <slide class="d-flex justify-content-center">
        <BookMarkCard test="Closet Cooking" />
      </slide>
      <slide class="d-flex justify-content-center">
        <BookMarkCard test="Two Peas and Third Pod" />
      </slide>
      <slide class="d-flex justify-content-center">
        <BookMarkCard test="Closet Cooking" />
      </slide>
      <slide class="d-flex justify-content-center">
        <BookMarkCard test="Two Peas and Third Pod" />
      </slide>
      <slide class="d-flex justify-content-center">
        <BookMarkCard test="Closet Cooking" />
      </slide>
      <slide class="d-flex justify-content-center">
        <BookMarkCard test="Two Peas and Third Pod" />
      </slide>
      <slide class="d-flex justify-content-center">
        <BookMarkCard test="Closet Cooking" />
      </slide>
      <slide class="d-flex justify-content-center">
        <BookMarkCard test="Two Peas and Third Pod" />
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide, Navigation } from "vue-carousel";
import BookMarkCard from "../../core/components/BookMarkCard.vue";
export default {
  name: "MarkUpCarousel",
  data() {
    return {
      nextLabel: "<img src='~@/assets/next.png' />",
      prevLabel: "<img src='/assets/images/chevron-left.png' />",
    };
  },
  components: {
    Carousel,
    Slide,
    BookMarkCard,
    Navigation,
  },
};
</script>

<style>
* {
  padding: 0;
  box-sizing: border-box;
  margin: 0;
}

.VueCarousel-navigation-next::after {
  content: url("~@/assets/next.png");
}
.VueCarousel-navigation-prev::after {
  content: url("~@/assets/left.png");
}
</style>
