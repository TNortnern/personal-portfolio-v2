<template>
  <div class>
    <Hero />
    <Services />
    <SectionBlock caption="Portfolio" title="My Works">
      <div class="flex justify-center text-lg gap-6 mt-16">
        <button
          v-for="(tab, i) in tabs"
          :key="i"
          class="rounded-full py-2.5 w-30 duration-150 capitalize"
          :class="activeItem === i ? 'bg-app-light-blue text-white' : 'text-gray-400 hover:(bg-app-light-blue text-white bg-opacity-75)'"
          @click="activeItem = i"
        >{{ tab }}</button>
      </div>
      <div class="grid grid-cols-2 gap-x-4 gap-y-8 justify-items-center pt-16">
        <div
          v-for="project of projects"
          :key="project.id"
          class="group relative opacity-80 hover:opacity-100 duration-150"
        >
          <!-- {{ project.media }} -->
          <img
            :src="project.media && project.media[0] && project.media[0].url"
            alt="proj"
            class="w-full h-full object-cover"
          />
          <!-- <div class="absolute bg-black w-full h-full flex items-center justify-center bg-opacity-50 duration-150 z-5 inset-0"></div> -->
        </div>
      </div>
    </SectionBlock>
  </div>
</template>

<script lang="ts" setup>
import { ref, useFetch } from '@nuxtjs/composition-api'
import axios from 'axios'
import Hero from '~/components/hero/Hero.vue'
import Services from '~/components/services/Services.vue'
import SectionBlock from '~/components/common/SectionBlock.vue'
const projects: any = ref([])
const getProjects = () => {
  useFetch(async () => {
    await axios
      .get('https://personalport-be.herokuapp.com/projects')
      .then(({ data }) => {
        console.log('projects', data)
        projects.value = data
        return {
          data
        }
      })
  })
}
getProjects()
const activeItem = ref(1)
const tabs = [
  'all',
  'websites',
  'design',
  'mobile apps',
]
</script>
