<template>
  <div
    class="text-app-light-blue fixed w-full h-18 bottom-0 left-0 z-10 bg-app-dark-blue text-sm md:text-base"
  >
    <div class="main-container flex items-center h-full justify-between px-6 relative">
      <!-- <div class="absolute right-0 bottom-14">
        <div class="flex items-center sticky top-0">
          <SlideChanger class="prev-slide" :include-text="false" />
          <SlideChanger class="next-slide" :include-text="false" rotate />
        </div>
      </div> -->
      <component
        :is="projectIndex !== 0 ? 'router-link' : 'div'"
        :class="{
          'pointer-events-none opacity-50': projectIndex === 0,
          'hover:(ring-2 ring-app-light-blue) duration-150': projectIndex !== 0
        }"
        v-bind="{
          ...(projectIndex !== 0 && { to: `/projects/${store.all[projectIndex - 1].title}` })
        }"
        class="flex items-center px-2 py-1"
      >
        <Chevron class="md:(w-8 h-8) w-5 h-5 transform rotate-180" />
        <p>
          Previous
          <span
            class="hidden md:inline-block"
          >{{ store.all[projectIndex - 1] && `(${store.all?.[projectIndex - 1].title})` }}</span>
          <span class="md:hidden">Project</span>
        </p>
      </component>
      <component
        :is="projectIndex !== store.all.length - 1 ? 'router-link' : 'div'"
        :class="{
          'pointer-events-none opacity-50': projectIndex === store.all.length - 1,
          'hover:(ring-2 ring-app-light-blue) duration-150': projectIndex !== store.all.length - 1
        }"
        v-bind="{
          ...(projectIndex !== store.all.length - 1 && { to: `/projects/${store.all[projectIndex + 1].title}` })
        }"
        class="flex items-center py-1 px-2"
      >
        <p>
          Next
          <span
            class="hidden md:inline-block"
          >{{ store.all[projectIndex + 1] && `(${store.all?.[projectIndex + 1].title})` }}</span>
          <span class="md:hidden">Project</span>
        </p>
        <Chevron class="md:(w-8 h-8) w-5 h-5" />
      </component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProjectStore } from '~/stores/projects'
import Chevron from '~/components/icons/Chevron.vue'
const route = useRoute()
const store = useProjectStore()
const projectIndex = computed(() => store.getProjectIndex(route.params.id.toString()))

</script>
