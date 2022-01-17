<template>
  <SectionBlock
    id="works"
    v-observe-visibility="{
      callback: setActiveRoute,
      intersection: {
        threshold: 0.2,
      },
    }"
    caption="Portfolio"
    title="My Works"
  >
    <div class="flex justify-center text-lg gap-6 mt-16">
      <button
        v-for="tab in tabs"
        :key="tab"
        class="rounded-full py-2.5 w-30 duration-150 capitalize"
        :class="activeItem === tab ? 'bg-app-light-blue text-white' : 'text-gray-400 hover:(bg-app-light-blue text-white bg-opacity-75)'"
        @click="activeItem = tab"
      >
        {{ `${tab}${tab !== 'all' ? 's' : ''}` }}
      </button>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8 justify-items-center pt-16">
      <router-link
        v-for="project of all"
        :key="project.id"
        :to="`/projects/${project.id}`"
        class="bg-white shadow-2xl group relative rounded-md overflow-hidden w-full"
      >
        <img
          v-lazy="{src: project?.media?.[0]?.url}"
          class="w-full h-100 object-cover"
          :alt="project.title"
          :title="project.title"
        >
        <div
          class="bg-black text-white bg-opacity-70 absolute inset-0 h-full w-full flex justify-center items-center duration-200 opacity-0 group-hover:(opacity-100)"
        >
          <h1 class="text-4xl font-bold">
            {{ project.title }}
          </h1>
        </div>
      </router-link>
    </div>
  </SectionBlock>
</template>
<script lang="ts" setup>
import { useProjectStore } from '~/stores/projects'
import { useActiveRoute } from '~/composables/useActiveRoute'
const { setActiveRoute } = useActiveRoute('works')
const { all } = useProjectStore()
type Tab = 'all' | 'website' | 'email' | 'design' | 'package'
const activeItem = ref<Tab>('all')
const tabs: Tab[] = [
  'all',
  'website',
  'email',
  'design',
  'package',
]
</script>
