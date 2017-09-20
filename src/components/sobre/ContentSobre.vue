<template lang="pug">

  section
    container
      row
        column(md="6")
          Title(text="Sobre nós")
          .text
            p aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.
            p aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.
            p aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.
            p aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.
        column(md="6")

</template>
<script>

  import Title from '@/components/title/Title';

  export default {
    components: {
      Title,
    },
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
