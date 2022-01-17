<template>
  <div>
    <Navbar />
    <div class="main-container">
      <div class=" pt-48">
        <h1 class="text-5xl text-center">
          {{ project?.title }}
        </h1>
        <div class="flex justify-center">
          <img class="w-[90%] h-80 object-contain" :src="project?.media?.[0].url" :alt="project?.title" :title="project?.title">
        </div>
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
