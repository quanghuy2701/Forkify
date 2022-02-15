<template>
  <div
    id="search-bar"
    class="col-lg-7 col-sm-8 d-lg-flex justify-content-center"
  >
    <div
      class="search-bar__container d-flex justify-content-between w-50 h-100 rounded shadow"
    >
      <input
        style="min-height: 100%"
        class="form-control border-0 h-100 rounded-left"
        type="search"
        placeholder="Search"
        v-model="searchKeyword"
        aria-label="Search"
      />
      <button @click="handleSearch" class="px-2 rounded-right">
        <i class="fas fa-search mb-3"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      searchKeyword: "",
    };
  },
  name: "SearchBar",
  components: {},
  methods: {
    handleSearch() {
      this.$router.push({
        name: "SearchResult",
        params: { search: this.searchKeyword },
      });
    },
  },
};
</script>

<style>
#search-bar {
  height: 8%;
}

.search-bar__container {
  height: 100%;
  background: #fff;
}

.search-bar__container button {
  background: var(--text);
  border: 1px solod var(--text);
  color: #fff;
  border: none;
  font-size: 1.5rem;
}

.search-bar__container input {
  width: 95%;
}
</style>
