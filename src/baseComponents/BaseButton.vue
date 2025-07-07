<script setup lang="ts">
import Button from 'primevue/button';

defineProps<{
  icon?: string
  text?: boolean
  label?: string
}>()
</script>

<template>
  <Button
    :title="label"
    :content="text"
  />
</template> 