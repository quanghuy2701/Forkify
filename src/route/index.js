import Vue from "vue";
import VueRouter from "vue-router";
import HomeScreen from "../components/home-screen/HomeScreen.vue";
import SearchResult from "../components/search-result/SearchResult.vue";
import FruitZone from "../components/fruit-zone/FruitZone.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "HomeScreen",
      component: HomeScreen,
    },
    {
      path: "/search",
      name: "SearchResult",
      component: SearchResult,
      props: true,
    },
    {
      path: "/fruit-zone",
      name: "FruitZone",
      component: FruitZone,
    },
  ],
});
