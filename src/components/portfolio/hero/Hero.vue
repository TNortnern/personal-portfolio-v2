<template>
  <div

    class="bg-app-dark-blue text-white relative pb-36"
  >
    <Navbar />
    <HeroIntro />
  </div>
</template>

<script lang="ts" setup>
import { useActiveRoute } from '~/composables/useActiveRoute'
const { setActiveRoute } = useActiveRoute('')
</script>
