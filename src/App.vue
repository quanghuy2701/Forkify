<template>
  <div id="app">
    <!-- <HomeScreen /> -->
    <!-- <SearchResult /> -->
    <!-- <FruitZone FruitName="apple" /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HomeScreen from "./components/home-screen/HomeScreen.vue";
// import SearchResult from "./components/search-result/SearchResult.vue";
// import FruitZone from "./components/fruit-zone/FruitZone.vue";
import "./assets/style/variable.css";
import http from "./core/http/index.js";
export default {
  name: "App",
  components: {
    // HomeScreen,
    // SearchResult,
    // FruitZone,
  },
  mounted() {
    http
      .request({
        path: "https://forkify-api.herokuapp.com/api/search?q=pizza",
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
* {
  font-family: "Encode Sans", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 16px;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
