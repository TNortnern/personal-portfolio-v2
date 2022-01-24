<template>
  <div class="mb-8">
    <div class="text-3xl md:text-4xl mb-3 flex justify-between items-center">
      <h1>{{ project?.title }}</h1>
      <CloseButton
        class="text-black"
        @click="$router.push('/#works')"
      />
    </div>
    <p class="text-app-light-blue mb-2 text-2xl md:text-3xl">
      Description
    </p>
    <p>
      {{
        project?.description
      }}
    </p>
    <div class="flex flex-wrap items-center gap-3 mt-6">
      <p
        v-for="tech in project.technologies"
        :key="tech.id"
        class="bg-white text-app-dark-blue py-0.8 rounded-full w-[48%] md:w-32 text-center"
      >
        {{ tech.name }}
      </p>
    </div>
    <div class="flex items-center justify-between mt-6">
      <component
        :is="project.hosted_url ? 'a' : 'button'"
        v-bind="(project.hosted_url && { href: project.hosted_url, target: '__blank' })"
        class="project-cta-link__text group"
      >
        <div class="relative z-10">
          {{ project.hosted_url ? 'Visit Project' : 'Request a Demo' }}
        </div>

        <div class="project-cta-link__bg group-hover:h-full" />
      </component>
      <div ref="topControls" class="flex items-center sticky top-0">
        <SlideChanger class="prev-slide" />
        <SlideChanger class="next-slide" rotate />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProjectStore } from '~/stores/projects'
const route = useRoute()
const store = useProjectStore()
const projectIndex = computed(() => store.getProjectIndex(route.params.id.toString()))
const project = computed(() => store.all[projectIndex.value])
const topControls = ref<HTMLBodyElement | null>(null)
</script>