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
    <div class="flex flex-wrap justify-center text-lg gap-6 mt-16">
      <button
        v-for="tab in tabs"
        :key="tab"
        class="rounded-full py-2.5 w-30 duration-150 capitalize"
        :class="projectStore.getActiveCategoryTab === tab ? 'bg-app-light-blue text-white' : 'text-gray-400 hover:(bg-app-light-blue text-white bg-opacity-75)'"
        @click="setActiveCategoryTab(tab)"
      >
        {{ `${tab}${tab !== 'all' ? 's' : ''}` }}
      </button>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8 justify-items-center pt-16 lg:min-h-[30rem] min-[19rem]">
      <router-link
        v-for="project of projectStore.allFiltered" :key="project.id"
        :to="`/projects/${project.title}`"
        class="bg-white shadow-2xl group relative rounded-md overflow-hidden w-full"
      >
        <img v-if="!loadedItems.includes(project.id)" :data-item-id="project.id" class="lozad loading-image overflow-hidden w-full" src="/imgload.svg" alt="loading image">
        <picture v-else>
          <source media="(min-width:769px)" :srcset="project?.media?.[0]?.formats?.large?.url">
          <source media="(max-width:768px)" :srcset="project?.media?.[0]?.formats?.medium?.url">
          <source media="(max-width:480px)" :srcset="project?.media?.[0]?.formats?.small?.url">
          <img
            :src="project?.media?.[0]?.url" class="overflow-hidden w-full"
            :alt="project.title"
          >
        </picture>
        <!-- <picture>
            <source media="(min-width:768px)" :srcset="project?.media?.[0]?.formats?.medium?.url">
            <source media="(max-width:480px)" :srcset="project?.media?.[0]?.formats?.small?.url">
          </picture> -->
        <!-- <img v-lazy="project?.media?.[0]?.url" data-srcset="http://placeimg.com/640/480/cats 400w, https://iamhrt.com/wp-content/uploads/2021/05/Andrew-Evans-PA-270x297.png 1200w" loading="/avatar.png" class="overflow-hidden w-full h-full" :alt="project.title"> -->
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
import lozad from 'lozad'
import type { Tab } from '~/stores/projects'
import { useProjectStore } from '~/stores/projects'
import { useActiveRoute } from '~/composables/useActiveRoute'
const { setActiveRoute } = useActiveRoute('works')
const projectStore = useProjectStore()
const { setActiveCategoryTab } = useProjectStore()
const tabs: Tab[] = [
  'all',
  'website',
  'email',
  'design',
  'package',
]
// weird type but it surpresses the ts warning..
const loadedItems = ref<string[]|any[]|null[]>([])
onMounted(() => {
  const observer = lozad('.lozad', {
    rootMargin: '400px',
    threshold: 0.1,
    loaded(el: HTMLBaseElement) {
      const itemId: string | null = el.getAttribute('data-item-id')
      loadedItems.value.push(itemId)
    },
  }) // lazy loads elements with default selector as '.lozad'
  observer.observe()
})
</script>

<style>
img {
  @apply duration-300;
}
img[lazy="loading"] {
  @apply bg-black opacity-65 md:h-[416px] w-full h-[350px];
}
img[lazy="loaded"] {
  @apply opacity-100;
  /*your style here*/
}
.loading-image {
    filter: blur(8px);

}

</style>
