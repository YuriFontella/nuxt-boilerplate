export const useToast = () => {

  const toast = useState('toast')

  function error(message) {

    toast.value = { type: 'error', message }
  }

  function success(message) {

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