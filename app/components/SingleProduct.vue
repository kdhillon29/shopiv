<template>
  <div class="max-w-3xl w-full flex justify-center mx-auto my-1 p-6">
    <div
      class="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl"
    >
      <div class="relative">
        <div
          class="absolute inset-0 bg-gradient-to-bl from-rose-600 to-indigo-600 opacity-75"
        ></div>
        <NuxtPicture
          :src="`${product.image}`"
          alt="Product Image"
          class="w-full h-64 object-cover object-center relative z-10"
        />
        <div
          class="absolute top-4 right-4 bg-gray-100 text-xs font-bold px-3 py-2 rounded-full z-20 transform rotate-12"
        >
          NEW
        </div>
      </div>
      <div class="p-6">
        <h2 class="text-3xl font-extrabold text-gray-800 mb-2">
          {{ product.title }}
        </h2>
        <strong class="mt-4 p-1">Description:</strong>
        <p
          class="text-gray-600 tex-xs md:text-sm mb-4 tracking-wide leading-6 py-2"
        >
          ${{ product.description }}
        </p>
        <div class="flex items-center justify-between mb-4">
          <span class="text-2xl font-bold text-indigo-600"
            >${{ product.price }}</span
          >
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <span class="ml-1 text-gray-600">
              {{ getRandomRating() }} (120 reviews)</span
            >
          </div>
        </div>
        <button
          class="w-full flex justify-center gap-3 bg-orange-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-orangr-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          @click="addToCart(product)"
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
defineProps(["product"]);

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
    cart.value.push(product);
  } else {
    alert("Log in to start adding products to cart");
  }
};
</script>
