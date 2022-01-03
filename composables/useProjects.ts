import type { AxiosError, AxiosResponse } from 'axios'
import axios from 'axios'
export function useProjects() {
  return {
    async fetch() {
      interface ApiRequest {
        data: any
        error: any
      }
      const request: ApiRequest = {
        data: null,
        error: null,
      }

      try {
        const { data }: AxiosResponse = await axios.get('https://personalport-be.herokuapp.com/projects')
        request.data = data
      }
      catch (err: AxiosError | unknown) {
        request.error = err
      }
      return request
    },
  }
}
