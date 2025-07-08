import { AccountsForms } from "@/composables/useAccountsForms/useAccountsForms"
import { AccountStore } from "@/stores/accounts"
import { Account } from "@/types/main"
import { getIcon } from "@/utils/iconsMapper"
import { ConfirmService } from '@/services/ConfirmService'

//задел на централизацию - пока сделал хуком хоть и в конфиге (не уверен что лучшее решение)
export const useButtons = (accountsForms: AccountsForms, accountsStore: AccountStore) => {

  return {
    delete: {
      icon: getIcon(`TRASH`),
      help: `Удалить`,
      danger: true,
      action: (id: Account[`id`]) => {
        ConfirmService.confirm({
          text: `Вы уверены, что хотите удалить аккаунт?`,
          onConfirm: () => accountsStore.removeAccount(id)
        })
      },
    },
    add: {
      label: `Добавить аккаунт`,
      action: () => {
        accountsStore.addAccount()
      },
    },
    save: {
      label: `Сохранить все`,
      action: async() => {
        const res = await accountsForms.onSave()
        accountsStore.updateAccounts(res)
      },
    },
    reset: {
      label: `Reset DB`,
      danger: true,
      action: () => {
        ConfirmService.confirm({
          text: `Вы уверены, что хотите удалить базу?`,
          onConfirm: () => accountsStore.resetDb()
        })
      }
    }
  }
} 