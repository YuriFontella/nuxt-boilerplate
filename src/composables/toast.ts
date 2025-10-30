interface ToastState {
  type?: 'error' | 'success'
  message?: string
  close?: boolean
}

export const useToast = () => {
  const toast = useState<ToastState>('toast')

  function error(message: string) {
    toast.value = { type: 'error', message }
  }

  function success(message: string) {
    toast.value = { type: 'success', message }
  }

  function close() {
    toast.value = { close: true }
  }

  return {
    error,
    success,
    close
  }
}
