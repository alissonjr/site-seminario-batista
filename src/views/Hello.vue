<template lang="pug">

  div
    nav-content
    header-content
    footer-content

</template>
<script>

  import NavContent from '@/components/navegation/NavContent';
  import HeaderContent from '@/components/header/HeaderContent';
  import FooterContent from '@/components/footer/FooterContent';
  
  export default {
    name: 'hello',
    components: {
      NavContent,
      FooterContent,
      HeaderContent,
    },
    data() {
      return {

      };
    },
  };

</script>
<style lang="sass" scoped>

</style>
