<template lang="pug">
  
  nav
    ul
      li(v-for="nav in navegation")
        nav-menu-link(:link="nav.link" :text="nav.text")
      li
        span.contact
          i(class="fa fa-phone-square")
          | 
          | {{ phone }}

</template>
<script>

  import defaultContentProvider from '@/providers/defaultContentProvider';

  import NavMenuLink from '@/components/navegation/NavMenuLink';

  import TextFormat from '@/utils/TextFormat';

  export default {
    components: {
      NavMenuLink,
    },
    data() {
      return {
        navegation: [],
        phone: "",
      };
    },
    created() {
      this.read();
    },
    methods: {
      read() {
        return defaultContentProvider.getPrimaryMenu()
          .then(res => this.navegation = res)
          .then(defaultContentProvider.getcompanyContact)
          .then(res => this.phone = TextFormat.Phone(res.primary_phone));
      },
    },
  };

</script>
<style lang="sass" scoped>

  nav
    ul
      li
        list-style: none
        float: left
        .contact
          padding: 0 20px
          text-decoration: none
          color: white
          display: flex
          align-items: center
          justify-content: center
          min-height: 70px
          font-size: 1em
          font-weight: bold
          text-transform: uppercase
          background: #2c3e50
          .fa
            margin-right: 5px

</style>
