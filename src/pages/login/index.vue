<template>
  <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 h-screen">
    <div class="w-full max-w-md space-y-8">
      <div>
        <UserCircleIcon class="mx-auto h-12 w-auto text-indigo-600" />
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="login">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">E-mail</label>
            <input v-model="email" id="email-address" name="email" type="email" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="E-mail" />
          </div>
          <div>
            <label for="password" class="sr-only">Senha</label>
            <input v-model="password" id="password" name="password" type="password" class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Senha" />
          </div>
        </div>

        <div>
          <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { LockClosedIcon, UserCircleIcon } from '@heroicons/vue/20/solid'

const email = ref()
const password = ref()

const toast = useToast()

const cookie = useCookie('token')

const { $api } = useNuxtApp()

const { data, execute } = useAsyncData('login', () => $api('/api/login', { method: 'post', body: { email, password } }), { immediate: false })

async function login() {

  await execute()

  if (data.value) {

    cookie.value = Date.now()

    return navigateTo({ name: 'index' })
  }

  toast.error('usuário ou senha inválidos')
}
</script>