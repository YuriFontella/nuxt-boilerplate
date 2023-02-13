export const useDialog = () => {

  const dialog = useState('dialog')

  function open({ title, message, action }) {

    dialog.value = { title, message, action, open: true }
  }

  function close() {
    dialog.value = { open: false }
  }

  return {
    open,
    close
  }
}