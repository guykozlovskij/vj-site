<script setup>
import Contact from './components/layout/Contact.vue'
import Nav from './components/layout/Nav.vue'
import About from './components/sections/About.vue'
</script>

<template>
  <Nav />
  <main>
    <h1 class="container">Hello</h1>
    <About class="container" />
    <p class="container">
      Ut laborum consectetur duis elit eiusmod consequat cillum. Do incididunt labore excepteur
      ullamco reprehenderit eu duis fugiat fugiat. Cillum voluptate adipisicing ipsum do id duis
      exercitation sunt. Sit in quis eu pariatur dolor duis ad. Laboris amet ipsum officia aliquip
      sunt enim ad officia ut velit. Voluptate Lorem in tempor pariatur qui consequat consequat
      laborum nulla nisi fugiat culpa. Irure sint consectetur qui aliqua dolor officia est ex. Ut
      sunt minim reprehenderit enim est tempor.
    </p>
  </main>
  <Contact class="container" />
</template>

<style scoped lang="scss">
h1 {
}
p {
  font-size: 30px;
}
</style>
