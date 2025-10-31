<template>
  <div>
    <Loading v-if="pending" />
    <SingleProduct v-else :product="product" />
  </div>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;
const { data: product, pending } = await useFetch(
  () => {
    return `/api/products/find-product-by-id/${id}`;
  },
  {
    lazy: true,
  }
);
</script>
