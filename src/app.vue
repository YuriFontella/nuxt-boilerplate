<template>
  <NuxtLayout>
    <NuxtPage />
    <LibToast :delay="4000" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import LibToast from '@/components/libs/toast.vue'
</script>
