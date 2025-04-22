<script setup>
import { loadPageLocale } from '@/i18n'
import RandomBg from '@/components/RandomBg.vue'

</script>

<template>
  <nav class="w-full fixed bg-gray-200 py-2 border-b-2 border-dashed">
    <div class="flex items-center justify-between px-2">
      <router-link to="/">
      <h2 class="px-4 font-bold text-2xl">
        Brainbow
      </h2>
    </router-link>
      <div class="flex gap-2 items-center justify-between ">
        <label>Locale</label>
        <select class="border rounded-3xl px-2" v-model="$i18n.locale"> 
          <option>en</option>
          <option>th</option>
        </select>
      </div>
    </div>
  </nav>
    <RandomBg/>
    <div class="2xl:px-96 px-12 pb-24 pt-12">
      <router-view />
    </div>

    <footer class="bg-gray-200 fixed bottom-0 right-0 flex rounded-l-2xl">
      <router-link to="/">
        <h2 class="px-4 font-bold text-2xl">
          Home
        </h2>
      </router-link>

      <router-link to="/about">
        <h2 class="px-4 font-bold text-2xl">
          About
        </h2>
      </router-link>
    </footer>
</template>

