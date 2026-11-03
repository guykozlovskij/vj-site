<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

// import { useLanguage } from '@/composables/useLanguage'
// const { currentLanguage, setLanguage } = useLanguage()

const isMenuOpen = ref(false)

const navItems = [
  { label: 'Pagrindinis', to: '/' },
  { label: 'Tarnavimas', to: '/page-1' },
  { label: 'Kalendorius', to: '/page-2' },
]

function closeMenu() {
  isMenuOpen.value = false
}

function handleKeydown(event) {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <!-- Top navigation -->
  <header class="site-header">
    <div class="nav-content">
      <RouterLink to="/" class="brand-link"> Bažnyčia Vilniuje </RouterLink>

      <!-- Desktop navigation -->
      <nav class="desktop-navigation" aria-label="Main navigation">
        <RouterLink v-for="item in navItems" :key="item.to" :to="item.to" class="nav-link">
          {{ item.label }}
        </RouterLink>
      </nav>

      <!-- Mobile hamburger button -->
      <button
        class="menu-toggle"
        :class="{ 'is-open': isMenuOpen }"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-navigation"
        :aria-label="isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Language selector - reserved for later -->
      <!--
      <div class="language-selector">
        <button :class="{ active: currentLanguage === 'lt' }" @click="setLanguage('lt')">🇱🇹</button>
        <button :class="{ active: currentLanguage === 'en' }" @click="setLanguage('en')">🇬🇧</button>
      </div>
      -->
    </div>
  </header>

  <!-- Mobile backdrop -->
  <Transition name="fade">
    <button
      v-if="isMenuOpen"
      class="mobile-backdrop"
      type="button"
      aria-label="Close navigation menu"
      @click="closeMenu"
    ></button>
  </Transition>

  <!-- Mobile slide-out menu -->
  <Transition name="drawer">
    <div v-if="isMenuOpen" id="mobile-navigation" class="mobile-drawer">
      <nav class="mobile-navigation" aria-label="Mobile navigation">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="nav-link"
          @click="closeMenu"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
/* Top navigation */

.site-header {
  background-color: $nav-color;
  position: fixed;
  height: $nav-height;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
}

.nav-content {
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 15px;

  display: flex;
  align-items: center;

  /* Logo */

  .brand-link {
    font: $accent-text-font;
    color: $accent-text-color;
    font-size: 20px;
    font-style: italic;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      opacity: 0.85;
    }
  }
}

/* Desktop navigation */

.desktop-navigation {
  margin-left: auto;

  display: flex;
  align-items: center;
  gap: 30px;
}

/* Navigation links */

.nav-link {
  color: $accent-text-color;
  text-decoration: none;
  font-size: 16px;

  transition:
    color 0.2s ease,
    opacity 0.2s ease;

  &:hover,
  &:focus-visible {
    opacity: 0.75;
  }

  &.router-link-active {
    font-weight: 600;
  }
}

/* Mobile hamburger */

.menu-toggle {
  display: none;
  margin-left: auto;
  width: 44px;
  height: 44px;
  padding: 10px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;

  appearance: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  background: transparent;
  border: none;
  box-shadow: none;
  opacity: 1;
  cursor: pointer;

  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: $accent-text-color;

    transition:
      transform 0.25s ease,
      opacity 0.2s ease;
  }

  &.is-open {
    span:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:focus-visible {
    outline: 2px solid $accent-text-color;
    outline-offset: 3px;
  }

  &:active {
    background: transparent;
    box-shadow: none;
  }
}

/* Mobile backdrop */

.mobile-backdrop {
  position: fixed;
  top: $nav-height;
  right: 0;
  bottom: 0;
  left: 0;

  width: 100%;
  padding: 0;
  margin: 0;

  appearance: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  background: rgba(0, 0, 0, 0.45);
  border: none;
  box-shadow: none;
  opacity: 1;
  cursor: default;

  z-index: 998;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:active {
    background: rgba(0, 0, 0, 0.45);
    opacity: 1;
  }
}

/* Mobile slide-out panel */

.mobile-drawer {
  position: fixed;
  top: $nav-height;
  right: 0;
  bottom: 0;

  width: min(70vw, 280px);
  padding: 25px 20px;

  background-color: $nav-color;

  /* Shadow cast to the left */
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);

  overflow-y: auto;
  z-index: 999;
}

/* Mobile navigation links */

.mobile-navigation {
  display: flex;
  flex-direction: column;
  gap: 10px;

  .nav-link {
    display: block;
    padding: 14px 12px;
    border-radius: 4px;
    font-size: 24px;

    &:hover,
    &.router-link-active {
      background-color: rgba(238, 232, 220, 0.1);
    }
  }
}

/* Animations */

.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.25s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive layout */

@media (max-width: 768px) {
  .desktop-navigation {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }
}

@media (min-width: 769px) {
  .mobile-drawer,
  .mobile-backdrop {
    display: none;
  }
}
</style>
