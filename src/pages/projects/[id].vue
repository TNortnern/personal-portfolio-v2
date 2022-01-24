<template>
  <div class="overflow-y-hidden relative">
    <transition mode="out-in" name="fade">
      <div
        :key="projectIndex"
        class="main-container  text-white px-5 lg:px-10 2xl:pl-6 2xl:pr-20 rounded-lg lg:max-h-[100vh] pb-12  scrollbar-thin scrollbar-thumb-app-light-blue scrollbar-track-white overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
      >
        <ProjectTop />
        <ProjectSwiper />
      </div>
    </transition>
    <ProjectSwitch />
  </div>
</template>

<script lang="ts" setup>
import { useProjectStore } from '~/stores/projects'

const route = useRoute()
const store = useProjectStore()
const projectIndex = computed(() => store.getProjectIndex(route.params.id.toString()))
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from {
  transform: scale(0);
}
</style>
