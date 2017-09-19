<template lang="pug">

  .contato
    h1.title contato
    form
      fieldset
        label Nome:
        input(type="text")
      fieldset
        label Email:
        input(type="email")
      fieldset
        label Comentário:
        textarea

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

  @import "../../assets/sass/_forms"

  .contato
    flex: 1 auto
    background: #fdfdfd
    padding: 100px 50px
    text-align: right
    fieldset
      input, textarea, select, label
        width: 300px
        display: block
        text-align: left
        margin-left: auto
      label
      
</style>
