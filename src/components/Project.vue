<template>
  <div v-for="key in translationKeys" :key="key">
    <div class="flex justify-center">
      <template v-if="key.includes('title')">
        <h1 class="text-3xl font-bold text-center">{{ $t(key) }}</h1>
      </template>
      <template v-else-if="key.includes('idea')">
        <h2 class="text-2xl text-left"> <strong>Idea: </strong>{{ $t(key) }}</h2>
      </template>
      <template v-else-if="key.includes('paragraph')">
       <p class="text-xl">
         {{ $t(key) }} 
       </p>
      </template>
      <template v-else-if="key.includes('date')">
       <span class="rounded-2xl font-bold bg-yellow-200 py-1 px-2 ml-0 mr-auto mt-2">
          DATE: 
         {{ $t(key) }} 
       </span>
      </template>
      <template v-else-if="key.includes('image')">
        <img class="my-4 border-2 border-dashed" :src="'/showcase'+$t(key)" width="600" />
      </template>
      <template v-else-if="key.includes('keywords')">
        <div class="flex gap-2 items-center mr-0 ml-auto pr-4">
          <span v-for="keyword in $t(key).split('/')" :key="keyword" class="rounded-2xl bg-purple-400 text-white py-1 px-2 mt-1">
            {{ keyword }}
          </span>
        </div>
      </template>
      <template v-else-if="key.includes('source')">
        <div class="flex gap-2 items-center mr-0 ml-auto pr-4 mt-1">
                  <span
          v-for="(source, index) in $t(key).split('/break/')"
          :key="index"
        >
        <!-- github -->
        <template v-if="index == 0 && source != 'github'"> 
          <a :href="source" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 30 30">
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              </a>
            </template>
            <!-- youtube -->
            <template v-else-if="index == 1 && source != 'youtube'">
              <a :href="source" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 30 30">
                <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
              </svg>
              </a>
            </template>
            <!-- deploy-->
             <template v-else-if="index == 2 && source !='deploy'">
              <a :href="source" target="_blank" rel="noopener noreferrer">
              <svg fill="#000000" width="40" height="40" viewBox="0 -32 576 576" xmlns="http://www.w3.org/2000/svg" ><title>web</title><path d="M288 32Q350 32 402 63 453 93 483 145 512 196 512 256 512 318 482 370 451 421 400 451 348 480 288 480 226 480 175 450 123 419 94 368 64 316 64 256 64 194 95 143 125 91 177 62 228 32 288 32ZM272 83Q235 95 218 151 245 158 272 160L272 83ZM304 160Q331 158 358 151 341 95 304 83L304 160ZM367 98Q380 118 387 141 403 133 411 128 392 111 367 98ZM189 141Q197 117 209 98 185 110 166 129L189 141ZM463 240Q460 193 432 153 412 166 396 172 403 205 404 240L463 240ZM180 172Q165 166 145 153 118 191 113 240L172 240Q173 205 180 172ZM272 192Q238 189 210 182 205 208 204 240L272 240 272 192ZM372 240Q371 208 366 182 338 189 304 192L304 240 372 240ZM113 272Q118 321 145 359 159 349 180 340 173 307 172 272L113 272ZM204 272Q205 304 210 330 238 323 272 320L272 272 204 272ZM304 320Q338 323 366 330 371 304 372 272L304 272 304 320ZM396 340Q411 346 431 359 458 321 463 272L404 272Q403 307 396 340ZM304 429Q341 417 358 361 331 354 304 352L304 429ZM272 352Q245 354 218 361 235 417 272 429L272 352ZM189 371Q176 376 166 383 185 401 208 413 195 391 189 371ZM387 371Q380 394 367 413 390 403 410 383L387 371Z" /></svg>
              </a>
            </template>

          </span>
        </div>
        </template>

      <template v-else>
        <strong>{{ key }}:</strong> {{ $t(key) }}
      </template>
    </div>
  </div>


  <iframe
      class="mt-4 mx-auto w-60 h-48 lg:w-96 lg:h-80 2xl:w-3xl 2xl:h-96"
      v-if="getEmbedUrl( $t('source').split('/break/')[1])"
      :src="getEmbedUrl( $t('source').split('/break/')[1])"
      frameborder="0"
      allowfullscreen
    ></iframe>

</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { loadPageLocale } from '../i18n'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const route = useRoute()
const projectName = route.params.name

onMounted(() => {
  loadPageLocale(route.name,projectName) // 👈 load this page's i18n
})

const { messages, locale, t } = useI18n()

// Get keys for the current locale
const translationKeys = computed(() => Object.keys(messages.value[locale.value] || {}))

const getEmbedUrl = (url) => {
  if (!url || typeof url !== 'string') return null
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  )
  return match ? `https://www.youtube.com/embed/${match[1]}` : null
}
</script>