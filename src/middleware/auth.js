export default defineNuxtRouteMiddleware(async (to, from) => {

  const cookie = useCookie('token')

  if (!cookie.value) {

    return navigateTo('/login')

  }

  else {

    const user = useState('user')

    if (!user.value) {

      const { $api } = useNuxtApp()

      const { data } = await useAsyncData('user', () => $api('/api/user'))

      if (data.value) {

        user.value = data

      }
    }

    else return true

  }

})
