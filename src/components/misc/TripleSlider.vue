<template>
  <div class="triple-slider">
    <!-- Duplicate swipers will be created automatically -->

    <!-- Main center swiper -->
    <div class="swiper">
      <div class="swiper-wrapper">
        <div v-for="i in 8" :key="i" class="swiper-slide">
          <img class="bg-image" src="http://placeimg.com/640/480/technics" alt="">
          <img
            class="logo-image logo-image-1" data-swiper-parallax-x="50%"
            src="http://placeimg.com/640/480/transport" alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import createTripleSlider from '~/composables/tripleSlider'

onMounted(() => {
  /**
 * Triple Slider element
 */
  const tripleEl = document.querySelector('.triple-slider')

  /**
 * Init Triple Slider
 *
 * argument: pass .triple-slider element
 */
  createTripleSlider(tripleEl)
})
</script>

<style lang="scss" scoped>
img {
  @apply duration-300;
}
img[lazy="loading"] {
  @apply bg-black opacity-65;
}
img[lazy="loaded"] {
  @apply opacity-100;
  /*your style here*/
}
// Custom sizes for demo
.triple-slider {
  padding: 32px 0;
  .swiper {
    width: 90%;
    max-width: 640px;
    height: 320px;
    border-radius: 8px;
  }
  .bg-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .logo-image {
    position: absolute;
    bottom: 32px;
    left: 50%;
  }
  .logo-image-1 {
    width: 310px;
    margin-left: -155px;
  }
  .logo-image-2 {
    width: 146px;
    margin-left: -73px;
  }
  .logo-image-3 {
    width: 262px;
    margin-left: -131px;
  }
  .logo-image-4 {
    width: 196px;
    margin-left: -98px;
  }
  .logo-image-5 {
    width: 320px;
    margin-left: -160px;
  }
  .logo-image {
    @media (max-width: 480px) {
      width: 160px;
      margin-left: -80px;
    }
  }
}
@import 'swiper/scss';
@import 'swiper/scss/controller';

:root {
}
.triple-slider {
  width: 100%;
  position: relative;
  overflow: hidden;
  perspective: 1200px;

  .triple-slider-main {
    position: relative;
    z-index: 10;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
  }
  .triple-slider-prev,
  .triple-slider-next {
    opacity: 0.25;
    position: absolute;
    top: 50%;
    user-select: none;
    cursor: pointer;
  }
  .triple-slider-prev {
    right: 50%;
    transform: translateY(-50%) scale(0.75) rotateY(10deg);
  }
  .triple-slider-next {
    left: 50%;
    transform: translateY(-50%) scale(0.75) rotateY(-10deg);
  }
}

</style>
