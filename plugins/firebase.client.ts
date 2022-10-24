import { defineNuxtPlugin, useRuntimeConfig } from "nuxt/app"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default defineNuxtPlugin((a) :any => {
  const { firebaseConfig } = useRuntimeConfig();
  const firebaseApp = initializeApp(firebaseConfig);
  const analytics = getAnalytics(firebaseApp);
  return {
    app: firebaseApp,
    analytics,
  };
});
