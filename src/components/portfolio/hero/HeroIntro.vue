<template>
  <div class="main-container pt-36">
    <div class="text-center md:text-left">
      <h1 class="text-app-light-blue text-lg mb-2 uppercase">
        Hello, my name is Trayvon
      </h1>
      <p class="text-5xl mb-2">
        I make and design websites.
      </p>
      <div class="text-xl mb-6">
        <p>
          I'm a fullstack JavaScript software developer, specializing in the modern latest and greatest technologies.
        </p>
        <p>
          I also write about the web and guide other developers to achieve their goals.
        </p>
      </div>
      <div class="flex flex-wrap justify-center md:justify-start gap-3">
        <a v-smooth-scroll href="#contact" class="hero-button">
          Get in touch
        </a>
        <router-link to="/resume" class="hero-button">
          Resume
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-button {
  @apply border border-app-light-blue px-16 py-2.5 duration-150 text-xl rounded-md text-app-light-blue hover:(bg-gray-100 bg-opacity-10) w-full md:(w-auto);
}
</style>
