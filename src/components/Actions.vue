<script setup lang="ts">
import { useButtons } from '@/_configs/useButtons'
import { useAccountsForms } from '@/composables/useAccountsForms/useAccountsForms'
import { useAccountsStore } from '@/stores/accounts'

const accStore = useAccountsStore()
const accForms = useAccountsForms()

const { add, save, reset } = useButtons(accForms, accStore)
</script>

<template>
  <div class="flex gap-4 pt-4 border-t border-slate-700">
    <!-- TODO -->
    <UIButton 
      :label="add.label"
      @click="add.action()" 
    />
    <UIButton 
      :label="save.label"
      @click="save.action()"
    />
    <UIButton 
      :label="reset.label"
      :danger="reset.danger"
      @click="reset.action()"
    />
  </div>
</template>