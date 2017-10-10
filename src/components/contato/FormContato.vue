<template lang="pug">

  .contato
    title-section contato
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

  import TitleSection from '@/components/utils/Title'

  export default {
    components: {
      TitleSection,
    },
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
    background: #fafafa
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
