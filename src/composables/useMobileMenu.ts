const expanded = ref(false)

export function useMobileMenu() {
  watch(expanded, (value) => {
    if (value) document.querySelector('body').classList.add('overflow-y-hidden')
    else document.querySelector('body').classList.remove('overflow-y-hidden')
  })
  return {
    isOpen: () => expanded.value,
    toggle: (value?: boolean) => value || value === false ? expanded.value = value : expanded.value = !expanded.value,
  }
}
