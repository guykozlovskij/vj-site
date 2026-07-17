<script setup>
import Contact from './components/layout/Contact.vue';
import Navigation from './components/layout/Navigation.vue';
import About from './components/sections/About.vue';



</script>

<template>
  <Navigation/>
  <main>
    <h1>Hello </h1>
    <About/>
  </main>
  <Contact />

</template>

<style scoped lang="scss">
h1 {
  color: $primary-color;
}
</style>