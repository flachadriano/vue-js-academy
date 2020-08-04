<template>
  <div id="app">
    <nav-header></nav-header>
    <card-front></card-front>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import CardFront from './components/card/CardFront.vue'

export default {
  name: 'App',
  components: {
    navHeader: Header,
    cardFront: CardFront,
  }
}
</script>

<style>
  body {
    font-family: Verdana, Geneva, sans-serif;
    color: #333
  }
</style>
