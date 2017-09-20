<template lang="pug">
  
  h1.title
    i(class="fa fa-chevron-right")
    | 
    span {{ text }}

</template>
<script>


  export default {
    props: ['text'],
    data() {
      return {
      };
    },
  };
</script>
<style lang="sass" scoped>
  .title
    margin-bottom: 15px
    span
      font-size: 1.5em
      text-transform: uppercase
    .fa
      font-size: 0.8em
      margin-top: 12px
      margin-left: -15px
      position: absolute
      color: #00c2ff

</style>
