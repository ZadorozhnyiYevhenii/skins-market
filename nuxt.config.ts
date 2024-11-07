// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "nuxt-svgo", "@nuxt/image"],
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
  svgo: {
    autoImportPath: "~/assets/icons/",
  },
  image: {
    dir: "assets/images",
  },
});
