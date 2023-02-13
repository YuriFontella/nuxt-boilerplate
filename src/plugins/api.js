export default defineNuxtPlugin(() => {

  const { baseURL } = useRuntimeConfig()

  const toast = useToast()

  const api = $fetch.create({
    baseURL,

    onRequest({ options }) {

      const cookie = useCookie('token')

      options.headers = options.headers || {}

      if (cookie.value) {
        options.headers['x-access-token'] = cookie.value
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