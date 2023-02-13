<template>
  <div>
    <slot />

    <LibDialog />
  </div>
</template>

<script setup>
import LibDialog from '@/components/libs/dialog.vue'

const route = useRoute()

const user = useState('user')

function logout() {
  const cookie = useCookie('token')

  cookie.value = null

  if (!cookie.value) {

    window.location.reload()
  }
}

const x = ref(route.path)

watch(route, () => {
  x.value = route.path
})
</script>