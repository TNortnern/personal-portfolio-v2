<template>
  <div class="overflow-y-hidden relative">
    <button
      class="absolute top-8 right-6 md:(top-6 right-12) bg-white rounded-full transform hover:animate-spin animate-duration-[1000ms]"
      @click="$router.push('/#works')"
    >
      <svg
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
    <!-- <Navbar /> -->
    <transition mode="out-in" name="fade">
      <div
        :key="projectIndex"
        class="main-container text-white p-8 rounded-lg mt-4 h-[96vh] scrollbar-thin scrollbar-thumb-app-light-blue scrollbar-track-white overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
      >
        <div class="mb-8">
          <div class="text-3xl md:text-4xl mb-3 flex justify-between items-center">
            <h1>{{ project?.title }}</h1>
            <button
              class="md:hidden text-black bg-white rounded-full transform hover:animate-spin animate-duration-[1000ms]"
              @click="$router.push('/#works')"
            >
              <svg
                class="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p class="text-app-light-blue mt-8 mb-2 text-2xl md:text-3xl">
            Description
          </p>
          <p>
            {{
              project?.description
            }}
          </p>
          <div class="flex flex-wrap items-center gap-3 mt-6">
            <p
              v-for="tech in project.technologies"
              :key="tech.id"
              class="bg-app-light-blue p-1 rounded-full w-[48%] md:w-32 text-center"
            >
              {{ tech.name }}
            </p>
          </div>
          <button
            class="bg-white block w-full lg:(w-auto mx-0) text-app-light-blue mt-5 px-5 py-1.5 text-lg border border-app-light-blue hover:(transform scale-110) focus:(ring-2 ring-white) duration-200 rounded-md"
          >
            View Project
          </button>
        </div>
        <div>
          <swiper
            :space-between="10"
            :slides-per-view="1.1"
            :keyboard="true"
            :scrollbar="true"
            :grab-cursor="true"
            free-mode
            :mousewheel="{
              releaseOnEdges: true,
            }"
            follow-finger
            loop
            :autoplay="{
              delay: 3000,
              pauseOnMouseEnter: true
            }"
            :breakpoints="{
              '1280': {
                spaceBetween: 20,
                slidesPerView: 1.6
              }
            }"
            class="mySwiper"
          >
            <swiper-slide v-for="{ id, url, formats } in project?.media" :key="id">
              <picture>
                <source media="(min-width:1024px)" :srcset="formats.large?.url">
                <source media="(max-width:1023px)" :srcset="formats.medium?.url">
                <!-- <source media="(max-width:480px)" :srcset="formats.thumbnail.url"> -->
                <img class="overflow-hidden max-" :src="url" :alt="project.title">
              </picture>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </transition>
    <ProjectSwitch />
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, {
  Autoplay,
  Pagination,
} from 'swiper'
import { useProjectStore } from '~/stores/projects'
// Import Swiper Vue.js components

// Import Swiper styles

// import Swiper core and required modules

// install Swiper modules
SwiperCore.use([Pagination, Autoplay])

const route = useRoute()
const store = useProjectStore()
const projectIndex = computed(() => store.getProjectIndex(route.params.id.toString()))
const project = computed(() => store.all[projectIndex.value])
</script>

<style>
@import "swiper/css";

@import "swiper/css/pagination";
.swiper {
  width: 100%;
  @apply h-full;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  /* Center slide text vertically */
  /* @apply !w-auto; */
}

.swiper-slide img {
  display: block;
  width: 100%;
  object-fit: cover;
  @apply h-auto;
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
