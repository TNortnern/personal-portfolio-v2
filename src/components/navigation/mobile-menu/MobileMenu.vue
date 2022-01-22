<template>
  <div :class="isOpen() ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-0 -translate-y-100'" class="duration-400 lg:hidden z-25 transform ease-in-out bg-app-dark-blue h-screen text-white inset-0 fixed" />
  <Hamburger />
</template>

<script lang="ts" setup>
import { useMobileMenu } from '~/composables/useMobileMenu'
const { isOpen } = useMobileMenu()
</script>
