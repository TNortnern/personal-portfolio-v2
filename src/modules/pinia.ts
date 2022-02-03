import { createPinia } from 'pinia'
import type { UserModule } from '~/types'
import { useProjectStore } from '~/stores/projects'
import { useRootStore } from '~/stores/root'
import { useBlogStore } from '~/stores/blog'
// Setup Pinia
// https://pinia.esm.dev/
export const install: UserModule = ({ initialState, app, router }) => {
  const pinia = createPinia()
  app.use(pinia)
  // Refer to
  // https://github.com/antfu/vite-ssg/blob/main/README.md#state-serialization
  // for other serialization strategies.
  if (import.meta.env.SSR)
    initialState.pinia = pinia.state.value

  else
    pinia.state.value = initialState.pinia || {}

  router.beforeEach(async(to, from, next) => {
    const projectStore = useProjectStore(pinia)
    const blogStore = useBlogStore(pinia)
    const rootStore = useRootStore(pinia)
    if (!projectStore.all.length || !rootStore.dataLoaded) {
      // perform the (user-implemented) store action to fill the store's state
      await projectStore.initialize()
      await rootStore.initialize()
    }
    if (!blogStore.all.length)
      await blogStore.initialize()

    next()
  })
}
