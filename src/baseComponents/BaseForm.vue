<script setup lang="ts"">
import { FormPublicInstance, useBaseForm } from '@/composables/useBaseForm/useBaseForm'
import { FormConfig } from '@/types/main'

const props = defineProps<{
  config: FormConfig
}>()

const { submit, values, fieldComponentMap, setValues, resetValidate, hasErrors, isSuccess, showSuccessAnimation } = useBaseForm(props.config)

defineExpose<FormPublicInstance>({ submit, setValues, resetValidate, showSuccessAnimation })
</script>


<!-- на случай если форма оч сложная и нет времени расширять конструктор - можно "захардкодить форму" и вставить в slot -->
<template>
  <form
    v-if="config" 
    class="flex flex-wrap gap-8 mb-6 p-5 rounded-xl" 
    :class="{ 
      'border-1 border-solid border-red-500 opacity-85': hasErrors,
      'animate-success-glow': isSuccess
    }"
  >
    <template
      v-for="field in config.fields"
      :key="field.name"
    >
      <component
        v-if="!field.showIf || field.showIf(values)"
        :is="fieldComponentMap[field.type]"
        v-bind="field"
        class="flex-2"
      />
      <div
        v-else
        class="flex-2 text-gray-500"
        style="font-family: monospace;"
      >
        /точка расширения/
      </div>
      <!-- Если хотим что-то закинуть внутрь формы -->
      <slot />
    </template>
  </form>
  <slot />
</template> 

