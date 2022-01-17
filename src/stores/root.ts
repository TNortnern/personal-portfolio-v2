import { defineStore } from 'pinia'
import { useProjects } from '~/composables/useProjects'

interface RootState {
  appLoading: boolean
  projects: any
}

export const useRootStore = defineStore({
  id: 'root',
  state: (): RootState => ({
    appLoading: false,
    projects: [],
  }),
  actions: {
    async initialize() {
      const { fetch } = useProjects()
      const { data } = await fetch()
      this.projects = data
    },
    toggleAppLoading(value: boolean) {
      if (typeof value !== 'undefined') this.appLoading = value
      else this.appLoading = !this.appLoading
    },
  },
})
