// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
      '@nuxtjs/supabase',
      '@pinia/nuxt',
      '@pinia-plugin-persistedstate/nuxt',
    ],
    pinia: {
      autoImports: [
        // automatically imports `defineStore`
        'defineStore', // import { defineStore } from 'pinia'
        ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
      ],
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    css: [
        '@/assets/css/main.css',
    ],
    routeRules: {
      '/account/*': {
        ssr: false,
      }
    },
    supabase: {
      redirect: false,
    }
})
