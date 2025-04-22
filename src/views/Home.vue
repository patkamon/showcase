<script setup>
import Template from '../components/Template.vue'
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

// Import all translation files
const files = import.meta.glob('@/i18n/projects/*.js', { eager: true });

// Dynamically generate card data from files
const { locale } = useI18n();

const cards = computed(() => {
  return Object.entries(files).map(([path, mod], index) => {
    const data = mod.default?.[locale.value];
    return {
      name: path.split('/').pop().split('.')[0],
      title: data?.title ?? '[no title]',
      idea: data?.idea ?? '[no idea]',
      image: "/showcase" +data?.image_2
    };
  });
});
  </script>

<template>
 <div class="bg-gray-300/90 px-4 pt-4 pb-12 border-dashed border-2">
  <Template />

  <div class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6 p-4">
    <router-link :to="'/projects/'+card.name"  v-for="(card, idx) in cards"
      :key="idx"
      class="bg-white shadow rounded-xl p-4 flex flex-col items-center 2xl:max-h-96 max-h-80">
      <img
      :src="card.image"
      alt="Project image"
      class="w-full object-cover rounded-md mb-4 h-24 2xl:h-36"
      />
      <h3 class="text-xl font-semibold mb-2 text-center">{{ card.title }}</h3>
      <p class="text-gray-600 text-sm text-center overflow-auto">{{ card.idea }}</p>
    </router-link>
  </div>

  </div>

  
  </template>