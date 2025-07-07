import type { Field } from '@/types/fields'

export interface SystemConfig {
    appTitle: string
}

export type AccountLabel = {
    text: string;
}
  
export type AccountType = 'LDAP' | 'local';
  
/**
 * Одна учётная запись (валидная)
 */
export type Account = {
    id: string
    labels: AccountLabel[]; 
    type: AccountType;
    login: string;
    password?: string;
}

/**
 * Массив учётных записей
 */
export type AccountList = Account[];

/**
 * Массив валидных учётных записей (для обновления)
 * Совпадает по структуре с AccountList
 */
export type ValidAccountList = AccountList;

export interface FormConfig {
    title: string,
    fields: Field[]
}

export interface AccountsService {
    saveAccounts: (accs: AccountList) => boolean,
    loadAccounts: () => AccountList | false
}