import { defineStore } from 'pinia'

interface RootState {
  appLoading: boolean
}

export const useRootStore = defineStore({
  id: 'root',
  state: (): RootState => ({
    appLoading: false,
  }),
  actions: {
    toggleAppLoading(value: boolean) {
      if (typeof value !== 'undefined') this.appLoading = value
      else this.appLoading = !this.appLoading
    },
  },
})
