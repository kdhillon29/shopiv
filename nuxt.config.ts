// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
    "@nuxt/icon",
    "@nuxt/image",
  ],
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },
  runtimeConfig: {
    stripeSK: process.env.STRIPE_SK_KEY,
    public: {
      stripePK: process.env.STRIPE_PK_KEY,
    },
  },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false,
  },
  // ssr: false,

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "ShopiVerse",
      meta: [
        { name: "description", content: "Buy and sell things you need here" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css",
        },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js",
          defer: true,
        },
        {
          src: "https://js.stripe.com/v3",
          defer: true,
        },
      ],
    },
  },
});