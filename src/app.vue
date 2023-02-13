<template>
  <NuxtLayout>
    <NuxtPage />
    <LibToast :delay="4000" />
  </NuxtLayout>
</template>

<script setup>
import LibToast from '@/components/libs/toast.vue'
</script>
