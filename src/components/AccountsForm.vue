<script setup lang="ts">
import { ACCOUNT_FORM } from '@/_configs/accountForm';
import { useAccountsForms } from '@/composables/useAccountsForms/useAccountsForms';
import { useAccountsStore } from '@/stores/accounts';
import { Account } from '@/types/main';
import { getIcon } from '@/utils/iconsMapper';

const { removeAccount, addAccount, getAccounts } = useAccountsStore()

const { onSave, forms } = useAccountsForms()

// задел на централизованное управление кнопками
const BUTTONS = {
  delete: {
    icon: getIcon('TRASH'),
    action: (id: Account['id']) => removeAccount(id)
  },
  save: {
    label: 'Добавить аккаунт',
    action: addAccount
  },
  add: {
    label: "Сохранить все",
    action: onSave
  },
}
</script>

<template>
  <div 
    v-for="account in getAccounts" 
    :key="account.id" 
    class="flex"
  >
    <UIForm
      :config="ACCOUNT_FORM"
      ref="forms"
    />
    <UIButton 
      :icon="BUTTONS.delete.icon"
      @click="BUTTONS.delete.action(account.id)"
    />
  </div>

  <UIButton 
    :label="BUTTONS.add.label"
    @click="BUTTONS.add.action()" 
  />
  <UIButton 
    :label="BUTTONS.save.label"
    @click="BUTTONS.save.action()"
  />
</template>