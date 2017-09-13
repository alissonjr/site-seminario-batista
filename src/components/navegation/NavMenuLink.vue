<template lang="pug">

  a(v-bind:href="link" class="block") {{ text }}

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

  .block
    padding: 0 20px
    text-decoration: none
    color: #7b8394
    display: flex
    align-items: center
    justify-content: center
    min-height: 70px
    font-size: 1em
    font-weight: bold
    text-transform: uppercase

</style>
