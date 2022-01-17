<template>
  <div class="text-center">
    <h4 class="text-app-light-blue text-xl font-bold">
      {{ caption }}
    </h4>
    <h2 class="text-5xl">
      {{ title }}
    </h2>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  caption: string
  title: string
}
defineProps<Props>()
</script>
