import { defineNuxtPlugin } from "nuxt/app"

// @ts-ignore
import dayjs from 'dayjs';
// @ts-ignore
import timezone from 'dayjs/plugin/timezone';
// @ts-ignore
import relativeTime from 'dayjs/plugin/relativeTime';
// @ts-ignore
import localizedFormat from 'dayjs/plugin/localizedFormat';
// @ts-ignore
import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(timezone)
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.extend(updateLocale);
dayjs.tz.setDefault('Asia/Tokyo');

export default defineNuxtPlugin(() => {
  return {
    provide: {
      dayjs,
    },
  };
});
