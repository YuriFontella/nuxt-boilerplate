import { Manager } from "socket.io-client"

export default defineNuxtPlugin(() => {

  const { baseURL } = useRuntimeConfig()

  if (!baseURL) return

  let socket

  let manager = new Manager(baseURL, {
    autoConnect: false
  })

  socket = manager.socket("/")

  manager.open((e) => {

    if (e) {

      socket = null

    } else {

      socket.connect()

    }
  })

  return {
    provide: {
      socket: socket
    }
  }
})