<template>
  <div class="flex flex-col min-h-screen bg-white dark:bg-gray-800">
    <!-- <ThemeToggle /> -->
    <Header />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
const cart = useCart();

onMounted(() => {
  const localCart = JSON.parse(localStorage.getItem("cart"));
  if (localCart) cart.value = localCart;
});
</script>
