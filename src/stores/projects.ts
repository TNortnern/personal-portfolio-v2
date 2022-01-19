import { acceptHMRUpdate, defineStore } from 'pinia'
import { useProjects } from '~/composables/useProjects'

interface ImageFormat {
  ext: string
  name: string
  url: string
  size: number
  width: number
  height: number
}
interface ImageFormats {
  small: ImageFormat
  medium: ImageFormat
  thumbnail: ImageFormat
}
interface Media {
  id: string
  url: string
  formats: ImageFormats
}

interface Role {
  id: string
  name: string
}
interface Technology {
  id: string
  name: string
  image?: Media
}
export interface Project {
  id: string
  title: string
  description: string
  media: Media[]
  roles: Role[]
  isActive: boolean
  importance: number
  createdAt: Date
  hosted_url: string
  technologies: Technology[]
}
interface RootState {
  all: Project[]
}

export const useProjectStore = defineStore({
  id: 'projects',
  state: (): RootState => ({
    all: [],
  }),
  getters: {
    getProject: (state: RootState) => {
      return (title: string) => state.all.find(p => p.title === title)
    },
    getProjectIndex: (state: RootState) => {
      return (title: string) => state.all.findIndex(p => p.title === title)
    },
  },
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
