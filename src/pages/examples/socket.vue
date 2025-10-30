<template>
  <div class="text-center mt-40">
    <CloudIcon class="mx-auto h-12 w-12 text-gray-400" />
    <h3 class="mt-2 text-sm font-medium text-gray-900">Socket.io</h3>
    <p class="mt-1 text-sm text-gray-500">Você deve criar um servidor para isso</p>
  </div>
</template>

<script setup lang="ts">
import { CloudIcon } from '@heroicons/vue/24/solid'
import type { User } from '@@/types/global'

definePageMeta({
  layout: 'main',
  middleware: 'auth'
})

const notification = ref<unknown>()

const user = useState<User>('user')

useSocket(user.value?.id?.toString() || '', (data: unknown) => {
  notification.value = data
})
</script>
