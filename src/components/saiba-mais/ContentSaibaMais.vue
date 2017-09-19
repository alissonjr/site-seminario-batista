<template lang="pug">

  section
    .container
      h1.title Saiba mais
      br
      small Digite seu e-mail que entraremos em contato com você
      form
        fieldset
          input(type="email" placeholder="Seu e-mail aqui")

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

  section
    padding: 100px 0
    background: white
    small
      margin-top: 30px
    form
      input[type="email"]
        width: 100%
        max-width: 600px
        font-size: 1.8em
        padding: 15px
      
</style>
