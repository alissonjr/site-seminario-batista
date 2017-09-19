<template lang="pug">
  section
    container
      h1.title DEPOIMENTOS
      row.testimony
        column(md="4", class="", v-for="p in pessoas" :key="p.name")
          div.testemunho
            p
              | testemunho
          div.person
            span(class="avatar")
            div.info
              div.name {{ p.nome }}
              div.reference {{ p.local }}
</template>
<script>

  import defaultContentProvider from '@/providers/defaultContentProvider';

  export default {
    data() {
      return {
        pessoas: [],
      };
    },
    created() {
      this.ready();
    },
    methods: {
      ready() {
        return defaultContentProvider.getTestimonies().then(res => this.pessoas = res);
      },
    },
  };
</script>
<style lang="sass" scoped>

  section
    .container
      padding: 100px 0
      position: relative
      &:before
        content: ' '
        display: block
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: url(../../assets/chat.svg) no-repeat
        background-position: 50px center
        background-size: 350px
        background-color: white
        opacity: 0.05
        z-index: -1
    .title
      text-align: left
      margin-bottom: 10
    .testimony
      .person
        display: flex
        align-items: center
        // justify-content: center
        .avatar
          background-color: gray
          width: 50px
          height: auto
          min-height: 50px
          display: block
          margin-right: 10px
          border-radius: 50%
        .info
          text-align: left
          .name
            text-transform: uppercase
            font-weight: bold
            font-size: 0.9rem
          .reference
            font-size: 0.7rem
            color: gray
      .testemunho
        p
          font-size: 1em
          background: #eaeaea
          border-radius: 3px
          margin: 15px 5px
          padding: 15px 5px
          &:after, &:before
            content: '"'
        &:after
          content: ' '
          background: #eaeaea
          display: block
          width: 15px
          height: 15px
          transform: rotate(45deg)
          position: absolute
          margin: auto
          margin-top: -25px
          margin-left: 15px
        .aspas
          // font-size: 3em

</style>
