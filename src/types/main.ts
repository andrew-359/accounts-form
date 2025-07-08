import type { Field } from '@/types/fields'
import { Nullable } from './utils'

export interface SystemConfig {
  appTitle: string
  defaultConfig: FormConfig
}

export type AccountLabel = {
  text: string
}
  
export type AccountType = `LDAP` | `local`
  

export type Account = {
  id: string
  labels: Nullable<AccountLabel[]>; 
  type: Nullable<AccountType>
  login: Nullable<string>
  password?: Nullable<string>
}

export type AccountList = Account[]

export type ValidAccountList = AccountList

export interface FormConfig {
  title: string
  fields: Field[]
}

export interface AccountsService {
  //расширяемо
  saveAccounts: (accs: AccountList) => boolean
  loadAccounts: () => AccountList | false
  resetDB: () => void
}

export interface NotificationServie {
  push: (arg: Notification) => void
}

export interface ConfirmDialogOptions {
  text?: string
  onConfirm?: () => void
  onCancel?: () => void
}

//точка расширения
export type NotificationType = `success` | `error` | `info` | `warning`

export type Notification = {
  type: NotificationType
  message: string
}