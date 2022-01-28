<template>
  <div>
    <swiper
      ref="aswp"
      :space-between="10"
      :slides-per-view="1.1"
      :keyboard="true"
      :scrollbar="true"
      :grab-cursor="true"
      :navigation="{
        nextEl: '.next-slide',
        prevEl: '.prev-slide',
      }"
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
          <img class="overflow-hidden" :src="url" :alt="project.title">
        </picture>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, {
  Autoplay,
  Navigation,
} from 'swiper'
import { useProjectStore } from '~/stores/projects'
// Import Swiper Vue.js components

// Import Swiper styles

// import Swiper core and required modules

// install Swiper modules
SwiperCore.use([Autoplay, Navigation])

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
  @apply pb-10;
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

</style>
