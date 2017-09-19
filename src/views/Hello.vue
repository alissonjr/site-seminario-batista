<template lang="pug">

  div
    nav-content
    header-content
    content-sobre
    content-professores
    section-depoimentos
    content-contato
    content-saiba-mais
    footer-content

</template>
<script>

  import NavContent from '@/components/navegation/NavContent';
  import HeaderContent from '@/components/header/HeaderContent';
  import SectionDepoimentos from '@/components/depoimentos/SectionDepoimentos';
  import ContentContato from '@/components/contato/ContentContato';
  import ContentSaibaMais from '@/components/saiba-mais/ContentSaibaMais';
  import ContentProfessores from '@/components/professores/ContentProfessores';
  import ContentSobre from '@/components/sobre/ContentSobre';
  import FooterContent from '@/components/footer/FooterContent';
  
  export default {
    name: 'hello',
    components: {
      NavContent,
      HeaderContent,
      SectionDepoimentos,
      ContentContato,
      ContentSaibaMais,
      ContentProfessores,
      ContentSobre,
      FooterContent,
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
