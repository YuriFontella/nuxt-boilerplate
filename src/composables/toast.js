export const useToast = () => {

  const toast = useState('toast')

  function error(message) {

    toast.value = { type: 'error', message }
  }

  function success(message) {

    toast.value = { type: 'success', message }
  }

  return {
    error,
    success
  }
}