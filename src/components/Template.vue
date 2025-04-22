<template>
  <div>
    <h1>{{ $t('title') }}</h1>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { loadPageLocale } from '../i18n'

const route = useRoute()

onMounted(() => {
  loadPageLocale(route.name) // 👈 load this page's i18n
})
</script>