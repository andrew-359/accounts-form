<script setup lang="ts">
import { ACCOUNT_FORM } from '@/_configs/accountForm'
import { useButtons } from '@/_configs/useButtons'
import { useAccountsForms } from '@/composables/useAccountsForms/useAccountsForms'
import { useAccountsStore } from '@/stores/accounts'
import { formsRefs } from '@/composables/useAccountsForms/formsRefs'
import FormFieldsHeader from '@/baseComponents/FormFieldsHeader.vue'

const accStore = useAccountsStore()
const accForms = useAccountsForms()

const { delete: deleteButton } = useButtons(accForms, accStore)
</script>

<template>
  <FormFieldsHeader :config="ACCOUNT_FORM" />
  <div class="space-y-4">
    <div 
      v-for="(account) in accStore.getAccounts.value" 
      :key="account.id" 
      class="flex items-start"
    >
      <div class="flex-1">
        <UIForm
          :config="ACCOUNT_FORM"
          ref="formsRefs"
        />
      </div>
      
      <div class="flex-shrink-0 p-5">
        <UIButton 
          :danger="deleteButton.danger"
          :icon="deleteButton.icon"
          @click="deleteButton.action(account.id)"
        />
      </div>
    </div>
  </div>
</template>