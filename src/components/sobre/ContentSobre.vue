<template lang="pug">

  section
    container
      row
        column(md="6")
          title-section Sobre nós
          .text
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at turpis vel tellus auctor malesuada nec ac arcu. Cras ornare posuere sem vitae sodales. Ut orci nibh, vestibulum id scelerisque porttitor, tristique interdum velit. Cras et commodo tortor. Maecenas sed erat at lectus aliquet fermentum at sit amet leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vel neque malesuada, tempus diam vel, aliquet leo. Phasellus lobortis, ligula in pretium ullamcorper, erat ante dictum nisi, vel facilisis purus purus in nisi. Nunc tempus eros est, vitae pretium elit hendrerit non. Nulla erat odio, accumsan at euismod vitae, porta id nulla. Donec maximus volutpat rutrum.
            //- p Curabitur ac massa in arcu dictum commodo commodo congue nisi. Aliquam molestie et neque at tincidunt. Nulla eu pretium ante. Quisque libero dolor, aliquam vitae eleifend sed, scelerisque sed est. Vestibulum fringilla magna posuere malesuada vulputate. Donec tincidunt interdum mi, a pharetra risus pellentesque vitae. Duis sem enim, ornare sit amet porta et, ultrices eu ante. Nam scelerisque diam et porttitor hendrerit. Mauris imperdiet massa at massa placerat pharetra. Vestibulum eget eleifend lacus, nec tempus elit. Etiam dignissim, augue non iaculis lobortis, urna purus tristique sem, tempus consequat sapien turpis vitae magna. Aenean non nisl ac arcu finibus mattis sed quis arcu. Nullam condimentum neque risus, eget fermentum ligula suscipit pretium.
        column(md="6")

</template>
<script>

  import TitleSection from '@/components/utils/Title';

  export default {
    components: {
      TitleSection,
    },
    data() {
      return {
        
      }
    }
  }

</script>
<style lang="sass" scoped>

  section
    padding: 100px 0
    text-align: left
    position: relative
    img
      width: 100%
      height: auto
      opacity: 0.15
      padding: 30px
    .text
      // margin: 50px 0
      text-align: justify
      // padding: 50px
      position: relative
      word-wrap: break-word
      // background: #fbfbfb
      border-radius: 5px
      line-height: 1.5
      
</style>
