<template>
  <div>
    <a
      v-if="href"
      :href="href"
      target="__blank"
      class="inline-flex pb-2 duration-200 hover:text-app-light-blue"
    >
      <div class="w-28 sm:w-56">{{ name }}:</div>
      <div class="sm:ml-12">{{ content }}</div>
    </a>
    <li
      v-else
      :class="
        typeof onClick !== 'undefined' ? 'cursor-pointer duration-200 hover:text-primary-blue' : ''
      "
      class="flex pb-2"
      @click="onClick ? onClick() : () => {}"
    >
      <div class="w-28 sm:w-56">
        {{ name }}:
      </div>
      <div class="sm:ml-12">
        {{ content }}
      </div>
    </li>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  name: string
  content: string
  href: string
  onClick?: () => any
}>()

</script>
