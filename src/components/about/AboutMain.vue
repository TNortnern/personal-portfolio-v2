<template>
  <div class="bg-white h-screen">
    <div id="about" class="main-container py-12">
      <div class="sticky top-4 flex justify-end">
        <CloseButton
          class="text-black border-2 p-2"
          @click="$router.push('/')"
        />
      </div>
      <div class="text-5xl lg:text-7xl mb-8 pl-4">
        About <span class="text-app-light-blue">Me</span>
      </div>
      <div class="flex flex-wrap justify-center pl-4 lg:justify-between">
        <div class="w-full">
          <h3 class="pb-4 text-3xl font-bold">
            Who am I?
          </h3>
          <p class="pb-4">
            A fast growing full time developer passionate about Web
            Development. I have a large array of skill-sets from building complex
            UI/UX, creating advanced API's, and HTML email development.
          </p>
          <p class="pb-4">
            I always stride to get better and learn more everyday I work. Something that helps me get better
            and learn is teaching/consulting, I currently do it as a freelancer.
            It's always a great feeling to be confident in what you do and able
            to help others thrive.
          </p>
          <p class="pb-4">
            I primarily specialize in JavaScript and it's ecosystem, most notably VueJS and NodeJS.
          </p>
          <ul class="flex flex-col pb-4">
            <AboutHighlight
              href="/#contact"
              name="Email"
              content="traynorthern@yahoo.com"
            />
            <AboutHighlight
              name="Github"
              content="tnortnern"
              href="https://github.com/tnortnern"
            />
            <!-- <AboutHighlight name="LinkedIn" content="https://trayvonnorthern.tech" /> -->
          </ul>
          <router-link
            to="/resume"
            class="border border-app-light-blue duration-200 px-6 py-2 text-app-light-blue rounded-md hover:(bg-app-light-blue text-white)"
          >
            Resume
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>
