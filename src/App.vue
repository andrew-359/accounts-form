<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { SYSTEM } from './_configs/system'
import Layout from '@/layout/Layout.vue'
import AccountsForm from '@/components/AccountsForm.vue'
import Actions from './components/Actions.vue'

onBeforeMount(() => {
  document.title = SYSTEM.appTitle
})
</script>

<template>
  <Layout :title="SYSTEM.defaultConfig.title">
    <AccountsForm />
    <Actions />
  </Layout>
</template>