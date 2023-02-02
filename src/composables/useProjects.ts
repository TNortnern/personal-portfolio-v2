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
        const { data }: AxiosResponse = await api.get('/getProjects')
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
