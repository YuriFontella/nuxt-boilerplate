import { Manager } from "socket.io-client"
import type { Socket } from "socket.io-client"

export default defineNuxtPlugin(() => {
  const { public: { baseURL } } = useRuntimeConfig()

  if (!baseURL) return

  let socket: Socket | null = null

  const manager = new Manager(baseURL as string, {
    autoConnect: false
  })

  socket = manager.socket("/")

  manager.open((e) => {
    if (e) {
      socket = null
    } else {
      socket?.connect()
    }
  })

  return {
    provide: {
      socket: socket
    }
  }
})
