<template>
  <div class="w-full">
    <!-- <Loading v-if="pending" /> -->
    <!-- <ProductLoader v-if="pending" /> -->
    <SingleProduct v-if="product" :product="product" />
    <ProductLoader v-if="pending" />
  </div>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;
const productId = useState(() => {});
// onMounted(() => (productId.value = id));
const { data: product, pending } = await useFetch(
  () => {
    return `/api/products/find-product-by-id/${id}`;
  },
  {
    server: false,
    lazy: true,
    // watch: [productId],
  }
);
</script>
