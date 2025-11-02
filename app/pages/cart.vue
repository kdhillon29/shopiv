<template>
  <div>
    <div
      class="relative md:mt-12 w-full flex flex-col md:flex-row justify-between items-center gap-6 overflow-x-auto space-y-6 px-3 md:px-6"
    >
      <table
        class="w-1/2 flex-1 mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 py-6"
      >
        <thead
          class="text-xs mx-auto text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Product name</th>
            <th scope="col" class="px-6 py-3">Price</th>
            <th scope="col" class="px-6 py-3">Category</th>
            <th scope="col" class="px-6 py-3">Image</th>
            <th scope="col" class="px-6 py-3">quantity</th>
            <th scope="col" class="px-6 py-3">Item Total</th>
            <th scope="col" class="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody v-if="cart.length" v-for="product in cart">
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <NuxtLink :to="`product-${product.item.id}`">
                {{ product.item.title.substring(0, 20) }}
              </NuxtLink>
            </th>
            <td class="px-6 py-4">
              {{ product.item.price }}
            </td>
            <td class="px-6 py-4">
              {{ product.item.category }}
            </td>
            <td class="px-6 py-4">
              <img width="50px" :src="product.item.image" alt="product image" />
            </td>
            <td class="px-6 py-4">
              <div class="flex justify-between">
                {{ product.quantity }}
                <Icon
                  @click="updateQuantity(product, 'minus')"
                  name="uil:minus"
                  size="20"
                  class="text-red-600 font-bold ring-2 ring-purple-300 p-2 dark:bg-gray-600 rounded-full"
                />
                <Icon
                  @click="updateQuantity(product)"
                  name="uil:plus"
                  size="20"
                  class="text-green-600 font-bold ring-2 ring-gray-800 dark:bg-gray-600 rounded-full"
                />
              </div>
            </td>
            <td class="px-6 py-4 font-semibold dark:text-white">
              ${{ (product.quantity * product.item.price).toFixed(2) }}
            </td>
            <td class="px-6 py-4">
              <button @click="removeFromCart(product)">
                <Icon name="fa:remove" size="25" color="red" />
              </button>
            </td>
          </tr>
        </tbody>
        <tbody v-else class="text-white text-xl text-center mx-auto">
          Your Card is Empty
        </tbody>
      </table>

      <!-- <br /><br /> -->

      <div
        v-if="cart.length"
        class="w-1/2 shadow-md max-w-sm px-6 py-3 bg-white border border-gray-200 rounded-lg dark:bg-gray-600 dark:border-gray-700"
      >
        <div class="flex justify-between">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Total
          </h5>
          <span class="mb-3 font-bold text-gray-700 dark:text-gray-400">
            ${{ calcTotalCart() }}
          </span>
        </div>
        <div class="flex justify-between">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Tax:
          </h5>
          <span class="mb-3 font-bold text-gray-700 dark:text-gray-400">
            ${{ (calcTotalCart() * 0.12).toFixed(2) }}
          </span>
        </div>
        <div class="flex justify-between">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Shippping
          </h5>
          <span class="mb-3 font-bold text-gray-700 dark:text-gray-400">
            {{ calcTotalCart() > 100 ? "Free" : "$10" }}
          </span>
        </div>
        <div class="flex justify-center items-center gap-3">
          <button
            @click="navigateToCheckout"
            class="inline-flex items-center ml-3 mt-2 px-3 py-2 text-sm font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
          >
            Checkout
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
          <NuxtLink
            to="/"
            class="inline-flex items-center ml-2 mt-2 px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
          >
            <Icon name="uil:cart" size="20" class="text-white-400" />
            Continue Shop
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cart = useCart();
const calcTotalCart = () => {
  let total = 0;
  cart.value.forEach((product) => {
    total += product.quantity * parseFloat(product.item.price);
  });

  return total.toFixed(2);
};
const updateQuantity = (product, type) => {
  console.log("update", product);
  cart.value.forEach((cartItem) => {
    if (cartItem.item.id == product.item.id) {
      console.log("update id");
      if (type == "minus") {
        if (cartItem.quantity > 1) cartItem.quantity--;
        return;
      }
      cartItem.quantity++;
    }
  });
};

const removeFromCart = (product) => {
  const productIndex = cart.value.findIndex((item) => item.id === product.id);
  cart.value.splice(productIndex, 1);
  localStorage.setItem("cart", JSON.stringify(cart.value));
};

const navigateToCheckout = async () => {
  if (!cart.value.length) {
    alert("Cart is empty");
    return;
  }

  await navigateTo("/checkout");
};
</script>
