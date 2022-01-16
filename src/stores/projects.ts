import { acceptHMRUpdate, defineStore } from 'pinia'
import { useProjects } from '~/composables/useProjects'

// export const useProjectStore = defineStore('projects', () => {
//   const state = () => {
//     return {
//       // all these properties will have their type inferred automatically
//       counter: 0,
//       name: 'Eduardo',
//       isAdmin: true,
//       all: [],
//     }
//   }
//   const all = ref([])
//   const initialize = async() => {
//     const { fetch } = useProjects()
//     const { data } = await fetch()
//     all.value = data
//     state().all = data
//   }
//   return {
//     state,
//     initialize,
//     all: all.value,
//   }
// })

interface RootState {
  all: any
}

export const useProjectStore = defineStore({
  id: 'projects',
  state: (): RootState => ({
    all: [],
  }),
  actions: {
    async initialize() {
      const { fetch } = useProjects()
      const { data } = await fetch()
      this.all = data
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProjectStore, import.meta.hot))
