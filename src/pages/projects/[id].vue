<template>
  <div class="overflow-y-hidden relative">
    <button class="absolute top-8 right-6 md:(top-6 right-12) bg-white rounded-full" @click="$router.push('/#works')">
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
    </button>
    <!-- <Navbar /> -->
    <transition mode="out-in" name="fade">
      <div
        :key="projectIndex"
        class="main-container text-white p-8 rounded-lg mt-4 h-[96vh] scrollbar-thin scrollbar-thumb-app-light-blue scrollbar-track-white overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
      >
        <div class="mb-8">
          <h1 class="text-4xl mb-3">
            {{ project?.title }}
          </h1>
          <p class="text-app-light-blue mt-8 mb-2 text-3xl">
            Description
          </p>
          <p>
            {{
              project?.description
            }}
          </p>
        </div>
        <div>
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
                spaceBetween: 20,
                slidesPerView: 1.5
              }
            }"
            class="mySwiper"
          >
            <swiper-slide v-for="{ id, url } in project?.media" :key="id" class>
              <img class="overflow-hidden lg:object-cover" :src="url" alt>
            </swiper-slide>
          </swiper>
          <!-- <CarouselSlider :media="project?.media" :project="project" /> -->
          <!-- <div class="flex justify-center">
            <img class="w-full h-100 object-cover" :src="project?.media?.[0].url" :alt="project?.title" :title="project?.title">
          </div>-->
        </div>
        <div class="flex items-center gap-3 mt-8">
          <p v-for="tech in project.technologies" :key="tech.id" class="bg-app-light-blue p-2 rounded-md w-32 text-center">
            {{ tech.name }}
          </p>
        </div>
      </div>
    </transition>
    <ProjectSwitch />
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

// install Swiper modules
SwiperCore.use([Pagination, Autoplay])

const route = useRoute()
const store = useProjectStore()
const projectIndex = computed(() => store.getProjectIndex(route.params.id.toString()))
const project = computed(() => store.all[projectIndex.value])
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
  @apply h-90 lg:h-95;
}

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
html {
  @apply bg-app-dark-blue;
}
</style>
