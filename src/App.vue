<script setup>
import Nav from '@/shared/components/Nav.vue'
import { RouterView } from 'vue-router'

defineProps({
  site: {
    type: Object,
    required: true,
  },
})

</script>

<template>
  <Nav v-if="site.navigation" :brand="site.navigation.brand" :items="site.navigation.items" />
  <RouterView />
</template>
