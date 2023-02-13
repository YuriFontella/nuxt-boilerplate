export default defineNuxtRouteMiddleware(async (to, from) => {

  const cookie = useCookie('token')

  if (to.meta.layout === 'main') {

    if (!cookie.value) {

      return navigateTo('/login')

    }

    else {

      useState('user', () => ({ email: 'user@nuxt.com' }))

    }

  } else if (to.name === 'login') {

    if (cookie.value) {

      return navigateTo('/examples')
    }

  }

})
