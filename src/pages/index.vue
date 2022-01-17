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
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8 justify-items-center pt-16">
        <router-link v-for="project of store.all" :key="project.id" :to="`/projects/${project.id}`" class="bg-white shadow-2xl group relative rounded-md overflow-hidden w-full">
          <img class="w-full h-100 object-cover" :src="project?.media?.[0]?.url" :alt="project.title" :title="project.title">
          <div class="bg-black text-white bg-opacity-70 absolute inset-0 h-full w-full flex justify-center items-center duration-200 opacity-0 group-hover:(opacity-100)">
            <h1 class="text-4xl font-bold">
              {{ project.title }}
            </h1>
          </div>
        </router-link>
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
