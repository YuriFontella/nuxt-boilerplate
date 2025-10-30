<template>
  <div class="bg-white">
    <div class="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-lg text-center">
        <h2 class="text-4xl font-bold tracking-tight text-gray-900">Gerando um toast</h2>
        <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
          Apresentando um toast criado com tailwind e utilizando composable para as funções
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <button class="rounded-md bg-green-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600" @click="success">
            Sucesso
          </button>
          <button class="text-base font-semibold leading-7 text-red-600" @click="error">Gerar um erro</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'main'
})

const toast = useToast()

function success(): void {
  toast.success('Eu sou um sucesso')
}

function error(): void {
  toast.error('Eu sou um erro')
}
</script>
