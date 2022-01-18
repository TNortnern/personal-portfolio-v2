<template>
  <div class="bg-app-dark-blue min-h-screen">
    <!-- <Navbar /> -->
    <div>^</div>
    <transition mode="in-out" name="fade">
      <div class="main-container">
        <div class="bg-white shadow-2xl mt-12 p-8 rounded-lg">
          <swiper
            :slides-per-view="1"
            :space-between="10"
            :grab-cursor="true"
            loop
            :autoplay="{
              delay: 3000,
              pauseOnMouseEnter: true
            }"
            :breakpoints="{
              '1280': {
                spaceBetween: 30,
                slidesPerView: 2
              }
            }"
            class="mySwiper h-20"
          >
            <swiper-slide v-for="{ id, url } in project?.media" :key="id">
              <img class="border border-app-dark-blue rounded-md overflow-hidden lg:object-cover" :src="url" alt="">
            </swiper-slide>
          </swiper>
          <!-- <CarouselSlider :media="project?.media" :project="project" /> -->
          <!-- <div class="flex justify-center">
            <img class="w-full h-100 object-cover" :src="project?.media?.[0].url" :alt="project?.title" :title="project?.title">
          </div>-->
          <div class="mt-10">
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
    </transition>
    <div class=" text-app-light-blue fixed w-full h-18 bottom-0 left-0 z-10">
      <div class="main-container flex justify-between">
        <component
          :is="projectIndex !== 0 ? 'router-link' : 'div'"
          :class="{
            'pointer-events-none opacity-50': projectIndex === 0
          }"
          v-bind="{
            ...(projectIndex !== 0 && { to: `/projects/${store.all[projectIndex-1].title}` })
          }"
          class="flex items-center"
        >
          <Chevron class="w-8 h-8 transform rotate-180" />
          <p>Previous Project</p>
        </component>
        <component
          :is="projectIndex !== store.all.length - 1 ? 'router-link' : 'div'"
          :class="{
            'pointer-events-none opacity-50': projectIndex === store.all.length - 1
          }"
          v-bind="{
            ...(projectIndex !== store.all.length - 1 && { to: `/projects/${store.all[projectIndex+1].title}` })
          }"
          class="flex items-center"
        >
          <p>Next project</p>
          <Chevron class="w-8 h-8" />
        </component>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProjectStore } from '~/stores/projects'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'

// import Swiper core and required modules
import SwiperCore, {
  Autoplay,
  Pagination,
} from 'swiper'
import Chevron from '~/icons/Chevron.vue'

// install Swiper modules
SwiperCore.use([Pagination, Autoplay])

const route = useRoute()
const store = useProjectStore()
const projectIndex = computed(() => store.getProjectIndex(route.params.id.toString()))
const project = computed(() => store.all[projectIndex.value])
const projectCount = store.all.length
</script>

<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  object-fit: cover;
  @apply h-80;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter-from, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
