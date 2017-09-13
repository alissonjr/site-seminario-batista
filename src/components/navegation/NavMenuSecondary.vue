<template lang="pug">
  
  nav
    ul
      li(v-for="nav in navegation")
        a(:href="nav.link") {{ nav.text }}

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
        axios.get('static/menu_secondary_links.json').then(res => this.navegation = res.data);
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
        a
          padding: 0 20px
          text-decoration: none
          display: flex
          align-items: center
          justify-content: center
          min-height: 30px
          font-size: .8em
          color: #919191
          &:hover
            color: #6A6A6A

</style>
