<template lang="pug">
  
  header
    container
      h1 FULL TITLE HERE

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
    background: #00B0EB
    display: flex
    justify-content: center
    align-items: center
    color: white
    min-height: 500px
    h1
      text-transform: uppercase
  
</style>
