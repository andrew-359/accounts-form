<script setup lang="ts">
import InputText from 'primevue/inputtext'
import { RuleExpression, useField } from 'vee-validate'
import type { Password } from '@/types/fields';
import type { MaybeRef } from 'vue';

const props = defineProps<Password>()

//TODO
const { value, errorMessage } = useField<string>(() => props.name, props.rules as MaybeRef<RuleExpression<string>>, {
  initialValue: props.initialValue,
})
</script>

<template>
  <InputText
    v-model="value"
    :placeholder="placeholder"
    :input-id="name"
    fluid
  />
  <small v-if="errorMessage">{{ errorMessage }}</small>
</template>