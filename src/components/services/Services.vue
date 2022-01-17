<template>
  <SectionBlock caption="What I Offer?" title="My Services">
    <div class="flex justify-between mt-16">
      <div v-for="{ title, description } in serviceItems" :key="title" class="w-[20%]">
        <span class="bg-app-dark-blue rounded-full p-4 flex items-center justify-center text-white w-22 h-22 mx-auto mb-5">
          icn
        </span>
        <div class="text-center">
          <h5 class="text-2xl mb-5">
            {{ title }}
          </h5>
          <span class="text-gray-400 block">
            {{ description }}
          </span>
        </div>
      </div>
    </div>
  </SectionBlock>
</template>

<script lang="ts" setup>
const serviceItems = [
  {
    title: 'Website Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eius maiores voluptatem tenetur quos ratione libero architecto quae sequi rem.',
  },
  {
    title: 'Tutoring',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eius maiores voluptatem tenetur quos ratione libero architecto quae sequi rem.',
  },
  {
    title: 'Consultation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eius maiores voluptatem tenetur quos ratione libero architecto quae sequi rem.',
  },
  {
    title: 'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eius maiores voluptatem tenetur quos ratione libero architecto quae sequi rem.',
  },
]
</script>
