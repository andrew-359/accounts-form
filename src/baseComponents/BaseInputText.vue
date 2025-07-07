<script setup lang="ts">
import { useField } from 'vee-validate'
import InputText from 'primevue/inputtext'
import { Text } from '@/types/fields';

const props = defineProps<Text>()

//TODO
const { value, errorMessage } = useField<string>(props.name, props.rules)
</script>

<template>
  <InputText
    v-model="value"
    :placeholder="placeholder"
    :input-id="name"
  />
  <small v-if="errorMessage">{{ errorMessage }}</small>
</template>