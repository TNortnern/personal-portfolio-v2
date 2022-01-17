// register vue composition api globally
import devalue from '@nuxt/devalue'
import VGenericForm from 'v-generic-form'
import VueSmoothScroll from 'vue3-smooth-scroll'
import VueObserveVisibility from 'vue3-observe-visibility2'
import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { createPinia } from 'pinia'
import VueLazyLoad from 'vue3-lazyload'

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
  { routes, base: import.meta.env.BASE_URL },
  async(ctx) => {
    const { app } = ctx
    app.use(VGenericForm)
    app.use(VueSmoothScroll)
    app.use(VueObserveVisibility)
    app.use(VueLazyLoad)
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
