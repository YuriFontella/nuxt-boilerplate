export const useSocket = (subscribe, action) => {

  const toast = useToast()

  try {

    const { $socket } = useNuxtApp()

    if ($socket.connected) {

      onMounted(() => $socket.on(subscribe, (data) => action(data)))
      onUnmounted(() => $socket.off(subscribe))
    }

  } catch (e) {

    toast.error(e.message)

  }

}