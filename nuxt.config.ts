// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
  ],
  css: ["~/assets/base.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import '@/assets/resources/index.scss';`,
        },
      },
    },
  },
});
