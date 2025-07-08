<script setup lang="ts">
import Button from 'primevue/button'

defineProps<{
  icon?: string
  label?: string
  danger?: boolean
  help?: string
}>()
</script>

<template>
  <Button
    v-tooltip.top="help"
    :label="label"
    :icon="icon && `pi ${icon}`"
    :severity="danger ? 'warn' : ''"
  />
</template> 