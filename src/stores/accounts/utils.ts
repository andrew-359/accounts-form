import { ACCOUNT_FORM } from '@/_configs/accountForm';
import { Account } from '@/types/main';
import { v4 as uuidv4 } from 'uuid';

// под расширение
export const getEmptyAccount = (): Account => {
  return {
      ...Object.fromEntries(
        ACCOUNT_FORM.fields.map(field => [field.name, field.initialValue ?? null])
      ) as Account,
      id: uuidv4()
  }
}