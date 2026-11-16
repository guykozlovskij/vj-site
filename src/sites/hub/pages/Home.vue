<template>
  <main class="hub-home">
    <h1 class="visually-hidden">Viešpaties Judėjimas</h1>
    <div class="locality-cards">
      <a href="https://baznyciavilniuje.lt/" class="locality-card">
        <img class="locality-card__image" src="/images/vilnius-banner.webp" alt="" />
        <h2 class="locality-card__label">Bažnyčia Vilniuje</h2>
        <span class="locality-card__chevron" aria-hidden="true"></span>
      </a>
      <a href="https://baznyciasiauliuose.lt/" class="locality-card">
        <img class="locality-card__image" src="/images/siauliai-banner.webp" alt="" />
        <h2 class="locality-card__label">Bažnyčia Šiauliuose</h2>
        <span class="locality-card__chevron" aria-hidden="true"></span>
      </a>
      <a href="https://baznyciajonavoje.lt/" class="locality-card">
        <img class="locality-card__image" src="/images/jonava-banner.webp" alt="" />
        <h2 class="locality-card__label">Bažnyčia Jonavoje</h2>
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
  position: relative;
  overflow: hidden;
  background: #827665;
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

.locality-card::before {
  position: absolute;
  inset: 0;
  background: linear-gradient(110deg, rgba(44, 35, 27, 0.62), rgba(44, 35, 27, 0.2));
  content: '';
  z-index: 1;
}

.locality-card__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.locality-card__label {
  position: relative;
  z-index: 2;
  margin: 0;
  font-family: 'Lora', Georgia, 'Times New Roman', serif;
  font-size: clamp(24px, 4vw, 40px);
}

.locality-card__chevron {
  position: relative;
  z-index: 2;
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
  border-top: 3px solid currentColor;
  border-right: 3px solid currentColor;
  transform: rotate(45deg);
}
</style>
