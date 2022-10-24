<script lang="ts" setup>
import {ref} from "vue";
import {useUlidStore, UlidWithTimestamp} from "./composables";
import {useRuntimeConfig} from "nuxt/app";

const {state, currentUlid, add, clear} = useUlidStore()
const initial = ref<UlidWithTimestamp>(currentUlid())
const setCurrentUlid = () => {
  initial.value = currentUlid()
}

const {deployVersion} = useRuntimeConfig()
</script>

<template>
  <div class="mt-12 flex flex-col justify-center items-center">
    <h1 class="text-6xl">ULID Generator</h1>
    <p class="mt-4">
      Convert between ULID and datetime.<br/>
      <s>Enter either the ULID or the date and time.</s> (coming soon)
    </p>

    <div class="flex flex-col justify-center items-center w-full mt-8">
      <div class="flex items-center w-10/12">
        <label class="w-4/12 text-center mt-4 text-2xl text-gray-700">ULID</label>
        <input
            class="w-8/12 text-center border-2 border-gray-300 p-2 rounded-md"
            type="text"
            readonly
            v-model="initial.ulid"
        />
      </div>
      <div class="flex items-center mt-4 w-10/12 text-center">
        <label class="w-4/12 text-2xl text-gray-700">Datetime</label>
        <input
            type="text"
            class="w-8/12 text-center border-2 border-gray-300 p-2 rounded-md"
            v-model="initial.datetime"
        />
      </div>
      <div class="flex items-center mt-4 w-10/12 text-center">
        <label class="w-4/12 text-2xl text-gray-700">Unixtime</label>
        <input
            type="text"
            class="w-8/12 text-center border-2 border-gray-300 p-2 rounded-md"
            v-model="initial.unixtime"
        />
      </div>
      <div class="mt-8 flex flex-row justify-center items-center w-full">
        <button class="p-2 mr-4 rounded-md border-2" @click="setCurrentUlid">CurrentTime</button>
        <button class="p-2 mr-4 rounded-md border-2" @click="add(1)">Add</button>
        <button class="p-2 mr-4 rounded-md border-2" @click="add(10)">Add 10 Items</button>
        <button class="p-2 mr-4 rounded-md border-2" @click="clear">Clear</button>
      </div>

      <div class="m-10 w-10/12 border-2"/>

      <div v-if="state.ulidList.length > 0" class="flex flex-col justify-center items-center w-8/12">
        <h3 class="text-4xl mb-4">Generated</h3>
        <table class="min-w-full">
          <thead class="border-b">
          <tr>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Ulid
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Datetime
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Unixtime
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in state.ulidList" class="border-b transition duration-300 ease-in-out hover:bg-gray-100">
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {{ item.ulid }}
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {{ item.datetime }}
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {{ item.unixtime }}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div>- app ver: {{ deployVersion }} -</div>
  </div>
</template>
