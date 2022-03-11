<template>
  <SectionBlock
    id="services"
    v-observe-visibility="{
      callback: setActiveRoute,
      intersection: {
        threshold: 0.6,
      },
    }"
    caption="What I Offer?" title="My Services"
  >
    <div class="flex lg:(justify-between space-y-0) flex-wrap justify-center md:justify-start mt-16 space-y-10">
      <div v-for="{ title, description, cta, icon, iconClass } in serviceItems" :key="title" class="w-full border-b pb-6 lg:(w-[30%] border-b-0 pb-0)">
        <span class="bg-app-dark-blue rounded-full p-4 hidden lg:flex items-center justify-center text-white w-20 h-20 mx-auto mb-5">
          <component :is="icon" :class="iconClass" />
        </span>
        <div class="lg:(text-center pl-0) pl-4">
          <h5 class="text-2xl mb-5 text-app-light-blue">
            {{ title }}
          </h5>
          <span class="text-gray-400 block" v-text="description" />
          <a
            v-if="cta"
            v-smooth-scroll
            class="text-app-light-blue font-bold hover:text-app-light-blue/80 mt-1.5" :href="cta.href"
          >{{ cta.text }}</a>
        </div>
      </div>
    </div>
  </SectionBlock>
</template>

<script lang="ts" setup>
import { useActiveRoute } from '~/composables/useActiveRoute'
import Globe from '~/components/icons/Globe.vue'
import Learn from '~/components/icons/Learn.vue'
import Brain from '~/components/icons/Brain.vue'
// import Design from '~/components/icons/Design.vue'
const { setActiveRoute } = useActiveRoute('services')
interface CTA {
  text: string
  href: string
}
interface ServiceItem {
  title: string
  description: string
  icon: any
  iconClass?: string
  cta?: CTA
}
const serviceItems: ServiceItem[] = [
  {
    title: 'Website Development',
    description: 'I provide a well-versed skill-set when it comes to website development, from translating designs to webpages, building complex user interfaces, and writing expansive logic.',
    icon: Globe,
    iconClass: 'w-10 h-10',
     cta: {
      text: 'See my work',
      href: '#works',
    },
  },
  {
    title: 'Tutoring',
    description: 'As a developer, learning never stops, one of the best ways to learn to is to teach. I\'m patient, as well as passionate about helping developers succeed.',
    icon: Learn,
    iconClass: 'w-9.5 h-9.5',
    cta: {
      text: 'See my testimonials',
      href: '#testimonials',
    },
  },
  {
    title: 'Consultation',
    description: 'Every once awhile, you need someone to pass and bounce ideas off of and also receive some useful insights. I can be that person.',
    icon: Brain,
    iconClass: 'w-9 h-9',
    cta: {
      text: 'See my testimonials',
      href: '#testimonials',
    },
  },
  // {
  //   title: 'UI/UX Design',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eius maiores voluptatem tenetur quos ratione libero architecto quae sequi rem.',
  //   icon: Design,
  //   iconClass: 'w-7.5 h-7.5',
  // },
]
</script>
