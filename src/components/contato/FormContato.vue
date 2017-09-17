<template lang="pug">

  .contato
    h1.title contato
    form
      fieldset
        label
        input(type="text")
      fieldset
        label
        input(type="text")
      fieldset
        label
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
    padding: 50px
    text-align: right
    input, textarea, select
      width: 300px

</style>
