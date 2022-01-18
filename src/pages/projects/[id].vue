<template>
  <div>
    <Navbar />
    <div class="main-container">
      <div class="pt-38">
        <CarouselSlider :media="project?.media" :project="project" />
        <!-- <div class="flex justify-center">
          <img class="w-full h-100 object-cover" :src="project?.media?.[0].url" :alt="project?.title" :title="project?.title">
        </div> -->
        <h1 class="text-5xl mb-5">
          {{ project?.title }}
        </h1>
        <p class="text-app-light-blue mt-8 mb-2 text-4xl">
          Description
        </p>
        <p>
          {{
            project?.description
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProjectStore } from '~/stores/projects'
const route = useRoute()
const store = useProjectStore()
const project = store.getProject(route.params.id.toString())
</script>
