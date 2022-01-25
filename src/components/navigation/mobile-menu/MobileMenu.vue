<template>
  <div :class="isOpen() ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-0 -translate-y-100'" class="duration-400 lg:hidden z-25 transform ease-in-out bg-app-dark-blue h-screen text-white inset-0 fixed flex items-center justify-center">
    <div class="text-4xl flex flex-col space-y-14 relative bottom-8">
      <a
        v-for="route in allRoutes"
        :key="route.text" :class="activeHash === route.href ? 'text-app-light-blue' : 'group-hover:text-app-light-blue'" class="block"
        :href="route.href" @click.prevent="handleClick(route.href || '#')"
      >
        {{ route.text }}
      </a>
    </div>
  </div>
  <Hamburger />
</template>

<script lang="ts" setup>
import { useActiveRoute } from '~/composables/useActiveRoute'
import { useMobileMenu } from '~/composables/useMobileMenu'
import { useRouteStore } from '~/stores/routes'
const router = useRouter()
const { isOpen, toggle } = useMobileMenu()
const routeStore = useRouteStore()
const allRoutes = routeStore.routes
const { getActiveRoute } = useActiveRoute()
const activeHash = computed(() => `#${getActiveRoute()}`)
const handleClick = (href: string) => {
  router.push(href)
  toggle(false)
}
</script>
