const activeLink = ref('')
export function useActiveRoute(link?: string) {
  // const router = useRouter()
  return {
    getActiveRoute: () => activeLink.value,
    setActiveRoute(v: any) {
      if (v) {
        if (link)
          activeLink.value = link
        // router?.push(link ? `#${link}` : '')
      }
    },
  }
}
