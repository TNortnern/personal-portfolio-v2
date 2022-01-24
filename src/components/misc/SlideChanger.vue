<template>
  <button class="group">
    <SliderArrow class="text-app-light-blue w-13 h-13 lg:(w-15 h-15) block mx-auto duration-120 mb-2 ease-in transform group-hover:(opacity-83 scale-112)" :class="{ 'rotate-180': rotate }" />
    <span v-show="includeText" class="block text-center text-xs lg:text-base group-hover:(text-app-light-blue duration-120 ease-in)">{{ rotate ? 'Next' : 'Previous' }}</span>
  </button>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{rotate?: boolean; includeText?: boolean}>(), { includeText: true })
</script>
