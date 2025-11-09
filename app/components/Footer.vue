<template>
  <footer
    class="bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300 py-10 transition-colors duration-300"
  >
    <div
      class="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
    >
      <!-- Brand Section -->
      <div>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          <Icon name="uil:shop" size="20" class="text-red-500"" /> Shopiverse
        </h2>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Your universe for shopping — discover quality products at great
          prices.
        </p>
        <div class="flex space-x-4">
          <a
            href="#"
            aria-label="Facebook"
            class="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            class="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            class="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
          >
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      <!-- Shop Links -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          Shop
        </h3>
        <ul class="space-y-2 text-sm grid grid-cols-2 md:grid-cols-1">
          <li>
            <a
              href="#"
              class="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
              >Men</a
            >
          </li>
          <li>
            <a
              href="#"
              class="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
              >Women</a
            >
          </li>
          <li>
            <a
              href="#"
              class="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
              >Kids</a
            >
          </li>
          <li>
            <a
              href="#"
              class="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
              >Accessories</a
            >
          </li>
        </ul>
      </div>

      <!-- Support Links -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          Support
        </h3>
        <ul class="space-y-2 text-sm grid grid-cols-2 md:grid-cols-1">
          <li>
            <a
              href="#"
              class="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
              >Contact Us</a
            >
          </li>
          <li>
            <a
              href="#"
              class="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
              >FAQs</a
            >
          </li>
          <li>
            <a
              href="#"
              class="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
              >Shipping & Returns</a
            >
          </li>
          <li>
            <a
              href="#"
              class="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
              >Privacy Policy</a
            >
          </li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          Stay Connected
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Subscribe to get the latest deals and updates.
        </p>
        <form @submit.prevent="subscribe">
          <div class="flex">
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              class="w-full flex-1 px-1 py-2 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 rounded-l focus:outline-none focus:ring-2 focus:ring-rose-500"
              required
            />
            <button
              type="submit"
              class="bg-rose-600 hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-400 px-4 py-2 rounded-r text-white font-semibold transition-colors"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div
      class="border-t border-gray-200 dark:border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500 dark:text-gray-400"
    >
      © {{ new Date().getFullYear() }} Shopiverse. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");

function subscribe() {
  if (!email.value) return;
  alert(`Thanks for subscribing, ${email.value}!`);
  email.value = "";
}
</script>

<style scoped>
footer i {
  font-size: 1.2rem;
}
</style>
