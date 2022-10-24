import {useNuxtApp, useState} from "nuxt/app";
import {readonly} from "@vue/reactivity";
import {ulid, decodeTime} from 'ulid'

export interface UlidWithTimestamp {
  ulid: string;
  unixtime: number;
  datetime: string;
}

type UlidState = {
  ulidList: UlidWithTimestamp[];
}

const __stateKey__ = 'ulidState'

export const useUlidStore = () => {
  const { $dayjs } = useNuxtApp();
  const state = useState<UlidState>(__stateKey__, () => ({
    ulidList: [],
  }));

  const newUlidWithTimestamp = (id: string) :UlidWithTimestamp => {
    return {
      ulid: id,
      unixtime: Math.floor(decodeTime(id) / 1000),
      datetime: $dayjs(decodeTime(id)).format('YYYY-MM-DD HH:mm:ss'),
    }
  }

  return {
    state: readonly(state),
    currentUlid(): UlidWithTimestamp {
      return newUlidWithTimestamp(ulid())
    },
    add(length = 1) {
      for (let i = 0; i < length; i++) {
        state.value.ulidList.push(newUlidWithTimestamp(ulid()));
      }
    },
    clear() {
      state.value.ulidList = [];
    },
  }
}
