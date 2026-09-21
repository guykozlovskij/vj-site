<script setup>
import { useLanguage } from '@/composables/useLanguage'
const { currentLanguage, setLanguage } = useLanguage()
</script>

<template>
  <nav>
    <div class="nav-content">
      <p>Viešpaties Judėjimas</p>
      <div class="language-selector">
        <button :class="{ active: currentLanguage === 'lt' }" @click="setLanguage('lt')">🇱🇹</button>
        <button :class="{ active: currentLanguage === 'en' }" @click="setLanguage('en')">🇬🇧</button>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
nav {
  background-color: $nav-color;
  position: fixed;
  height: $nav-height;
  top: 0;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  .nav-content {
    width: 100%;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    align-items: center;
    p {
      font: $accent-text-font;
      color: $accent-text-color;
      font-size: 20px;
      font-style: italic;
      font-weight: 500;
    }
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
}
</style>
