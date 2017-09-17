<template lang="pug">
  
  nav
    ul
      li(v-for="nav in navegation")
        nav-menu-link(:link="nav.link" :text="nav.text")

</template>
<script>

  import defaultContentProvider from '@/providers/defaultContentProvider';

  import NavMenuLink from '@/components/navegation/NavMenuLink';

  export default {
    components: {
      NavMenuLink,
    },
    data() {
      return {
        navegation: [],
      };
    },
    created() {
      this.read();
    },
    methods: {
      read() {
        return defaultContentProvider.getPrimaryMenu().then(res => this.navegation = res);
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

</style>
