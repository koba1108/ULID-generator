export default defineNuxtConfig({
  buildModules: ["@nuxtjs/tailwindcss"],
  css: [],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    server: {
      hmr: {
        overlay: false,
      },
      watch: {
        usePolling: true
      }
    }
  },
})
