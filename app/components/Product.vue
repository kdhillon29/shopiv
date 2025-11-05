<template>
  <div :id="`product${product.id}`">
    <div
      class="relative flex flex-col gap-6 h-[480px] max-w-md bg-slate-100 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="w-full h-[40%]">
        <NuxtLink :to="`/product-${product.id}`">
          <NuxtPicture
            format="avif,webp"
            class="w-full object-contain shadow-md rounded-t-lg"
            :src="`${product.image}`"
            alt="product image"
          />
        </NuxtLink>
        <!-- <div class="px-2"> -->
      </div>
      <div class="px-2 h-2/3">
        <NuxtLink :to="`product-${product.id}`">
          <h5
            class="text-sm mt-1 md:text-sm font-semibold truncate tracking-tight text-gray-700 dark:text-white"
          >
            {{ product.title }}
          </h5>
        </NuxtLink>
        <NuxtLink :to="`product-${product.id}`">
          <p
            class="mt-2 px-1 text-gray-500 dark:text-gray-400 text-sm line-clamp-2"
          >
            {{ product.description }}
          </p>
        </NuxtLink>
        <div class="flex items-center my-3 dark:text-gray-400">
          <h5 class="tex-xs">Rating:</h5>
          <span class="text-xs font-semibold px-2.5 rounded">{{
            getRandomRating()
          }}</span>
        </div>
        <div class="flex items-center justify-start gap-2 my-2">
          <strong class="text-gray-600 dark:text-gray-200">Price:</strong>
          <span
            class="text-sm md:text-md font-semibold dark:text-white line-through"
            >${{ product.price * 2 }}</span
          >
          <span class="text-sm md:text-md font-semibold dark:text-white"
            >${{ product.price }}</span
          >

          <br />
        </div>
        <button
          @click="addToCart(product)"
          class="flex mt-6 md:mt-12 items-center justify-center gap-3 text-white bg-rose-600 dark:bg-green-600 hover:bg-orange-500 mb-1 w-[90%] mx-auto px-2 py-3 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm"
        >
          <Icon name="uil:cart" size="20" class="text-white font-semibold" />

          <span v-if="alreadyInCart(cart, product) && user">Item Added</span>
          <span v-else>Add to Cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["product", "isSingle"]);

const user = useSupabaseUser();
const cart = useCart();
const alreadyInCart = (cartState, productToCheck) => {
  return cartState.some((productInCart) => {
    return productInCart.id === productToCheck.id;
  });
};

const getRandomRating = () => {
  return (Math.floor(Math.random() * 5) + 1).toFixed(1);
};

const addToCart = (product) => {
  console.log("Adding to cart:", product);
  if (user.value) {
    const cartItem = { quantity: 1, item: product };
    cart.value.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart.value));
  } else {
    alert("Log in to start adding products to cart");
  }
};
</script>

<style scoped>
.imgClass {
  @apply w-full object-contain  rounded-t-lg;
}
</style>
