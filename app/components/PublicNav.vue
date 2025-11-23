<template>
  <div>
    <nav class="bg-slate-100 border-gray-200 dark:bg-gray-900">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <NuxtLink
          to="/"
          class="inline-flex gap-[-10px] space-x-1 rtl:space-x-reverse"
        >
          <Icon name="uil:shop" size="50" class="text-red-400" />

          <span
            class="hidden md:inline-flex self-center md:text-3xl text-orange-600 font-bold whitespace-nowrap dark:text-white"
            >Shopiverse</span
          >
        </NuxtLink>

        <div
          class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
        >
          <div class="flex justify-center items-center rounded-full mr-6">
            <ThemeToggle />
            <!-- <NuxtLink
              v-if="user"
              to="/cart"
              class="block relative py-1 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              <Icon
                name="uil:shopping-cart"
                class="text-gray-600 dark:text-green-600"
                size="30"
              />
              <span
                v-if="cart.length"
                class="absolute top-[-2px] px-1.5 rounded-full text-white bg-rose-600 dark:bg-rose-400 right-0"
                >{{ cart.length }}</span
              >
            </NuxtLink> -->
          </div>

          <button
            type="button"
            class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="w-8 h-8 rounded-full"
              src="/images/avatar.png"
              alt="user photo"
            />
          </button>
          <!-- Dropdown menu -->
          <div
            class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div class="px-4 py-3">
              <span class="block text-sm text-gray-900 dark:text-white"
                >Hello</span
              >
              <span
                class="block text-sm text-gray-500 truncate dark:text-gray-400"
                >Welcome to Shopiverse</span
              >
            </div>
            <nav>
              <ul>
                <li v-for="item in menuItems" :key="item.label">
                  <NuxtLink
                    :to="item.to"
                    @click="item.action && item.action()"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    {{ item.label }}
                  </NuxtLink>
                </li>
              </ul>
            </nav>
            <!-- <ul class="py-2" aria-labelledby="user-menu-button">
              <li>
                <NuxtLink
                  to="/login"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Login</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/register"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Register</NuxtLink
                >
              </li>
            </ul> -->
          </div>

          <button
            data-collapse-toggle="navbar-user"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
          :class="{ hideMenu: hideMenu }"
        >
          <ul
            class="flex flex-col items-center justify-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            @click="handleMenuClick"
          >
            <li
              data-collapse-toggle="navbar-user"
              aria-controls="navbar-user"
              aria-expanded="false"
              @click="handleMenuClick"
            >
              <NuxtLink
                to="/search"
                class="block py-2 px-3 dark:text-white rounded md:bg-transparent"
                aria-current="page"
                data-collapse-toggle="navbar-user"
                aria-controls="navbar-user"
                aria-expanded="false"
                >Search</NuxtLink
              >
            </li>
            <li
              data-collapse-toggle="navbar-user"
              aria-controls="navbar-user"
              aria-expanded="false"
              @click="handleMenuClick"
            >
              <NuxtLink
                to="/sell"
                data-collapse-toggle="navbar-user"
                aria-controls="navbar-user"
                aria-expanded="false"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Sell
              </NuxtLink>
            </li>
            <li
              data-collapse-toggle="navbar-user"
              aria-controls="navbar-user"
              aria-expanded="false"
              @click="handleMenuClick"
            >
              <NuxtLink
                data-collapse-toggle="navbar-user"
                aria-controls="navbar-user"
                aria-expanded="false"
                to="/about"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >About</NuxtLink
              >
            </li>
            <li
              v-if="user"
              role="menuitem"
              data-collapse-toggle="navbar-user"
              aria-controls="navbar-user"
            >
              <NuxtLink
                to="/cart"
                class="block relative md:py-2 md:px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-700"
              >
                <Icon
                  name="uil:shopping-cart"
                  class="text-gray-700 text-sm md:text-xl dark:text-green-600"
                  size="40"
                />
                <span
                  v-if="cart.length"
                  class="absolute top-[-5px] px-1.5 rounded-full text-white bg-rose-600 dark:bg-rose-400 right-0"
                  >{{ cart.length }}</span
                >
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { watch } from "vue";
const user = useSupabaseUser();
const cart = useCart();

watch(
  () => user.value,
  (newUser) => {
    console.log("user changed in publicNav:", newUser);
  }
);
console.log("user in publicNav:", user.value);
const menuItems = computed(() => {
  if (user.value) {
    return [
      { label: "Account", to: "/Account" },
      { label: "Sell", to: "/sell" },
      { label: "Logout", to: "/logout" },
    ];
  }
  return [
    // { label: "Home", to: "/" },
    { label: "Login", to: "/login" },
    { label: "Register", to: "/register" },
  ];
});
import { initFlowbite } from "flowbite";
const hideMenu = ref();
const handleMenuClick = () => {
  console.log("menu clicked");
  hideMenu.value = true;
  setTimeout(() => (hideMenu.value = false), 500);
};

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
