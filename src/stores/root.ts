import { defineStore } from 'pinia'
import { useProjectStore } from './projects'
import { useProjects } from '~/composables/useProjects'
import api from '~/api'
import type { Media } from '~/types'
interface Testimonial {
  id: string
  avatar: Media
  name: string
  body: string
  url: string
}
interface RootState {
  appLoading: boolean
  testimonials: Testimonial[]
}

export const useRootStore = defineStore({
  id: 'root',
  state: (): RootState => ({
    appLoading: false,
    testimonials: [],
  }),
  getters: {
    dataLoaded(state) {
      const projectStore = useProjectStore()
      return !!state.testimonials.length && !!projectStore.all.length
    },
  },
  actions: {
    async initialize() {
      const { data: testimonials } = await api.get('/testimonials')
      this.testimonials = testimonials
    },
    toggleAppLoading(value: boolean) {
      if (typeof value !== 'undefined') this.appLoading = value
      else this.appLoading = !this.appLoading
    },
  },
})
