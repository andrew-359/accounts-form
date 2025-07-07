<script setup lang="ts">
import { RuleExpression, useField } from 'vee-validate'
import InputText from 'primevue/inputtext'
import { Text } from '@/types/fields';
import { MaybeRef } from 'vue';

const props = defineProps<Text>()

//TODO
const { value, errorMessage } = useField<string>(() => props.name, props.rules as MaybeRef<RuleExpression<string>>)
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