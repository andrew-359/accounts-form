<script setup lang="ts">
import Button from 'primevue/button';

defineProps<{
  icon?: string
  label?: string
}>()
</script>

<template>
  <Button
    :label="label"
    :icon="`pi ${icon}`"
  />
</template> 