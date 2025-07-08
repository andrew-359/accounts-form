<script setup lang="ts">
import { useField } from 'vee-validate'
import InputChips from 'primevue/inputchips'
import { UIClasses } from '@/_configs/theme'
import { computed } from 'vue'
import type { AccountLabel } from '@/types/main'
import { Text } from '@/types/fields'

//TODO что-то с чипом
const props = defineProps<Text>()

const { value, errorMessage } = useField<AccountLabel[]>(props.name, props.rules)

const stringChips = computed({
  get() {
    return (value.value || []).map(l => l.text)
  },
  set(newArr: string[]) {
    value.value = newArr.filter(Boolean).map(text => ({ text }))
  }
})
</script>

<template>
  <div
    v-tooltip.top="help"
    class="w-full"
  >
    <InputChips
      v-model="stringChips"
      :placeholder="placeholder"
      :input-id="name"
      :class="UIClasses.input"
      :invalid="!!errorMessage"
      fluid
      separator=";"
    />
    <small
      v-if="errorMessage"
      class="text-red-500"
    >{{ errorMessage }}</small>
  </div>
</template>