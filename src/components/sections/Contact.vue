<script setup></script>

<template>
  <section>
    <div class="container">
      <h1 class="align-center">Susisiekite su mumis</h1>
      <p>Mūsų susirinkimai vyksta trijuose Lietuvos miestuose:</p>
      <ul>
        <li>Vilniuje</li>
        <li>Šiauliuose</li>
        <li>Jonavoje</li>
      </ul>
      <p>
        Jei norėtumėte apsilankyti mūsų susirinkime, daugiau sužinoti apie mus ar tiesiog
        pabendrauti apie tikėjimą, parašykite mums el. paštu. <br />Sujungsime jus su tikinčiaisiais
        jūsų mieste.
      </p>
      <div class="email-contact">
        <p class="email-label">El. paštas</p>

        <a class="email-address" href="mailto:viespatiesjudejimas@gmail.com">
          viespatiesjudejimas@gmail.com
        </a>

        <a class="email-button" href="mailto:viespatiesjudejimas@gmail.com"> Rašyti el. laišką </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use 'sass:color';

h1 {
  color: $accent-text-color;
  font-style: italic;
  font-size: 50px;
}

.email-contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding: 35px 25px;
  margin: 40px auto;

  background: rgba(58, 44, 33, 0.05);
  border-radius: 8px;

  .email-label {
    margin: 0 0 8px;
    font-weight: 600;
  }

  .email-address {
    color: rgb(48, 44, 39);
    font-size: 20px;
    text-decoration: none;
    margin-bottom: 24px;

    &:hover {
      text-decoration: underline;
    }
  }

  .email-button {
    display: inline-block;

    padding: 13px 30px;
    border-radius: 5px;

    background-color: $accent-text-color;
    color: $background-color;

    font-weight: 600;
    text-decoration: none;

    box-shadow:
      0 4px 0 color.adjust($accent-text-color, $lightness: -12%),
      0 5px 10px rgba(0, 0, 0, 0.15);

    transition:
      transform 0.15s ease,
      box-shadow 0.15s ease,
      background-color 0.15s ease;

    &:hover {
      background-color: color.adjust($accent-text-color, $lightness: -5%);
      transform: translateY(-2px);

      box-shadow:
        0 6px 0 color.adjust($accent-text-color, $lightness: -12%),
        0 8px 14px rgba(0, 0, 0, 0.18);
    }

    &:active {
      transform: translateY(2px);
      box-shadow: 0 1px 0 color.adjust($accent-text-color, $lightness: -12%);
    }

    &:focus-visible {
      outline: 3px solid $accent-text-color;
      outline-offset: 4px;
    }
  }
}
</style>
