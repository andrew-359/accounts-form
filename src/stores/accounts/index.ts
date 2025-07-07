import { defineStore } from 'pinia'
import { STORE_MODULE } from '../names'
import type { AccountsState } from './types'
import { computed, reactive, toRef } from 'vue'
import { Account } from '@/types/main'
import { getEmptyAccount } from './utils'
import saveService from '@/services/LocalStorageAccountsService'
import { SubmitedPayload } from '@/composables/useBaseForm/useBaseForm'
import { ValidatedAccountForm } from '@/composables/useAccountsForms/types'

export const useAccountsStore = defineStore(STORE_MODULE.accounts, () => {
  const accountsForm = reactive<AccountsState>({
    //точка расширения
    accounts: []
  })

  const removeAccount = (accId: Account['id']) => {
    accountsForm.accounts = accountsForm.accounts.filter(({ id }) => id!== accId)
  }
  
  const addAccount = () => {
    accountsForm.accounts.push(getEmptyAccount())
  }

  //расширяемо
  const saveAccounts = () => {
    const done = saveService.saveAccounts(accountsForm.accounts)

    if(!done) {
      throw new Error('try another save service')
    }
  }

  //расширяемо
  const loadAccounts = () => {
    const accs = saveService.loadAccounts()

    if (accs) {
      accountsForm.accounts = accs
    } else {
      accountsForm.accounts = [getEmptyAccount()]
    }
  }

  const updateAccounts = (accounts: ValidatedAccountForm[]) => {
    const validAccounts = accounts
      .filter(acc => acc.valid && acc.meta && acc.meta.id)
      .map(acc => ({ ...acc.values, id: acc.meta!.id }));
    const validMap = new Map(validAccounts.map(acc => [acc.id, acc]));

    accountsForm.accounts = accountsForm.accounts.map(acc =>
      validMap.has(acc.id) ? validMap.get(acc.id)! : acc
    );

    saveAccounts()
  };

  //точка расширения и не теряем реактивность
  const getAccounts = computed(() => toRef(() => accountsForm.accounts))

  return {
    accountsForm, saveAccounts, getAccounts,
    removeAccount, addAccount, loadAccounts, updateAccounts
  }
})

export type AccountStore = ReturnType<typeof useAccountsStore>
