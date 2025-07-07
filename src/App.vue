<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { SYSTEM } from './_configs/system'
import Layout from '@/layout/Layout.vue'
import AccountsForm from '@/components/AccountsForm.vue'

onBeforeMount(() => {
  document.title = SYSTEM.appTitle
})
</script>

<template>
  <Layout>
      <AccountsForm />
  </Layout>
</template>