<script setup>
import { useLanguage } from '@/composables/useLanguage'
const { currentLanguage, setLanguage } = useLanguage()
</script>

<template>
  <nav>
    <p style="color:white; font-size: 20px;">VJ</p>
    <div class="language-selector">
      <button :class="{ active: currentLanguage === 'lt' }" @click="setLanguage('lt')">
        🇱🇹
      </button>
      <button :class="{ active: currentLanguage === 'en' }" @click="setLanguage('en')">
        🇬🇧
      </button>
    </div>
  </nav>
</template>

<style scoped lang="scss">
nav {
  background-color: rgb(44, 99, 86);
  position: fixed;
  height: $nav-height;
  top: 0;
  width: 100%;
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  .language-selector {
    margin-left: auto;
    display: flex;
    gap: 10px;
    button {
      font-size: 35px;
      background: transparent;
      border: none;
      padding: 0;
      cursor: pointer;
    }
  }
}
</style>