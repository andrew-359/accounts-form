<script setup lang="ts">
import { useField } from 'vee-validate'
import InputText from 'primevue/inputtext'
import { Text } from '@/types/fields'
import { UIClasses } from '@/_configs/theme'

const props = defineProps<Text>()
//TODO
const { value, errorMessage } = useField<string>(props.name, props.rules)
</script>

<template>
  <div class="w-full">
    <InputText
      v-model="value"
      :placeholder="placeholder"
      :input-id="name"
      :class="UIClasses.input"
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