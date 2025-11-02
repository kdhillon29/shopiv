<template>
  <div class="flex flex-col min-h-screen bg-white dark:bg-gray-800">
    <!-- <ThemeToggle /> -->
    <main class="">
      <Header />
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
<style>
.router-link-active {
  font-weight: bold;
  color: teal;
}

.router-link-exact-active {
  /* background-color: lightgray; */
  border-bottom: 1px solid gray;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0.7;
  filter: blur(0.4rem);
}
</style>
