import { acceptHMRUpdate, defineStore } from 'pinia'
import { useProjects } from '~/composables/useProjects'
import type { Media } from '~/types'

interface Role {
  id: string
  name: string
}
interface Technology {
  id: string
  name: string
  image?: Media
}
interface Category {
  id: string
  title: string
}
export interface Project {
  id: string
  title: string
  description: string
  category: Category
  media: Media[]
  roles: Role[]
  isActive: boolean
  importance: number
  createdAt: Date
  hosted_url: string
  technologies: Technology[]
}
export type Tab = 'all' | 'website' | 'email' | 'design' | 'package'
interface RootState {
  all: Project[]
  categories: string[]
  selectedCategory: Tab
}

export const useProjectStore = defineStore({
  id: 'projects',
  state: (): RootState => ({
    all: [],
    categories: [],
    selectedCategory: 'all',
  }),
  getters: {
    getProject: (state: RootState) => {
      return (title: string) => state.all.find(p => p.title === title)
    },
    getProjectIndex: (state: RootState) => {
      return (title: string) => state.all.findIndex(p => p.title === title)
    },
    allFiltered: (state: RootState) => {
      if (state.selectedCategory === 'all') return state.all
      return state.all.filter((p) => {
        if (p.category.title.toLowerCase() === state.selectedCategory.toLowerCase()) return p
        return false
      })
    },
    getActiveCategoryTab(state: RootState) {
      return state.selectedCategory
    },
  },
  actions: {
    async initialize() {
      const { fetch } = useProjects()
      const { data } = await fetch()
      for (const { category } of data) {
        if (category && !this.categories.includes(category.title))
          this.categories.push(category?.title)
      }
      this.all = data
    },
    setActiveCategoryTab(tab: Tab) {
      this.selectedCategory = tab
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProjectStore, import.meta.hot))
