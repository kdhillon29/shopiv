<template>
  <div>
    <form class="flex mt-6 p-3 items-center max-w-sm mx-auto">
      <label for="simple-search" class="sr-only">Search</label>
      <div class="relative w-full">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
            />
          </svg>
        </div>
        <input
          v-model="searchInput"
          type="text"
          id="simple-search"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for any product..."
          required
        />
      </div>
      <button
        @click.prevent="execute"
        class="bg-orange-400 flex justify-center items-center gap-2 ml-3 p-2 px-4 rounded-full"
      >
        <Icon name="uil:search" size="16" class="text-white" />
        Search
      </button>
    </form>
    <p v-if="pending" class="text-center dark:text-white animate-bounce">
      Searching...
    </p>
    <br /><br />

    <div class="grid grid-cols-4 gap-4">
      <div v-if="searchResults && searchInput" v-for="product in searchResults">
        <Product :product="product" />
      </div>
      <div v-if="pending" v-for="loader in Array(1, 2, 3, 4, 5)">
        <ProductLoader key="loader" />
      </div>
      <p
        v-if="noProduct"
        class="flex w-screen justify-center items-center text-red-600 font-semibold"
      >
        No Products Found!Please Modify Search
      </p>
    </div>
  </div>
</template>

<script setup>
const searchInput = useState(() => null);
const searchResults = useState(() => null);
const noProduct = computed(() => {
  return (
    searchInput.value && searchResults.value && searchResults.value.length === 0
  );
});
const { data, error, pending, execute } = await useFetch(
  "/api/products/search/query",
  {
    //   immediate: false,
    query: {
      input: searchInput,
    },
    watch: [searchInput],
    transform: (data) => {
      searchResults.value = data;
    },
  }
);

console.log("Search Results:", data);
console.log("Search Input error:", error);
</script>
