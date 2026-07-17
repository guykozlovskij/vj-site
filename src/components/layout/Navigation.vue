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