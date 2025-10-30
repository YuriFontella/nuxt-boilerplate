<template>
  <div class="bg-white">
    <div class="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-lg text-center">
        <h2 class="text-4xl font-bold tracking-tight text-gray-900">Trabalhando com dialog</h2>
        <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
          Recurso para trabalhar com dialog enviando uma função para ser executada
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <button class="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="open">
            Abrir o componente
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'main'
})

const dialog = useDialog()

function open(): void {
  dialog.open({
    title: 'Eu sou o título',
    message: 'Tem certeza que eu sou a mensagem?',
    action: () => {
      console.log('Quando clico em executar vou aparecer no console')
    }
  })

  setTimeout(() => {
    dialog.close()
  }, 4000)
}
</script>
