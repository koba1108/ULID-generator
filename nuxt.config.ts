import {firebaseConfig} from "./config";
import {defineNuxtConfig} from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  app: {
    head: {
      title: 'ULID Generator',
      meta: [
        { name: 'description', content: 'Convert between ULID and datetime.' }
      ],
    }
  },
  buildModules: ["@nuxtjs/tailwindcss"],
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
