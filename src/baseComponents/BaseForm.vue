<script setup lang="ts" generic="T">

defineProps<{
  config?: string
}>()
</script>

<!-- на случай если форма оч сложная и нет времени расширять конструктор - можно "захардкодить форму" и вставить в slot -->
<template>
    <div v-if="config">
        {{ config }}
    </div>  
  
  <slot></slot>
</template> 