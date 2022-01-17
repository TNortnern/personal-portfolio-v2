import type { AxiosError, AxiosResponse } from 'axios'
import axios from 'axios'
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
        const { data }: AxiosResponse = await axios.get('https://personalport-be.herokuapp.com/projects')
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
