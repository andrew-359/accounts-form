import type { ConfirmDialogOptions } from '@/types/main'

//todo interface
class ConfirmServiceClass {
  confirm(options: ConfirmDialogOptions) {
    const text = options.text ?? `Уверены?`
    if (window.confirm(text)) {
      options.onConfirm?.()
    } else {
      options.onCancel?.()
    }
  }
}

export const ConfirmService = new ConfirmServiceClass()