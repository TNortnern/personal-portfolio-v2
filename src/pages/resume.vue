<template>
  <div class="bg-white">
    <div class="main-container">
      <div class="sticky top-4 flex justify-end">
        <CloseButton
          class="text-black border-2 p-2"
          @click="$router.push('/')"
        />
      </div>
      <ResumeContent />
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>
