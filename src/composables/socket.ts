export const useSocket = (subscribe: string, action: (data: unknown) => void) => {
  const toast = useToast()

  try {
    const { $socket } = useNuxtApp()

    if ($socket.connected) {
      onMounted(() => $socket.on(subscribe, (data: unknown) => action(data)))
      onUnmounted(() => $socket.off(subscribe))
    }
  } catch (e: unknown) {
    toast.error((e as Error).message)
  }
}
