<template>
  <div class="text-center mt-40">
    <CloudIcon class="mx-auto h-12 w-12 text-gray-400" />
    <h3 class="mt-2 text-sm font-medium text-gray-900">Socket.io</h3>
    <p class="mt-1 text-sm text-gray-500">Você deve criar um servidor para isso</p>
  </div>
</template>

<script setup>
import { CloudIcon } from '@heroicons/vue/24/solid'

definePageMeta({
  layout: 'main',
  middleware: 'auth'
})

const notification = ref()

const user = useState('user')

useSocket(user.id, (data) => {
  notification.value = data
})
</script>