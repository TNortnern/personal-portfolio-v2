import { acceptHMRUpdate, defineStore } from 'pinia'

export const useProjectStore = defineStore('projects', () => {
  const state = () => {
    return {
      // all these properties will have their type inferred automatically
      counter: 0,
      name: 'Eduardo',
      isAdmin: true,
    }
  }
  return {
    state,
    all: [],
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProjectStore, import.meta.hot))
