<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Personal Portfolio - Trayvon Northern ',
  meta: [
    {
      name: 'viewport',
      context: 'width=device-width, initial-scale=1.0',
    },
    {
      hid: 'description',
      name: 'description',
      content:
          'Hi I\'m Trayvon Northern, a fast growing full time web developer passionate about Web Development. I have a large array of skillsets from building complex UI\'s, creating advanced API\'s, and HTML email development.',
    },
    {
      name: 'og:description',
      content:
          'Hi I\'m Trayvon Northern, a fast growing full time web developer passionate about Web Development. I have a large array of skillsets from building complex UI\'s, creating advanced API\'s, and HTML email development.',
    },
    {
      name: 'og:title',
      content: 'Personal Portfolio - Trayvon Northern',
    },
    {
      name: 'og:image',
      content: 'https://i.imgur.com/oWZZCSh.png',
    },
  ],
})
</script>

<template>
  <router-view />
</template>
