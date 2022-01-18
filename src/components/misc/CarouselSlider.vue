<template>
  <!-- Carousel slider -->
  <div class="carousel-slider">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div v-for="item of media" :key="item.url" class="swiper-slide">
          <!-- elements with  "carousel-slider-animate-opacity" class will have animated opacity -->
          <div class="carousel-slider-animate-opacity">
            <img
              :src="item.url"
              :alt="project?.title"
            >
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-button-prev" />
    <div class="swiper-button-next" />
    <div class="swiper-pagination" />
  </div>
</template>

<script lang="ts" setup>
import createCarouselSlider from '~/composables/carouselSlider'
interface Project {
  title: string
}
interface Media {
  url: string
}
defineProps<{ media: Media[] | undefined; project: Project | undefined }>()

onMounted(() => {
  /**
 * Carousel Slider element
 */
  const sliderEl = document.querySelector('.carousel-slider')

  /**
 * Init Carousel Slider
 *
 * argument: pass .carousel-slider element
 */
  createCarouselSlider(sliderEl)
})
</script>

<style lang="scss" scoped>

@import 'swiper/scss';
@import 'swiper/scss/autoplay';
@import 'swiper/scss/pagination';
@import 'swiper/scss/navigation';

:root {
  --carousel-slider-max-width: 1440px;
  --carousel-slider-width: 600px;
  --carousel-slider-height: 380px;
  --carousel-slider-navigation-color: #fff;
  --carousel-slider-pagination-color: #fff;
}
.carousel-slider {
  --swiper-navigation-color: var(--carousel-slider-navigation-color);
  --swiper-pagination-color: var(--carousel-slider-pagination-color);
  --swiper-pagination-bullet-inactive-color: var(
    --carousel-slider-pagination-color
  );
  position: relative;
  width: var(--carousel-slider-max-width);
  margin: 0 auto;
  max-width: 100%;
  overflow: hidden;
  .swiper {
    padding-bottom: 32px;
  }
  .swiper-slide {
    width: var(--carousel-slider-width);
    height: var(--carousel-slider-height);
    position: relative;
  }
  .swiper-pagination-bullets {
    bottom: 0;
  }
}

.carousel-slider .swiper-slide img {
  display: block;
}
// Custom styles for demo
.carousel-slider {
  // Configure sizes and navigation/pagination colors with CSS variables
  --carousel-slider-max-width: 1200px;
  --carousel-slider-width: 520px;
  --carousel-slider-height: 380px;
  --carousel-slider-navigation-color: #fff;
  --carousel-slider-pagination-color: #fff;
  .swiper-slide {
    border-radius: 8px;
    // Slide background to match main background
    background: #18212b;
    max-width: calc(100% - 48px);
  }
  .carousel-slider-animate-opacity {
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: 8px;
    // prettier-ignore
    -webkit-box-reflect: below 5px -webkit-linear-gradient(bottom,rgba(255,0,0,0.1) 0%,transparent 32px,transparent 100%);
  }
  .slide-content {
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0;
    padding: 88px 16px 24px;
    box-sizing: border-box;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.75)
    );
    border-radius: 0 0 8px 8px;
    h2 {
      margin: 0;
      font-weight: bold;
      font-size: 24px;
      line-height: 1.1;
    }
    p {
      margin: 8px 0 0;
      opacity: 0.65;
      font-size: 14px;
      font-weight: 500;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
  }

  // Hide navigation on narrow screens
  @media (max-width: 640px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: none !important;
    }
  }
}
</style>
