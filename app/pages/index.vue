<template>
  <div
    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-2 py-4 md:px-6"
  >
    <div v-if="products" v-for="product in products">
      <Product :product="product" />
    </div>
  </div>
</template>

<script setup>
const { data: products } = await useFetch("/api/products");
console.log("products fetched:", products);
</script>
