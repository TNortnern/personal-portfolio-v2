const expanded = ref(false)

export function useMobileMenu() {
  return {
    isOpen: () => expanded.value,
    toggle: () => expanded.value = !expanded.value,
  }
}
