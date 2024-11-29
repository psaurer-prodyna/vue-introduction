import { ref, watchEffect, toValue, type Ref } from 'vue'

interface UseFetchReturn<T> {
  data: Ref<T | null>
  errorMessage: Ref<string | null>
  isLoading: Ref<boolean>
}

export function useFetch<T>(url: Ref<string> | string | (() => string)): UseFetchReturn<T> {
  const data = ref(null)
  const errorMessage = ref('')
  const isLoading = ref(false)

  const fetchData = async () => {
    // reset state before fetching
    data.value = null
    errorMessage.value = ''

    try {
      isLoading.value = true
      const response = await fetch(toValue(url))
      data.value = await response.json()
    } catch (err) {
      errorMessage.value = err instanceof Error ? err.message : 'An unknown error occurred'
    } finally {
      isLoading.value = false
    }
  }

  watchEffect(async () => {
    await fetchData()
  })

  return { data, errorMessage, isLoading }
}
