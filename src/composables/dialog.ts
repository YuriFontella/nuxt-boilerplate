interface DialogState {
  title?: string
  message?: string
  action?: () => void
  open: boolean
}

interface DialogOptions {
  title: string
  message: string
  action: () => void
}

export const useDialog = () => {
  const dialog = useState<DialogState>('dialog')

  function open({ title, message, action }: DialogOptions) {
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
