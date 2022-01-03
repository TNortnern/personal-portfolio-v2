<template>
  <SectionBlock caption="What I Offer?" title="My Services">
    <div class="flex justify-between mt-16">
      <div v-for="i in 4" :key="i" class="w-[20%]">
        <span class="bg-app-dark-blue rounded-full p-4 flex items-center justify-center text-white w-24 h-24 mx-auto mb-5">
          icn
        </span>
        <div class="">
          <h5 class="text-2xl mb-5">
            User Research
          </h5>
          <span v-for="k in 1 * i" :key="k" class="text-gray-400 block">
            Lorem ipsum dolor sit amet.
          </span>
        </div>
      </div>
    </div>
  </SectionBlock>
</template>
<script lang="ts" setup>
import SectionBlock from '../common/SectionBlock.vue';

</script>