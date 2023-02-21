<template>
  <div>
    <div>
      <img class="h-32 w-full object-cover lg:h-48" src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" />
    </div>
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
        <div class="flex">
          <img class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" :src="profile.avatar" alt="" />
        </div>
        <div class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
          <div class="mt-6 min-w-0 flex-1 sm:hidden md:block">
            <h1 class="truncate text-2xl font-bold text-gray-900">{{ profile.name }}</h1>
          </div>
          <div class="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
            <button type="button" class="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
              <EnvelopeIcon class="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
              <span>{{ profile.email }}</span>
            </button>
            <NuxtLink :to="{ name: 'index' }">
              <button type="button" class="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                <ArrowLeftIcon class="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                <span>Voltar</span>
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
        <h1 class="truncate text-2xl font-bold text-gray-900">{{ profile.name }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowLeftIcon, EnvelopeIcon } from '@heroicons/vue/20/solid'

const { $api } = useNuxtApp()

const { data: profile } = await useAsyncData('user', () => $api('/api/user'))
</script>