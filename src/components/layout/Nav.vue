<script setup>
import { useLanguage } from '@/composables/useLanguage'
const { currentLanguage, setLanguage } = useLanguage()
</script>

<template>
  <nav>
    <button :class="{ active: currentLanguage === 'lt' }" @click="setLanguage('lt')">
      LT
    </button>
    <button :class="{ active: currentLanguage === 'en' }" @click="setLanguage('en')">
      EN
    </button>
  </nav>
</template>

<style scoped lang="scss">
nav {
  background-color: rgba(175, 175, 175, 0.575);
  position: fixed;
  top: 0;
  width: 100%;
}
</style>