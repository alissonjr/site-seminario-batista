<template lang="pug">

  a(v-bind:href="link")
    span {{ text }}
    i(class="fa fa-chevron-down")

</template>
<script>

  export default {
    name: 'nav-menu-link',
    props: ['link', 'text'],
    data() {
      return {

      };
    },
  };

</script>
<style lang="sass" scoped>

  a
    padding: 0 20px
    text-decoration: none
    color: white
    display: flex
    align-items: center
    justify-content: center
    height: 60px
    font-size: 1em
    font-weight: bold
    // text-transform: uppercase
    transform: 0.5s all ease-in-out
    &:before
      content: ' '
      position: absolute
      margin-top: -20px
      margin-left: 0
      width: 0
      height: 2.5px
      background: #2c3e50
    &:hover
      &:before
        width: 30px
      .fa
        opacity: 1
    .fa
      display: block
      position: absolute
      margin-top: 20px
      font-size: 10px
      opacity: 0

</style>
