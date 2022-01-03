<template>
  <client-only>
    <div
      class="py-12 z-20 fixed top-0 w-full bg-app-dark-blue duration-250"
      :class="{
        'shadow-2xl pt-6 pb-6': active
      }"
    >
      <nav ref="navbar" class="main-container">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <img class="rounded-full w-12 h-12" src="/mainavatar.jpg" alt="human">
            <p>Trayvon Northern</p>
          </div>
          <ul class="flex items-center gap-4">
            <li v-for="i in 5" :key="i" class="group">
              <a class="duration-150 group-hover:text-app-light-blue" href="">Link 0{{ i+1 }}</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </client-only>
</template>

<script lang="ts" setup>
import { ref } from '@nuxtjs/composition-api'
import { useEventListener } from '~/composables/useEventListener'
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
  useEventListener(window, 'load', () => {
    if (!navbar.value) return
    if (window.scrollY > navbar.value.offsetTop + navbar.value.offsetHeight)
      active.value = true

    else
      active.value = false
  })
}

</script>
