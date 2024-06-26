// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    { path: "~/shared/icons" },
    { path: "~/components" },
    { path: "~/pages" },
  ],
  modules: ["@nuxtjs/tailwindcss"],
});
