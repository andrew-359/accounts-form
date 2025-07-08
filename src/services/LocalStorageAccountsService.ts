import { AccountList, AccountsService } from "@/types/main"

class LocalStorageAccountsService implements AccountsService {
  private storageKey = `accounts_`

  saveAccounts(accs: AccountList): boolean {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(accs))
      return true
    } catch {
      return false
    }
  }

  loadAccounts(): AccountList | false {
    const items = localStorage.getItem(this.storageKey)

    return !!items && JSON.parse(items)
  }

  resetDB() {
    localStorage.clear()
  }
}

export default new LocalStorageAccountsService()