<script setup>
import Nav from '@/shared/components/Nav.vue'
import { RouterView } from 'vue-router'

const navigationItems = [{ label: 'Pagrindinis', to: '/' }]
</script>

<template>
  <Nav brand="Bažnyčia Vilniuje" :items="navigationItems" />
  <RouterView />
</template>
