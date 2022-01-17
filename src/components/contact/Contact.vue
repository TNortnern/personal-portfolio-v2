<template>
  <div class="bg-app-dark-blue py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24 text-white">
    <div class="relative max-w-xl mx-auto">
      <!--
      <svg class="absolute left-full transform translate-x-1/2 text-app-light-blue fill-current" width="404" height="404" viewBox="0 0 404 404" aria-hidden="true">
        <defs>
          <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
      </svg>
      <svg class="absolute right-full bottom-0 transform -translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
        <defs>
          <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
      </svg> -->
      <SectionHeader title="Let's Talk" caption="Wanna work with me?" />
      <div>
        <form class="grid grid-cols-1 gap-y-6 text-black" @submit.prevent="submit()">
          {{ form }}
          <AppInput id="name" v-model="form.name" name="name" label="Name" autocomplete="given-name" />
          <AppInput id="email" v-model="form.email" name="email" label="Email" autocomplete="email" />
          <AppInput id="phone" v-model="form.phone" name="phone" label="Phone Number(optional)" autocomplete="phone" />
          <AppTextarea id="message" v-model="form.message" name="message" label="Message" />
          <div>
            <button type="submit" class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-app-light-blue duration-200 hover:bg-opacity-87 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black">
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
})
const submit = () => {
  console.log('submitted', form)
}
</script>
