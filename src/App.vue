<script setup>
import Nav from '@/shared/components/Nav.vue'
import { currentSite } from '@/sites'
import { RouterView } from 'vue-router'
</script>

<template>
  <Nav
    v-if="currentSite?.navigation"
    :brand="currentSite.navigation.brand"
    :items="currentSite.navigation.items"
  />
  <RouterView />
</template>
