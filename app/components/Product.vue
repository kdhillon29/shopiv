<template>
  <div :id="`product${product.id}`">
    <div
      class="relative flex flex-col gap-6 h-[480px] max-w-md bg-slate-100 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="w-full h-[40%]">
        <NuxtLink :to="`/product-${product.id}`">
          <NuxtImg
            format="avif,webp"
            class="w-full max-h-56 object-cover shadow-md rounded-t-lg"
            :src="`${product.image}`"
            alt="product image"
          />
        </NuxtLink>
        <!-- <div class="px-2"> -->
      </div>
      <div class="mt-3 px-2 h-2/3">
        <NuxtLink :to="`product-${product.id}`">
          <h5
            class="text-sm md:text-xl mt-2 font-semibold truncate tracking-tight text-gray-700 dark:text-white"
          >
            {{ product.title }}
          </h5>
        </NuxtLink>
        <NuxtLink :to="`product-${product.id}`">
          <p
            class="mt-4 px-1 text-gray-500 dark:text-gray-400 text-sm line-clamp-3"
          >
            {{ product.description }}
          </p>
        </NuxtLink>
        <!-- <div class="flex items-center my-3 dark:text-gray-400">
          <h5 class="tex-xs">Rating:</h5>
          <span class="text-sm md:text-md font-semibold px-2.5 rounded">{{
            rating
          }}</span>
        </div> -->
        <div class="mt-3 w-full flex justify-between items-center">
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
          <div class="flex justify-center items-center">
            <div
              v-for="rate in Array.from({ length: Number(rating) }, () =>
                Math.floor(Math.random() * 100)
              )"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
            <span class="ml-1 text-gray-600"> ({{ rating }}) </span>
          </div>
        </div>

        <button
          @click="addToCart(product)"
          class="flex mt-3 md:mt-6 items-center justify-center gap-3 text-white bg-rose-600 dark:bg-green-600 hover:bg-orange-500 dark:hover:bg-green-500 mb-1 w-[90%] mx-auto px-2 py-3 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm"
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
const rating = ref(0);
const alreadyInCart = (cartState, productToCheck) => {
  return cartState.some((productInCart) => {
    return productInCart.id === productToCheck.id;
  });
};

const getRandomRating = () => {
  return (Math.floor(Math.random() * 4) + 1).toFixed(1);
};
onMounted(() => {
  rating.value = getRandomRating();
});

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
