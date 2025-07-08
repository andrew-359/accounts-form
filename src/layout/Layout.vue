<script setup lang="ts" generic="T">
const { title = `/forgoten_config =(/` } = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <header class="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50">
      <div class="container mx-auto px-6 py-4">
        <div class="text-center">
          <h1 class="text-3xl font-bold text-white mb-2">
            {{ title }}
          </h1>
        </div>
      </div>
    </header>

    <main class="container mx-auto px-6 py-8">
      <slot />
    </main>
  </div>
</template> 