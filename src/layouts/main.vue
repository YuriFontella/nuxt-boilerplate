<template>
  <div>
    <slot />

    <footer class="bg-white">
      <div class="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
        <nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          <div v-for="item in navigation.main" :key="item.name">
            <NuxtLink :to="item.href" class="text-[10px] leading-6 text-gray-600 hover:text-gray-900 uppercase">{{ item.name }}</NuxtLink>
          </div>

          <button class="text-[10px] leading-6 text-gray-600 hover:text-gray-900 uppercase" @click="logout">Logout</button>
        </nav>
      </div>
    </footer>

    <LibDialog />
  </div>
</template>

<script setup>
import LibDialog from '@/components/libs/dialog.vue'

const navigation = {
  main: [
    { name: 'Usuário', href: '/user' },
    { name: 'Toast', href: '/examples/toast' },
    { name: 'Dialog', href: '/examples/dialog' }
  ]
}

const route = useRoute()

function logout() {
  const cookie = useCookie('token')

  cookie.value = null

  if (!cookie.value) {

    navigateTo({ name: 'login' })
  }
}

const x = ref(route.path)

watch(route, () => {
  x.value = route.path
})
</script>