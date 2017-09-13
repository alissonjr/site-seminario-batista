<template lang="pug">
  
  nav
    ul
      li(v-for="nav in navegation")
        nav-menu-link(:link="nav.link" :text="nav.text")

</template>
<script>

  import axios from 'axios';

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
        axios.get('static/menu_primary_links.json').then(res => this.navegation = res.data);
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
