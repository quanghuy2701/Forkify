<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <router-link class="navbar-brand mr-auto text" to="/home"
        >Forkify</router-link
      >

      <div
        v-if="showSearchBar"
        class="search-bar__container ml-3 d-flex justify-content-between w-25 rounded shadow"
      >
        <input
          style="min-height: 3rem"
          class="form-control border-0 h-100 rounded-left"
          type="search"
          placeholder="Search"
          v-model="inputData"
          aria-label="Search"
        />
        <button
          style="background-color: var(--text)"
          class="px-2 rounded-right search-btn"
          @click="handleClick"
        >
          <i class="fas fa-search mb-3"></i>
        </button>
      </div>

      <button
        class="navbar-toggler bg-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end h-100"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mt-1 mt-lg-0">
          <li class="nav-item my-0.5">
            <a class="nav-link" href="#">About us </a>
          </li>
          <li class="nav-item my-0.5">
            <a class="nav-link" href="#">Add recipe</a>
          </li>
        </ul>

        <div
          class="d-flex flex-column align-items-center navbar__btn-container"
        >
          <button
            @click="handleFruitZone"
            class="btn btn-success my-2 mx-3"
            style="font-weight: bold"
          >
            Fruit Zone
          </button>
          <p class="navbar__extra-info px-1 border rounded mx-1">
            Discover interesting facts and recipes about fruit
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: function () {
    return {
      inputData: "",
    };
  },
  components: {},
  props: ["showSearchBar"],
  methods: {
    handleClick() {
      this.$emit("clicked", this.inputData);
    },
    handleFruitZone() {
      this.$router.push("/fruit-zone");
    },
  },
};
</script>

<style scoped>
.navbar {
  background: var(--primary_1);
  position: relative;
  z-index: 100;
}

.navbar .navbar-brand {
  font-weight: bold;
  font-size: 1.5rem;
}

.navbar a {
  color: var(--text);
}

.fa-bars {
  font-size: 1.5rem;
  color: #787878;
}

.navbar__extra-info {
  display: none;
  margin-top: 3rem;
  position: absolute;
  text-align: start;
  background-color: #fff;
  font-size: 0.9rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.navbar__btn-container:hover .navbar__extra-info {
  display: block;
}

.search-btn {
  background: var(--text);
  border: 1px solod var(--text);
  color: #fff;
  border: none;
  font-size: 1.5rem;
}

@media (max-width: 992px) {
  .search-bar__container {
    width: 50% !important;
    margin-right: 0.5rem;
  }
}
</style>
