<template>
  <div>
    <div
      class="py-10 fixed z-20 top-0 w-full bg-app-dark-blue duration-250 text-white" :class="{
        'shadow-2xl pt-4 pb-4 z-20': active
      }"
    >
      <nav ref="navbar" class="main-container relative">
        <slot>
          <div class="flex items-center justify-between relative">
            <router-link to="/" class="flex items-center gap-2">
              <img :class="isActive ? 'w-12 h-12' : 'w-14 h-14'" class="rounded-full duration-250" src="/avatar.png" alt="Trayvon Northern Face">
              <p>Trayvon Northern</p>
            </router-link>
            <MobileMenu />
            <ul class="lg:(flex items-center gap-4) hidden">
              <li v-for="route in routes" :key="route.text" class="group">
                <a
                  v-smooth-scroll
                  :class="activeHash === route.href ? 'text-app-light-blue' : 'group-hover:text-app-light-blue'"
                  class="duration-150" :href="route.href"
                >{{ route.text }}</a>
              </li>
            </ul>
          </div>
        </slot>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useActiveRoute } from '~/composables/useActiveRoute'
import { useEventListener } from '~/composables/useEventListener'
import { useRouteStore } from '~/stores/routes'
const { routes } = useRouteStore()
const currentRoute = useRoute()
const { getActiveRoute } = useActiveRoute()
const activeHash = computed(() => `#${getActiveRoute()}`)
const navbar = ref<any>(null)
const active = ref(false)
const isActive = computed(() => !!active.value || currentRoute.path !== '/')
if (typeof window !== 'undefined') {
  useEventListener(window, 'scroll', () => {
    // have we scrolled past this element?
    if (window.scrollY > navbar.value.offsetTop + navbar.value.offsetHeight)
      active.value = true

    else
    //nah
      active.value = false
  })
}
</script>

<style scoped>

</style>
