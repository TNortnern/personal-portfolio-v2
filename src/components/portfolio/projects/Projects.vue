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
    <keep-alive>
      <div class="flex flex-wrap justify-center text-lg gap-6 mt-16">
        <!-- Temporarily disabling all because I'm still thinking about the design and I don't want a million projects showing on the initial load -->
        <button
          v-for="tab in tabs.filter((t) => t !== 'all')"
          :key="tab"
          class="rounded-full py-2.5 w-30 duration-150 capitalize"
          :data-filter="tab === 'all' ? 'all' : '.' + tab"
          :class="projectStore.getActiveCategoryTab === tab ? 'bg-app-light-blue text-white' : 'text-gray-400 hover:(bg-app-light-blue text-white bg-opacity-75)'"
          @click="setActiveCategoryTab(tab)"
        >
          {{ `${tab}${tab !== 'all' ? 's' : ''}` }}
        </button>
      </div>
    </keep-alive>
    <keep-alive>
      <div class="mix-grid mt-8">
        <component
          :is="project.category.title.toLowerCase() === 'website' ? 'router-link' : 'a'"
          v-bind="{
            ...project.category.title.toLowerCase() === 'website' && { to: `/projects/${project.title}` },
            ...project.category.title.toLowerCase() !== 'website' && { href: project.hosted_url, target: '__blank' }
          }"
          v-for="project of projectStore.all" :key="project.id"
          class="mix group bg-white shadow-2xl relative rounded-md overflow-hidden relative project-width"
          :class="[project.category.title.toLowerCase(), {'h-[18.5rem]': ['email', 'package'].includes(project.category.title.toLowerCase()) }]"
        >
          <img v-if="!loadedItems.includes(project.id)" :data-item-id="project.id" class="lozad loading-image overflow-hidden h-full w-full" src="/imgload.svg" alt="loading image">
          <picture v-else>
            <source media="(min-width:769px)" :srcset="project?.media?.[0]?.formats?.large?.url">
            <source media="(max-width:768px)" :srcset="project?.media?.[0]?.formats?.medium?.url">
            <source media="(max-width:480px)" :srcset="project?.media?.[0]?.formats?.small?.url">
            <img
              :src="project?.media?.[0]?.url" class="overflow-hidden h-full  w-full"
              :alt="project.title"
            >
          </picture>
          <div class="absolute h-full w-full inset-0 bg-black bg-opacity-60 transform -translate-x-[100%] opacity-0 group-hover:(translate-x-0 opacity-100) duration-400" />
          <div class="absolute h-full w-full inset-0 bg-black bg-opacity-60 transform translate-x-[100%] opacity-0 group-hover:(translate-x-0 opacity-100) duration-400" />
          <div
            class=" text-white absolute inset-0 h-full w-full flex justify-center items-center duration-200 opacity-0 group-hover:(opacity-100)"
          >
            <h1 class="text-4xl font-bold group-hover:(animate-fade-in-up animate-faster)">
              {{ project.title }}
            </h1>
          </div>
        </component>
        <div class="project-width" />
      </div>
    </keep-alive>
  </SectionBlock>
</template>
<script lang="ts" setup>
import lozad from 'lozad'
import type { Tab } from '~/stores/projects'
import { useProjectStore } from '~/stores/projects'
import { useActiveRoute } from '~/composables/useActiveRoute'
import { useMixItUp } from '~/composables/useMixItUp'
const { setActiveRoute } = useActiveRoute('works')
const projectStore = useProjectStore()
const { setActiveCategoryTab } = useProjectStore()
const tabs: Tab[] = [
  'all',
  'website',
  'email',
  'package',
]
// weird type but it surpresses the ts warning..
const loadedItems = ref<string[] | any[] | null[]>([])
useMixItUp('.mix-grid', {
  animation: {
    animateResizeTargets: true,
  },
  load: {
    filter: `.${projectStore.getActiveCategoryTab}`,
  },
})
const isLargeScreen = useMediaQuery('(min-width: 1024px)')
onMounted(async() => {
  const observer = lozad('.lozad', {
    rootMargin: isLargeScreen ? '400px' : '50px',
    threshold: 0.1,
    loaded(el: HTMLBaseElement) {
      const itemId: string | null = el.getAttribute('data-item-id')
      loadedItems.value.push(itemId)
    },
  }) // lazy loads elements with default selector as '.lozad'
  observer.observe()
})

</script>

<style lang="scss">
.loading-image {
  filter: blur(8px);
}

.mix-grid {
  @apply flex flex-wrap content-start justify-center gap-4 lg:(justify-between);
}

.project-width {
  @apply w-[93%] md:w-[48.8%] lg:w-[49%];
}
//
</style>
