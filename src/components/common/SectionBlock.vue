<template>
  <div class="main-container pt-32 pb-28">
    <SectionHeader :title="title" :caption="caption" />
    <slot />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  caption: string
  title: string
}
defineProps<Props>()
</script>
