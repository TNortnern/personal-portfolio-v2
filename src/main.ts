// register vue composition api globally
import devalue from '@nuxt/devalue'
import VGenericForm from 'v-generic-form'
import VueSmoothScroll from 'vue3-smooth-scroll'
import VueObserveVisibility from 'vue3-observe-visibility2'
import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
// import { createPinia } from 'pinia'
// import VueLazyLoad from 'vue3-lazyload'
import VueLazyLoad from '@jambonn/vue-lazyload'

import App from './App.vue'

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// your custom styles here
import './styles/main.css'
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL,
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ // x, y are replaced with left/top to define position, but when used with an element selector (el) will be used as offset
              el: to.hash,
              // offset has to be set as left and top at the top level
              // left: 0,
              // top: 0,
              behavior: 'smooth',
            })
          }, 300)
        })
      }
    },
  },
  async(ctx) => {
    const { app } = ctx
    app.use(VGenericForm)
    app.use(VueSmoothScroll)
    app.use(VueObserveVisibility)

    app.use(VueLazyLoad, {
      observer: true,

      // optional
      observerOptions: {
        rootMargin: '700px',
        threshold: 0.1,
      },
      preLoad: 1.3,
      // error: errorimage,
      // loading: LoadImage,
      attempt: 5,
    })
    // if (isClient) {
    //   app.use(AOS.init({
    //     once: true,
    //   }))
    // }

    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
  },
  {
    transformState(state) {
      return import.meta.env.SSR ? devalue(state) : state
    },
  },
)
