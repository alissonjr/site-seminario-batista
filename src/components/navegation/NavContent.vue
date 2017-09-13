<template lang="pug">
  
  section
    div(class="secondary")
      nav-menu-secondary
    div(class="primary")
      span(class="logotipo")
        | 
      span(class="navegation")
        nav-menu-primary

</template>
<script>
  
  import NavMenuPrimary from '@/components/navegation/NavMenuPrimary';
  import NavMenuSecondary from '@/components/navegation/NavMenuSecondary';

  export default {
    components: {
      NavMenuPrimary,
      NavMenuSecondary,
    },
    data() {
      return {

      };
    },
  };

</script>
<style lang="sass" scoped>

  .primary
    display: flex
    background: #f8f8f9
    justify-content: space-between

  .secondary
    display: flex
    background: white
    justify-content: flex-end
    flex-flow: row wrap
    padding-right: 20px

  .logotipo
    width: auto
    min-width: 200px
    max-width: 200px
    height: 70px
    background: #eaeaea
    content: ' '
    display: block

  .navegation
    margin-right: 20px
  
  .contact
  
</style>
