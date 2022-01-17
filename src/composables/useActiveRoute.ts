const activeLink = ref('')
export function useActiveRoute(link: string) {
  const router = useRouter()
  return {
    get: activeLink.value,
    setActiveRoute(v: any) {
      if (v) {
        activeLink.value = link
        router?.push(link ? `#${link}` : '')
      }
    },
  }
}
