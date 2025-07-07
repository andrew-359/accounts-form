<script setup lang="ts" generic="T">
import { FieldType } from '@/types/fields';
import { Account, FormConfig } from '@/types/main';
import { RuleExpression, useForm } from 'vee-validate';


const props = defineProps<{
  config?: FormConfig
}>()

const fieldComponentMap = {
  text: 'UIInputText',
  password: 'UIInputPassword',
  select: 'UISelect'
} as const satisfies Record<FieldType, string>;

const { errors, values } = useForm<Account>({
  validationSchema: {},
})
</script>

<!-- на случай если форма оч сложная и нет времени расширять конструктор - можно "захардкодить форму" и вставить в slot -->
<template>
  {{  values }}{{ errors }}
  <div v-if="config">
    <template v-for="field in config.fields" :key="field.name">
      <component
        :is="fieldComponentMap[field.type]"
        v-bind="field"
      />
    </template>
  </div>
  <slot></slot>
</template> 