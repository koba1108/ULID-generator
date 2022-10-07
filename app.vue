<script lang="ts" setup>
import {useNuxtApp} from "#app";
import {ulid, decodeTime} from 'ulid'
import {Ref, ref, watch} from "vue";

const { $dayjs } = useNuxtApp();
const _ulid: Ref<string> = ref('')
const _ulidList: Ref<string[]> = ref([])
const _datetime: Ref<string> = ref('')

const createULID = () => {
  _ulidList.value.push(ulid($dayjs(_datetime.value).unix()))
}

const getCurrentUnixTime = () :number => {
  return $dayjs().unix()
}

const setCurrentTime = () => {
  const now = getCurrentUnixTime()
  _ulid.value = ulid(now)
  _datetime.value = $dayjs.unix(now).format('YYYY-MM-DD HH:mm:ss')
}

const setUlidList = () => {
  for (let i = 0; i < 10; i++) {
    const now = new Date()
    const ts = Math.floor(now.getTime() / 1000)
    _ulidList.value.push(ulid(ts))
  }
}

const clearUlidList = () => {
  _ulidList.value = []
}
setCurrentTime()
</script>

<template>
  <div class="mt-12 flex flex-col justify-center items-center">
    <h1 class="text-6xl">ULID Generator</h1>
    <p class="mt-4">
      Convert between ULID and datetime.<br/>
      Enter either the ULID or the date and time.
    </p>

    <div class="flex flex-col justify-center items-center w-full mt-8">
      <div class="flex items-center w-10/12">
        <label class="w-4/12 text-center mt-4 text-2xl text-gray-700">ULID</label>
        <input
            class="w-8/12 text-center border-2 border-gray-300 p-2 rounded-md"
            type="text"
            readonly
            v-model="_ulid"
        />
      </div>
      <div class="flex items-center mt-4 w-10/12 text-center">
        <label class="w-4/12 text-2xl text-gray-700">Datetime</label>
        <input
            type="text"
            class="w-8/12 text-center border-2 border-gray-300 p-2 rounded-md"
            v-model="_datetime"
        />
      </div>
      <div class="mt-8 flex flex-row justify-center items-center w-full">
        <button class="p-2 mr-4 rounded-md border-2" @click="setCurrentTime">CurrentTime</button>
        <button class="p-2 mr-4 rounded-md border-2" @click="createULID">Create</button>
        <button class="p-2 mr-4 rounded-md border-2" @click="setUlidList">New 10 ULID</button>
        <button class="p-2 mr-4 rounded-md border-2" @click="clearUlidList">Clear</button>
      </div>

      <div class="m-10 w-10/12 border-2" />

      <div class="flex flex-col justify-center items-center w-full">
        <h3 class="text-4xl">Generated</h3>
        <ul class="mt-4 overflow-scroll">
          <li class="p-2 border border-gray-200" v-for="id in _ulidList">{{ id }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
