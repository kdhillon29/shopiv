<template>
  <div
    :id="`product${product.id}`"
    :class="{ 'w-full flex justify-center': isSingle }"
  >
    <div
      class="relative flex flex-col gap-2 px-1 h-[30rem] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      :class="{ 'h-auto w-full': isSingle }"
    >
      <NuxtLink :to="`product-${product.id}`">
        <NuxtPicture
          class="w-full aspect-[3/2] object-cover shadow-sm rounded-t-lg"
          :src="`${product.image}`"
          alt="product image"
        />
      </NuxtLink>
      <!-- <div class="px-2"> -->
      <NuxtLink :to="`product-${product.id}`">
        <h5
          class="text-sm mt-3 md:text-md text-center font-semibold truncate tracking-tight text-gray-700 dark:text-white"
        >
          {{ product.title }}
        </h5>
      </NuxtLink>
      <NuxtLink :to="`product-${product.id}`">
        <p
          class="mt-3 text-gray-500 dark:text-gray-400 text-sm line-clamp-2"
          :class="{ isSingle: isSingle }"
        >
          {{ product.description }}
        </p>
      </NuxtLink>
      <div class="flex items-center my-3 pl-3 dark:text-gray-400">
        <h5 class="">Rating:</h5>
        <span class="text-xs font-semibold px-2.5 py-0.5 rounded">{{
          getRandomRating()
        }}</span>
      </div>
      <div class="flex items-center justify-start gap-3 pl-3 my-3">
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
        class="flex items-center justify-center gap-3 text-white bg-orange-400 dark:bg-green-600 hover:bg-orange-500 mt-auto mb-3 w-[80%] mx-auto px-2 py-3 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm"
      >
        <Icon name="uil:cart" size="20" class="text-white font-semibold" />

        <span v-if="alreadyInCart(cart, product) && user">Item Added</span>
        <span v-else>Add to Cart</span>
      </button>
    </div>
    <!-- </div> -->
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
.isSingle {
  @apply line-clamp-none w-full text-center;
}
</style>
