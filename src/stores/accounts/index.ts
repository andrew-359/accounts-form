import { defineStore } from 'pinia'
import { STORE_MODULE } from '../names'
import type { AccountsState } from './types'

export const useAccountsStore = defineStore(STORE_MODULE.accounts, {
  state: (): AccountsState => ({
    accounts: []
  }),

  actions: {
  
  },
})

export type AccountStore = ReturnType<typeof useAccountsStore>
