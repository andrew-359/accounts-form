<script setup lang="ts"">
import { UIFormPublicInstance, useBaseForm } from '@/composables/useBaseForm/useBaseForm';
import { FormConfig } from '@/types/main';

const props = defineProps<{
  config: FormConfig,
}>()

const { submit, values, fieldComponentMap, setValues } = useBaseForm(props.config)

defineExpose<UIFormPublicInstance>({ submit, setValues });
</script>


<!-- на случай если форма оч сложная и нет времени расширять конструктор - можно "захардкодить форму" и вставить в slot -->
<template>
  <form v-if="config">
    <template v-for="field in config.fields" :key="field.name">
      <component
        v-if="!field.showIf || field.showIf(values)"
        :is="fieldComponentMap[field.type]"
        v-bind="field"
      />
    </template>
  </form>
  <slot></slot>
</template> 

