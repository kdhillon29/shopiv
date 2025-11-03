<template>
  <div
    v-if="pending"
    class="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 px-2"
  >
    <div v-for="loader in Array(1, 2, 3, 4, 5, 6, 7, 8)">
      <ProductLoader :key="loader" />
    </div>
  </div>
  <div
    class="w-full grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 px-2 py-4 md:px-6"
  >
    <div v-if="products" v-for="product in products">
      <Product :product="product" />
    </div>
  </div>
</template>

<script setup>
//don't use await on client fetch
const { data: products, pending } = useFetch("/api/products", {
  server: false,
});
console.log("products fetched:", products);
</script>
