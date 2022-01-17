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
      <a
        v-for="i in 6"
        :key="i"
        href="#"
        class="w-full mx-auto rounded-lg bg-app-dark-blue border border-gray-200 p-5 text-white font-light mb-6 duration-150 hover:(opacity-75) transform"
      >
        <div class="w-full flex mb-4 items-center">
          <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
            <img src="https://i.pravatar.cc/100?img=1" alt>
          </div>
          <div class="flex-grow pl-3">
            <h6 class="font-bold text-sm uppercase text-app-light-blue">Kenzie Edgar.</h6>
          </div>
        </div>
        <div class="w-full">
          <p class="text-sm leading-tight">
            <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.
            <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
          </p>
        </div>
      </a>
    </div>
  </SectionBlock>
</template>

<script lang="ts" setup>
import { useActiveRoute } from '~/composables/useActiveRoute'
const { setActiveRoute } = useActiveRoute('testimonials')
</script>
