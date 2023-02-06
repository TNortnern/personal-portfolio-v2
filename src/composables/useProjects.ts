import type { AxiosError, AxiosResponse } from 'axios'
import api from '~/api'
import { useRootStore } from '~/stores/root'
export function useProjects() {
  interface ApiRequest {
    data: any
    error: any
  }
  const request: ApiRequest = {
    data: null,
    error: null,
  }
  return {
    async fetch() {
      const { toggleAppLoading } = useRootStore()
      toggleAppLoading(true)
      try {
        const { data }: AxiosResponse = await api.get('https://personal-portfolio-be.onrender.com/projects?isActive=true&_sort=importance:DESC')
        //
        request.data = data
      }
      catch (err: AxiosError | unknown) {
        request.error = err
      }
      finally {
        toggleAppLoading(false)
      }
      return request
    },
  }
}
