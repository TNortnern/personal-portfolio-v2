import type { AxiosResponse } from 'axios'
import { acceptHMRUpdate, defineStore } from 'pinia'
import api from '~/api'
interface Post {
  title: string
  description: string
  published: boolean
  published_at: Date
  slug: string
  type_of: string
  path: string
  url: string
  cover_image: string
  tag_list: string[]
}
interface RootState {
  all: Post[]
}

export const useBlogStore = defineStore({
  id: 'blog',
  state: (): RootState => ({
    all: [],
  }),
  getters: {
    allPosts: (state: RootState) => state.all,
  },
  actions: {
    async initialize() {
      try {
        const { data }: AxiosResponse<Post[]> = await api.get('/blogs')
        this.all = data
      }
      catch (error) {

      }
    },

  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useBlogStore, import.meta.hot))
