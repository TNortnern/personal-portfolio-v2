<template>
  <div class=" text-app-light-blue fixed w-full h-18 bottom-0 left-0 z-10 bg-app-dark-blue">
    <div class="main-container flex items-center h-full justify-between px-6">
      <component
        :is="projectIndex !== 0 ? 'router-link' : 'div'"
        :class="{
          'pointer-events-none opacity-50': projectIndex === 0
        }"
        v-bind="{
          ...(projectIndex !== 0 && { to: `/projects/${store.all[projectIndex-1].title}` })
        }"
        class="flex items-center"
      >
        <Chevron class="w-8 h-8 transform rotate-180" />
        <p>Previous{{ store.all[projectIndex-1] && `(${store.all?.[projectIndex-1].title})` }}</p>
      </component>
      <component
        :is="projectIndex !== store.all.length - 1 ? 'router-link' : 'div'"
        :class="{
          'pointer-events-none opacity-50': projectIndex === store.all.length - 1
        }"
        v-bind="{
          ...(projectIndex !== store.all.length - 1 && { to: `/projects/${store.all[projectIndex+1].title}` })
        }"
        class="flex items-center"
      >
        <p>Next{{ store.all[projectIndex+1] && `(${store.all?.[projectIndex+1].title})` }}</p>
        <Chevron class="w-8 h-8" />
      </component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProjectStore } from '~/stores/projects'
import Chevron from '~/icons/Chevron.vue'
const route = useRoute()
const store = useProjectStore()
const projectIndex = computed(() => store.getProjectIndex(route.params.id.toString()))

</script>
