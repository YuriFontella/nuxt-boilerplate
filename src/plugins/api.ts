export default defineNuxtPlugin(() => {
  const { public: { baseURL } } = useRuntimeConfig()
  const toast = useToast()

  const api = $fetch.create({
    baseURL: baseURL as string,

    onRequest({ options }) {
      const cookie = useCookie('token')

      options.headers = options.headers || {}

      if (cookie.value) {
        (options.headers as unknown as Record<string, string>)['x-access-token'] = cookie.value
      }
    },

    onRequestError({ error }) {
      toast.error(error.message)
    },

    onResponseError({ response }) {
      toast.error(response._data.message)
    }
  })

  return {
    provide: { api }
  }
})
