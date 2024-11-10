// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/image"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  css: ["~/assets/base.scss"],
  vite: {
    plugins: [
      svgLoader({
        svgo: false,
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import '@/assets/resources/index.scss';`,
        },
      },
    },
  },
  image: {
    dir: "assets/images",
  },
});
