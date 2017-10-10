<template lang="pug">
  
  header
    nav-content
    container
      row
        column(md="6")
          img(src="../../assets/simbolo-outline.png" class="logotype")
          
        column(md="6")
          .text
            h3 Centro teológico Batista
            h1
              | Vale do
              .white Rio Doce
            btn-primary(type="outline" link="aaa.html") Tenho Interesse
      .saiba_mais
        column(md="12")
          a(href="")
            div Saiba Mais
            | 
            i(class="fa fa-chevron-down")

</template>
<script>

  import NavContent from '@/components/navegation/NavContent';
  import BtnPrimary from '@/components/utils/BtnPrimary';

  export default {
    components: {
      NavContent,
      BtnPrimary,
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
      read() {},
    },
  };

</script>
<style lang="sass" scoped>

  header
    color: white
    position: relative
    height: 100%
    text-align: center
    align-content: center
    // align-items: center
    flex-flow: column wrap
    display: flex
    background: radial-gradient(rgba(44, 62, 80, 0.25), rgba(44, 62, 80, 0.7)), url(../../assets/cross.jpg)
    background-position: center bottom
    background-repeat: no-repeat
    background-size: cover
    .container
      height: auto
      // align-items: center
      display: flex
      flex: 1
      flex-flow: column
      // padding: 100px 0
      // justify-content: center
      position: relative
      text-transform: uppercase
      display: flex
      .row
        width: 100%
        .col
          display: flex
          align-items: center
          align-content: center
          flex: 1
        .text
          display: block
          text-align: left
          height: auto
          h1
            text-transform: uppercase
            font-size: 5em
            font-weight: 900
            word-spacing: -15px
            line-height: 85%
            margin-bottom: 50px
            .color
              background: linear-gradient(135deg, #2c3e50 30%,#109EEA 100%)
              -webkit-background-clip: text
              background-clip: text
              color: transparent
            .white
              color: white

          h3
            letter-spacing: 3px
            display: block
            width: 100%
            // margin-bottom: 20px

      .logotype
        width: 100%
        height: auto
        padding: 60px
        opacity: 1
    .saiba_mais
      flex: 0
      // align-self: baseline
      margin: 10px
      padding: 15px
      a
        display: block
        text-decoration: none
        color: white
        font-size: 0.8em
        div
          margin-bottom: 10px
        .fa
          font-size: 1.5em

</style>
