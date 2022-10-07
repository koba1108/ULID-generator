import {defineNuxtPlugin} from "#app";
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
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
