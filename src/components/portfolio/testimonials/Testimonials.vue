<template>
  <SectionBlock
    id="testimonials"
    v-observe-visibility="{
      callback: setActiveRoute,
      intersection: {
        threshold: 0.2,
      },
    }"
    caption="Testimonials"
    title="See what people say about me"
  >
    <div class="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-5">
      <div
        v-for="testimonial in testimonials"
        :key="testimonial.id"
        class="w-full mx-auto rounded-lg bg-white text-black shadow-2xl border border-gray-200 p-5 font-light mb-6 duration-150 ring-2 ring-transparent hover:(ring-app-light-blue) transform"
      >
        <div class="w-full flex mb-4 items-center">
          <div
            class="overflow-hidden rounded-full w-10 h-10"
            :class="{ 'bg-gray-50 border border-gray-200': testimonial.avatar }"
          >
            <img
              :src="testimonial?.avatar?.url || '/avatarplaceholder.svg'"
              :alt="testimonial.name"
            >
          </div>
          <div class="flex-grow pl-3">
            <h6 class="font-bold text-sm uppercase text-app-light-blue">
              {{ testimonial.name }}
            </h6>
          </div>
        </div>
        <div class="w-full">
          <p class=" leading-tight">
            <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
            {{ testimonial.body }}
            <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
          </p>
        </div>
      </div>
    </div>
  </SectionBlock>
</template>

<script lang="ts" setup>
import { useActiveRoute } from '~/composables/useActiveRoute'
import { useRootStore } from '~/stores/root'
const { setActiveRoute } = useActiveRoute('testimonials')
const rootStore = useRootStore()
const testimonials = computed(() => rootStore.testimonials)
</script>
