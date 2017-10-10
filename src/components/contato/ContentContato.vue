<template lang="pug">

  section
    row
    column(md="6")
      form-contato
    column(md="6")
      Map

</template>
<script>

  import Map from '@/components/contato/Map';
  import FormContato from '@/components/contato/FormContato';

  export default {
    components: {
      Map,
      FormContato
    },
    data() {
      return {
        
      }
    }
  }

</script>
<style lang="sass" scoped>

  section
    display: flex
    flex-direction: row
    flex-flow: row wrap
    justify-content: center

</style>
