<template lang="pug">
  
  h1.title
    i(class="one fa fa-chevron-right")
    | 
    span
      slot {{ text }}
    |
    i(class="two fa fa-chevron-left")

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
      text-transform: capitalize
      
    .fa
      font-size: 0.5em
      margin-top: 15px
      position: absolute
      color: #00c2ff
      &.one
        margin-left: -15px
      &.two
        margin-left: 5px

</style>
