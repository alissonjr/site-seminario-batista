<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  };
</script>

<style lang="sass">

  @import "../node_modules/vue-flexboxgrid/dist/vue-flexboxgrid.css"

  @import "../node_modules/font-awesome/css/font-awesome.min.css"

  @import "assets/sass/_texts"

  @import url("https://fonts.googleapis.com/css?family=Open+Sans")

  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50

  *
    margin: 0
    padding: 0
    box-sizing: inherit

  html
    height: 100%
    box-sizing: border-box

  body
    position: relative
    margin: 0
    height: 100%

</style>
