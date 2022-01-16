<template>
  <div class="">
    <Hero />
    <Services />
    <SectionBlock caption="Portfolio" title="My Works">
      <div class="flex justify-center text-lg gap-6 mt-16">
        <button
          v-for="(tab, i) in tabs" :key="i" class="rounded-full py-2.5 w-30 duration-150 capitalize"
          :class="activeItem === i ? 'bg-app-light-blue text-white' : 'text-gray-400 hover:(bg-app-light-blue text-white bg-opacity-75)'"
          @click="activeItem = i"
        >
          {{ tab }}
        </button>
      </div>
      <div class="grid grid-cols-2 gap-x-4 gap-y-8 justify-items-center pt-16">
        <div v-for="project of store.all" :key="project.id">
          items
        </div>
      </div>
    </SectionBlock>
  </div>
</template>

<script lang="ts" setup>
import { useProjectStore } from '~/stores/projects'
const store = useProjectStore()
// import {  } from 'pinia'
const activeItem = ref(1)
const tabs = [
  'all',
  'websites',
  'design',
  'mobile apps',
]
</script>
