<script setup>
import { useLanguage } from '@/composables/useLanguage'
const { content } = useLanguage()
</script>

<template>
  <section>
    <h1>{{ content.about.title }}</h1>
  </section>
</template>