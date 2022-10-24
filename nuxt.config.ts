import {firebaseConfig} from "./config";
import {defineNuxtConfig} from 'nuxt/config'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'ULID Generator',
      meta: [
        { name: 'description', content: 'Convert between ULID and datetime.' }
      ],
    }
  },
  buildModules: ["@nuxtjs/tailwindcss"],
  css: [],
  runtimeConfig: {
    public: {
      firebaseConfig: {...firebaseConfig}
    },
  },
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
