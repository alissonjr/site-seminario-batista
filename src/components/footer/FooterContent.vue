<template lang="pug">
  
  footer
    container
      div.table
        span(class="item" v-for="item in navegation")
          span.title {{ item.title }}
          ul
            li(v-for="lk in item.links")
              a(:href="lk.link") {{ lk.text }}
    container.copyright
        | &copy; teste de copyright {{ year }}

</template>
<script>

  import axios from 'axios';

  export default {
    data() {
      return {
        navegation: [],
        year: new Date().getFullYear(),
      };
    },
    created() {
      this.read();
    },
    methods: {
      read() {
        axios.get('static/footer_tree.json').then(res => this.navegation = res.data);
      },
    },
  };

</script>
<style lang="sass" scoped>

  $text-color: #7b8394

  footer
    color: $text-color
    background: #f8f8f9

    .table
      padding: 50px 0
      display: flex
      justify-content: center
      .item
        margin: 0 50px
        .title
          display: block
          margin-bottom: 20px
          font-weight: bold
          text-transform: uppercase
        ul
          li
            list-style: none
            a
              text-decoration: none
              color: $text-color
              padding: 5px 0
              display: block
  
    .copyright
      display: flex
      width: auto
      justify-content: center
      padding: 20px 0
      background: white
      text-align: center
      font-size: .8em

</style>
