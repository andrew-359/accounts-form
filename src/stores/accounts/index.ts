import { defineStore } from 'pinia'
import { STORE_MODULE } from '../names'
import type { AccountsState } from './types'
import { computed, reactive, toRef } from 'vue'
import { Account, AccountList } from '@/types/main'
import { getEmptyAccount } from './utils'
import saveService from '@/services/LocalStorageAccountsService'
import { ValidatedAccountForm } from '@/composables/useAccountsForms/types'

export const useAccountsStore = defineStore(STORE_MODULE.accounts, () => {
  const accountsForm = reactive<AccountsState>({
    //точка расширения
    accounts: []
  })

  const removeAccount = (accId: Account[`id`]) => {
    accountsForm.accounts = accountsForm.accounts.filter(({ id }) => id!== accId)
    saveAccounts()
  }
  
  const addAccount = () => {
    accountsForm.accounts.push(getEmptyAccount())
  }

  //расширяемо
  const saveAccounts = (accounts: AccountList = accountsForm.accounts) => {
    const done = saveService.saveAccounts(accounts)

    if (!done) {
      throw new Error(`try another save service`)
    }
  }

  //расширяемо
  const loadAccounts = () => {
    const accs = saveService.loadAccounts()

    if (typeof accs === `boolean` || !accs.length) {
      accountsForm.accounts = [getEmptyAccount()]
    } else {
      accountsForm.accounts = accs
    }
  }

  const updateAccounts = (accounts: ValidatedAccountForm[]) => {
    // вынести логику и в целом подумать
    const validAccounts = accounts.filter(acc => acc.valid && acc.meta?.id)
      .map(acc => ({ ...acc.values, id: acc.meta!.id }))

    const validIds = new Set(validAccounts.map(acc => acc.id))
    const allIds = new Set(accounts.map(acc => acc.meta?.id).filter(Boolean))
    const prevValid = saveService.loadAccounts() || []
    const merged = [
      ...validAccounts,
      ...prevValid.filter(acc => !validIds.has(acc.id) && allIds.has(acc.id))
    ]

    saveAccounts(merged)
    
    const validMap = new Map(validAccounts.map(acc => [acc.id, acc]))
    accountsForm.accounts = accountsForm.accounts.map(acc => validMap.get(acc.id) || acc)
  }

  //точка расширения и не теряем реактивность
  const getAccounts = computed(() => toRef(() => accountsForm.accounts))

  const resetDb = () => {
    saveService.resetDB()
    loadAccounts()
  }

  return {
    accountsForm, saveAccounts, getAccounts, resetDb,
    removeAccount, addAccount, loadAccounts, updateAccounts
  }
})

export type AccountStore = ReturnType<typeof useAccountsStore>
