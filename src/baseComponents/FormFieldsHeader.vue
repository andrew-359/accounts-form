<script setup lang="ts">
import type { FormConfig } from '@/types/main'

defineProps<{
  config: FormConfig
}>()

</script>

<!-- тут можно таблицу сделать дженериком -->
<template>
  <div class="flex gap-8 mb-1 p-5">
    <div
      class="flex-1"
      v-for="field in config.fields"
      :key="field.name"
    >
      <span class="font-bold">{{ field.label }}</span>
    </div>
    <span>actions</span>
  </div>
</template> 