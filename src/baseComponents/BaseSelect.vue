<script setup lang="ts" generic="T">
import { useField } from 'vee-validate'
import PrimeSelect from 'primevue/select'
import { Select } from '@/types/fields'

const props = defineProps<Select<T>>()

const { value, errorMessage } = useField<T>(props.name, props.rules)

</script>

<template>
  <div class="w-full">
    <PrimeSelect
      v-model="value"
      :input-id="name"
      :options="options"
      :show-clear="clearButton"
      class="w-full shadow-sm hover:shadow-green-500 transition-all duration-300 ease-in-out"
      :invalid="!!errorMessage"
      fluid
    />
    <small
      v-if="errorMessage"
      class="text-red-500"
    >{{ errorMessage }}</small>
  </div>
</template>