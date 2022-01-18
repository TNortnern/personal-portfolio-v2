<template>
  <!-- Travel slider -->
  <div class="travel-slider">
    <!-- Swiper -->
    <div class="swiper">
      <div class="swiper-wrapper">
        <div v-for="i in 8" :key="i" class="swiper-slide">
          <img src="http://placeimg.com/640/480/cats" class="travel-slider-bg-image">
          <div class="travel-slider-content">
            <div class="travel-slider-title">
              United States
            </div>
            <div class="travel-slider-subtitle">
              8,295 properties
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import createTravelSlider from '~/composables/travelSlider'

onMounted(() => {
  const sliderEl = document.querySelector('.travel-slider')

  /**
 * Init Travel Slider
 *
 * argument: pass .travel-slider element
 */
  createTravelSlider(sliderEl)
})
</script>

<style lang="scss" scoped>
.travel-slider:after {
  content: '';
  position: absolute;
  height: 50vh;
  top: 50%;
  width: 100%;
  left: 0;
  // background-image: linear-gradient(to top, #fff, rgba(255, 255, 255, 0));
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    #b0a5d1 50%
  );
}
@import 'swiper/scss';

:root {
  --travel-slider-height: 300px;
  --travel-slider-city-image-size: 120px;
  --travel-slider-vertical-padding: 64px;
}
.travel-slider {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  .swiper {
    height: var(--travel-slider-height);
    padding-top: var(--travel-slider-vertical-padding);
    padding-bottom: var(--travel-slider-vertical-padding);
  }
  .swiper-slide {
    width: 80%;
    max-width: 640px;
    box-sizing: border-box;
    position: relative;
  }
  &-bg-image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    left: 0;
    top: 0;
    border-radius: 16px;
    box-sizing: border-box;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5),
      0px -1px 0px rgba(255, 255, 255, 0.5);
  }
  &-content {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 32px;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    line-height: 1.25;
    border-radius: 0 0 16px 16px;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
  }
  &-title {
    font-weight: bold;
    font-size: 32px;
  }
  &-subtitle {
    font-size: 18px;
  }

  &-planet {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    > img {
      display: block;
      width: auto;
      height: 100%;
      margin: 0 auto;
    }
  }
  &-cities {
    img {
      --travel-slider-planet-size: calc(
        var(--travel-slider-height) + var(--travel-slider-vertical-padding) * 2
      );
      --travel-slider-image-rotate: 0deg;
      --travel-slider-image-scale: 1;
      position: absolute;
      bottom: 95%;
      left: 50%;
      transform: translateX(-50%) scale(var(--travel-slider-image-scale))
        rotate(var(--travel-slider-image-rotate));
      transform-origin: center
        calc(
          var(--travel-slider-planet-size) / 2 * 0.95 * 0.95 +
            var(--travel-slider-city-image-size) * 1
        );
      height: var(--travel-slider-city-image-size);
      width: var(--travel-slider-city-image-size);
      object-position: center bottom;
      object-fit: contain;
    }
    &-8 {
      img:nth-child(2) {
        --travel-slider-image-rotate: 45deg;
      }
      img:nth-child(3) {
        --travel-slider-image-rotate: 90deg;
      }
      img:nth-child(4) {
        --travel-slider-image-rotate: 135deg;
      }
      img:nth-child(5) {
        --travel-slider-image-rotate: 180deg;
      }
      img:nth-child(6) {
        --travel-slider-image-rotate: 225deg;
      }
      img:nth-child(7) {
        --travel-slider-image-rotate: 270deg;
      }
      img:nth-child(8) {
        --travel-slider-image-rotate: 315deg;
      }
    }
    &-4 {
      img:nth-child(2) {
        --travel-slider-image-rotate: 90deg;
      }
      img:nth-child(3) {
        --travel-slider-image-rotate: 180deg;
      }
      img:nth-child(4) {
        --travel-slider-image-rotate: 270deg;
      }
    }
  }
}

</style>
