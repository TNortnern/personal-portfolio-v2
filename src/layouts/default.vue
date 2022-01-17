<template>
  <main>
    <router-view v-slot="{ Component }">
      <transition mode="out-in" name="page-fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script lang="ts" setup>

</script>
