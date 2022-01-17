<template>
  <div
    class="py-10 fixed  top-0 w-full bg-app-dark-blue duration-250 text-white" :class="{
      'shadow-2xl pt-4 pb-4 bg-white text-black z-20': active
    }"
  >
    <nav ref="navbar" class="main-container">
      <div class="flex items-center justify-between">
        <router-link to="/" class="flex items-center gap-2">
          <img :class="active ? 'w-12 h-12' : 'w-14 h-14'" class="rounded-full duration-250" src="/avatar.png" alt="Trayvon Northern Face">
          <p>Trayvon Northern</p>
        </router-link>
        <ul class="lg:(flex items-center gap-4) hidden">
          <li v-for="route in routes" :key="route.text" class="group">
            <a
              v-smooth-scroll
              class="duration-150 group-hover:text-app-light-blue" :href="route.href"
            >{{ route.text }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { useEventListener } from '~/composables/useEventListener'
import { useRouteStore } from '~/stores/routes'
const { routes } = useRouteStore()
const navbar = ref<any>(null)
const active = ref(false)
if (typeof window !== 'undefined') {
  useEventListener(window, 'scroll', () => {
    // have we scrolled past this element?
    if (window.scrollY > navbar.value.offsetTop + navbar.value.offsetHeight)
      active.value = true

    else
      active.value = false
  })
}
</script>
