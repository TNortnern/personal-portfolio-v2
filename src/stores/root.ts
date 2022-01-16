import { defineStore } from 'pinia'
import { useProjectStore } from './projects'
import { useProjects } from '~/composables/useProjects'

interface RootState {
  user: Record<string, any> | null
  projects: any
}

export const useRootStore = defineStore({
  id: 'root',
  state: (): RootState => ({
    user: null,
    projects: [],
  }),
  getters: {
    isReady(state) {
      return !!state.user
    },
  },
  actions: {
    async initialize() {
      const projectStore = useProjectStore()
      await projectStore.initialize()
      const { fetch } = useProjects()
      const { data } = await fetch()
      if (data)
        this.projects = data
    },
  },
})
