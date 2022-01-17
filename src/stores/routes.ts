import { defineStore } from 'pinia'
interface AppRoute {
  text: string
  to?: string
  href?: string
  button?: boolean
}
interface RootState {
  routes: AppRoute[]
}
const routes: AppRoute[] = [
  {
    text: 'Services',
    href: '#services',
  },
  {
    text: 'Works',
    href: '#works',
  },
  {
    text: 'Testimonials',
    href: '#testmonials',
  },
  {
    text: 'Contact',
    href: '#contact',
    button: true,
  },
]
export const useRouteStore = defineStore({
  id: 'routes',
  state: (): RootState => ({
    routes,
  }),
})
