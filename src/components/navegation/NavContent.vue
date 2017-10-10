<template lang="pug">
  
  section
    div(class="secondary")
      nav-menu-secondary
    container(class="primary")
      span(class="logotipo")
        img(src="../../assets/logotipo.png")
        | 
        //- span Centro teológico Batista Vale do rio doce
      span(class="navegation")
        nav-menu-primary
        span.contact
          i(class="fa fa-phone-square")
          | 
          | {{ phone }}

</template>
<script>
  
  import NavMenuPrimary from '@/components/navegation/NavMenuPrimary';
  import NavMenuSecondary from '@/components/navegation/NavMenuSecondary';

  import defaultContentProvider from '@/providers/defaultContentProvider';

  import TextFormat from '@/utils/TextFormat';

  export default {
    components: {
      NavMenuPrimary,
      NavMenuSecondary,
    },
    data() {
      return {
        phone: ""
      };
    },
    created() {
      this.ready();
    },
    methods: {
      ready() {
        return defaultContentProvider.getcompanyContact().then(res => this.phone = TextFormat.Phone(res.primary_phone));
      },
    },
  };

</script>
<style lang="sass" scoped>

  .primary
    display: flex
    justify-content: space-between
    position: relative
    height: 60px
    margin-top: 20px
    .logotipo
      display: flex
      align-items: center
      img
        height: 25px
        margin: 20px 20px
        display: block
      span
        text-transform: uppercase
        font-weight: bold

    .navegation
      display: flex

    .contact
      padding: 0 30px
      text-decoration: none
      color: white
      display: flex
      align-items: center
      justify-content: center
      font-size: 1em
      font-weight: bold
      text-transform: uppercase
      background: #41caf4
      border-radius: 50px
      margin-left: 20px
      .fa
        margin-right: 5px

  .secondary
    display: none
    background: white
    width: 100%
    margin: 0
    justify-content: flex-end
    // flex-flow: row wrap
    padding-right: 20px

</style>
