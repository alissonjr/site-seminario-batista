<template lang="pug">

  div
    nav-content
    header-content
    section-depoimentos
    content-contato
    footer-content

</template>
<script>

  import NavContent from '@/components/navegation/NavContent';
  import HeaderContent from '@/components/header/HeaderContent';
  import SectionDepoimentos from '@/components/depoimentos/SectionDepoimentos';
  import ContentContato from '@/components/contato/ContentContato';
  import FooterContent from '@/components/footer/FooterContent';
  
  export default {
    name: 'hello',
    components: {
      NavContent,
      FooterContent,
      HeaderContent,
      SectionDepoimentos,
      ContentContato,
    },
    data() {
      return {

      };
    },
  };

</script>
<style lang="sass">

  @import "../assets/sass/_texts"

</style>
