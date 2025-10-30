<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <NuxtLink :to="{ name: 'login' }">
          <h2 class="text-lg font-semibold leading-8 tracking-tight text-indigo-600">{{ user.email }}</h2>
        </NuxtLink>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Página Inicial</p>
        <p class="mt-6 text-lg leading-8 text-gray-600">Este template está utilizando como demonstração o framework chamado tailwind, acesse todos os componentes na página oficial e crie os seus próprios templates.</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div v-for="feature in features" :key="feature.name" class="relative pl-16">
            <NuxtLink :to="feature.href">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {{ feature.name }}
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
            </NuxtLink>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/vue/24/outline'
import type { Component } from 'vue'
import type { User } from '@@/types/global'

definePageMeta({
  layout: 'main',
  middleware: 'auth'
})

interface Feature {
  name: string
  description: string
  icon: Component
  href: string
}

const features: Feature[] = [
  {
    name: 'Dados de uma rota',
    description:
      'Acesse aqui para ver um exemplo de uma rota realizando uma requisição',
    icon: CloudArrowUpIcon,
    href: 'user'
  },
  {
    name: 'Gerando um toast',
    description:
      'Apresentando um toast criado com tailwind e utilizando composable para as funções',
    icon: LockClosedIcon,
    href: '/examples/toast'
  },
  {
    name: 'Trabalhando com dialog',
    description:
      'Recurso para trabalhar com dialog enviando uma função para ser executada',
    icon: ArrowPathIcon,
    href: '/examples/dialog'
  },
  {
    name: 'Socket e Vue',
    description:
      'Composable para se inscrever em um canal e já programado para sair quando trocar de rota',
    icon: FingerPrintIcon,
    href: '/examples/socket'
  },
]

const user = useState<User>('user')
</script>
