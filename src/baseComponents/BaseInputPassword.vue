<script setup lang="ts">
import PrimePassword from 'primevue/password'
import { RuleExpression, useField } from 'vee-validate'
import type { Password } from '@/types/fields'
import type { MaybeRef } from 'vue'

const props = defineProps<Password>()

//TODO
const { value, errorMessage } = useField<string>(() => props.name, props.rules as MaybeRef<RuleExpression<string>>, {
  initialValue: props.initialValue,
})
</script>

<template>
  <div>
    <PrimePassword
      v-model="value"
      :placeholder="placeholder"
      :input-id="name"
      toggle-mask
      class="w-full shadow-sm hover:shadow-green-500 transition-all duration-300 ease-in-out"
      :invalid="!!errorMessage"
      fluid
      v-tooltip.top="help"
    />
    <small
      v-if="errorMessage"
      class="text-red-500"
    >{{ errorMessage }}</small>
  </div>
</template>