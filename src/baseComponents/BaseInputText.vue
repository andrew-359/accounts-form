<script setup lang="ts">
import { useField } from 'vee-validate'
import InputText from 'primevue/inputtext'

const props = defineProps<{ 
  name: string
  label?: string
  initialValue?: string
  placeholder?: string
  // TODO
  rules?: any
}>()

const { value, errorMessage } = useField<string>(() => props.name, props.rules, {
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