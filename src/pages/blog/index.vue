<template>
  <div class="min-h-screen bg-white">
    <Navbar>
      <router-link class="text-xl duration-150 hover:text-app-light-blue" to="/">
        Go to my website
      </router-link>
    </Navbar>
    <div class="pt-32 lg:pt-35 pb-12">
      <div class="main-container divide-y-2 divide-gray-200 ">
        <div>
          <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Blog
          </h2>
          <!-- <div class="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
              <p class="text-xl text-gray-500">
                Get weekly articles in your inbox on how to grow your business.
              </p>
              <form class="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
                <div>
                  <label for="email-address" class="sr-only">Email address</label>
                  <input id="email-address" name="email-address" type="email" autocomplete="email" required="" class="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-app-light-blue focus:border-app-light-blue lg:max-w-xs" placeholder="Enter your email">
                </div>
                <div class="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
                  <button type="button" class="w-full bg-app-light-blue px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white duration-200 hover:bg-app-light-blue/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-app-light-blue sm:w-auto sm:inline-flex">
                    Notify me
                  </button>
                </div>
              </form>
            </div> -->
        </div>
        <div class="mt-6 pt-5 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          <div v-for="post in store.allPosts" :key="post.title" class="hover:bg-gray-100 duration-200 p-4">
            <p class="text-sm text-gray-500">
              {{ dateFormat(post.published_at) }}
            </p>
            <a :href="post.url" target="__blank" class="mt-2 block">
              <p class="text-xl font-semibold text-gray-900">
                {{ post.title }}
              </p>
              <p class="mt-3 text-base text-gray-500">
                {{ post.description }}
              </p>
            </a>
            <div class="mt-3">
              <a :href="post.url" target="__blank" class="text-base font-semibold text-app-light-blue hover:text-app-light-blue">
                Read full story
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBlogStore } from '~/stores/blog'
const store = useBlogStore()
const dateFormat = (date: Date) => {
  const dateInstance = new Date(date)
  return `${dateInstance.toLocaleString('default', { month: 'long' }).slice(0, 3)} ${dateInstance.getDate()}, ${dateInstance.getFullYear()}`
}
</script>
