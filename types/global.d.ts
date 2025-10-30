// Global type definitions for the Nuxt app

export interface User {
  id: number
  name: string
  email: string
  avatar: string
}

export interface ApiResponse<T = any> {
  data?: T
  message?: string
  error?: string
}

export interface LoginCredentials {
  email: string
  password: string
}
