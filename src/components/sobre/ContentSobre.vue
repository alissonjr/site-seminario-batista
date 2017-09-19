<template lang="pug">

  section
    container
      row
        column(md="4")
          img(src="../../assets/bible_2.svg")
        column(md="8")
          h1.title Sobre nós
          .text
            p aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.
            p aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.
            p aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.
            p aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.

</template>
<script>


  export default {
    data() {
      return {
        
      }
    }
  }

</script>
<style lang="sass" scoped>

  section
    padding: 100px 0
    text-align: left
    position: relative
    &:before
      content: ' '
      display: block
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: url(../../assets/sala.jpg) no-repeat
      background-position: center right
      background-size: 1200px
      background-color: white
      opacity: 0.8
      z-index: -1
    img
      width: 100%
      height: auto
      opacity: 0.15
      padding: 30px
    .text
      // margin: 50px 0
      padding: 50px
      background: white
      position: relative
      word-wrap: break-word
      background: #fbfbfb
      border-radius: 5px
      &:before
        border-radius: 5px
        content: ' '
        position: absolute
        top: -10px
        left: -10px
        width: 100%
        height: 100%
        border: 2px solid rgba(0, 0, 0, 0.05)
      
</style>
