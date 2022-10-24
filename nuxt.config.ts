import {defineNuxtConfig} from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  app: {
    head: {
      title: 'ULID Generator',
      meta: [
        {name: 'description', content: 'Convert between ULID and datetime.'}
      ],
    }
  },
  buildModules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      firebaseConfig: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DATABASE_URL,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
        measurementId: process.env.FIREBASE_MEASUREMENT_ID,
      }
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
