<template lang="pug">
  
  div
    ul
      li(v-for="nav in navegation")
        a(:href="nav.link") {{ nav.text }}
      li
        a
          i(class="fa fa-info")

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
        return defaultContentProvider.getSecondaryMenu().then(res => this.navegation = res);
      },
    },
  };

</script>
<style lang="sass" scoped>

  div
    ul
      li
        list-style: none
        float: left
        a, .text
          padding: 0 20px
          text-decoration: none
          display: flex
          align-items: center
          justify-content: center
          min-height: 30px
          font-size: .8em
          color: #919191
        a:hover
          color: #6A6A6A

</style>
