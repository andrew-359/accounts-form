<script setup lang="ts" generic="T">
import { useField } from 'vee-validate'
import Select from 'primevue/select'

// в данном сучае короче диструктуризации + не используем пропы внутри <script>
const props = withDefaults(
  defineProps<{ 
    name: string
    loading?: boolean
    options: T[]
    showClear?: boolean
    initialValue?: T
      // TODO
    rules?: any
  }>(), 
  { showClear: false }
)

const { value, errorMessage } = useField<T>(() => props.name)
</script>

<template>
    <Select
      v-model="value"
      :input-id="name"
      :loading="loading"
      :options="options"
      fluid
      :show-clear="showClear"
    />
    <small v-if="errorMessage">{{ errorMessage }}</small>
</template>