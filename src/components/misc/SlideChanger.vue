<template>
  <button class="group">
    <SliderArrow class="text-app-light-blue w-16 h-16 block mx-auto duration-120 mb-2 ease-in transform group-hover:(opacity-83 scale-112)" :class="{ 'rotate-180': rotate }" />
    <span v-show="includeText" class="block text-center group-hover:(text-app-light-blue duration-120 ease-in)">{{ rotate ? 'Next' : 'Previous' }}</span>
  </button>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{rotate?: boolean; includeText?: boolean}>(), { includeText: true })
</script>
