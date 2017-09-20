<template lang="pug">
  
  header
    container
      //- h1 Inscrições abertas

</template>
<script>

  export default {
    data() {
      return {
        navegation: [],
      };
    },
    created() {
      this.read();
    },
    methods: {
      read() {},
    },
  };

</script>
<style lang="sass" scoped>

  header
    color: white
    position: relative
    height: calc(100vh - 110px)
    display: block
    .container
      height: 100%
      // align-items: center
      display: flex
      padding: 100px 0
      // justify-content: center
      position: relative
      &:before
        background-image: url(../../assets/simbolo-outline.png)
        background-position: center center
        background-repeat: no-repeat
        background-size: 500px
        z-index: -1
    &:after
      background-image: url(../../assets/cross.jpg)
      background-position: center bottom
      background-repeat: no-repeat
      background-size: cover
      z-index: -2
    h1
      text-transform: uppercase
      font-size: 50px
      font-weight: bolder
  
  header:after, .container:before
    content: ' '
    position: absolute
    height: 100%
    width: 100%
    top: 0
    left: 0


</style>
