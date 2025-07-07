export interface SystemConfig {
    appTitle: string
}

export type AccountLabel = {
    text: string;
}
  
export type AccountType = 'LDAP' | 'local';
  
export interface Account {
    labels: AccountLabel[]; 
    type: AccountType;
    login: string;
    password?: string;
}
  
export type AccountList = Account[];