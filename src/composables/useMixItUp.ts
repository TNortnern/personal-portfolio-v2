
export function useMixItUp(containerName = '.mix-container', options = {}) {
  const mixer = ref(null)
  if (typeof window === 'undefined')
    return
  onMounted(async() => {
    // import mixitup since it's only available on client we have to async import it
    const mixerInstance = await import('mixitup')
    mixer.value = mixerInstance.default(containerName, options)
  })
  return {
    mixer: computed(() => mixer.value),
  }
}
