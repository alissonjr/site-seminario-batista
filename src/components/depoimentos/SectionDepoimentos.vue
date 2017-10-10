<template lang="pug">
  section
    container
      title-section Depoimentos
      row.testimony
        column(md="4", class="", v-for="p in pessoas" :key="p.name")
          div.testemunho
            p {{ p.texto }}
          div.person
            span(class="avatar")
            div.info
              div.name {{ p.nome }}
              div.reference {{ p.local }}
</template>
<script>

  import defaultContentProvider from '@/providers/defaultContentProvider';

  import TitleSection from '@/components/utils/Title';

  export default {
    components: {
      TitleSection,
    },
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
          font-size: 0.8em
          background: #eaeaea
          border-radius: 3px
          margin: 15px 5px
          padding: 30px
          text-align: justify
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
