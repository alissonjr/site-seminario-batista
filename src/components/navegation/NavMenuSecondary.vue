<template lang="pug">
  
  container(fluid)
    ul
      li(v-for="nav in navegation")
        a(:href="nav.link") {{ nav.text }}
      li.address
        a(:href="getMapLink(address)" target="_blank")
          i(class="fa fa-map-marker")
          | 
          | {{ address }}

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
        address: "",
      };
    },
    created() {
      this.read();
    },
    methods: {
      read() {
        return defaultContentProvider.getSecondaryMenu()
          .then(res => this.navegation = res)
          .then(defaultContentProvider.getcompanyAddress)
          .then(res => this.address = `${res.location}, Nº ${res.number}, ${res.district}, ${res.city} - ${res.state}`);
      },
      getMapLink(address) {
        return `https://www.google.com/maps/search/?api=1&query=Primeira Igreja Batista ${address}`;
      }
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
          justify-content: flex-end
          min-height: 30px
          font-size: .8em
          color: #6A6A6A
        a:hover
          background: rgba(0, 0, 0, 0.01)
        &.address
          .fa
            margin-right: 5px

</style>
