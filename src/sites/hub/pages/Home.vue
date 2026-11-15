<script setup>
const localities = [
  { label: 'Bažnyčia Vilniuje', href: 'https://baznyciavilniuje.lt' },
  { label: 'Bažnyčia Šiauliuose', href: 'https://baznyciasiauliuose.lt' },
  { label: 'Bažnyčia Jonavoje', href: 'https://baznyciajonavoje.lt' },
]
</script>

<template>
  <main class="hub-home">
    <h1 class="visually-hidden">Viešpaties judėjimas Lietuvoje</h1>
    <div class="locality-cards">
      <a
        v-for="locality in localities"
        :key="locality.href"
        :href="locality.href"
        class="locality-card"
      >
        <h2 class="locality-card__label">{{ locality.label }}</h2>
        <span class="locality-card__chevron" aria-hidden="true"></span>
      </a>
    </div>
  </main>
</template>

<style scoped lang="scss">
.hub-home {
  min-height: 100vh;
  padding: clamp(24px, 6vw, 64px) 20px;
  background: #f4f0e8;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.locality-cards {
  display: grid;
  gap: 20px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.locality-card {
  display: flex;
  min-height: clamp(150px, 22vw, 240px);
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: clamp(24px, 5vw, 48px);
  border-radius: 14px;
  background: linear-gradient(110deg, #827665, #a69a87);
  color: #fff;
  text-decoration: none;
  transition: filter 0.2s ease;

  &:hover,
  &:focus-visible {
    filter: brightness(0.94);
  }

  &:focus-visible {
    outline: 3px solid #651c19;
    outline-offset: 4px;
  }
}

.locality-card__label {
  margin: 0;
  font-family: 'Lora', Georgia, 'Times New Roman', serif;
  font-size: clamp(24px, 4vw, 40px);
}

.locality-card__chevron {
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
  border-top: 3px solid currentColor;
  border-right: 3px solid currentColor;
  transform: rotate(45deg);
}
</style>
