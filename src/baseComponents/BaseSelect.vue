<script setup lang="ts" generic="T">
import { useField } from 'vee-validate'
import PrimeSelect from 'primevue/select'
import { Select } from '@/types/fields';

const props = defineProps<Select<T>>()

const { value, errorMessage } = useField<T>(() => props.name)
</script>

<template>
    <PrimeSelect
      v-model="value"
      :input-id="name"
      :options="options"
      fluid
      :show-clear="clearButton"
    />
    <small v-if="errorMessage">{{ errorMessage }}</small>
</template>