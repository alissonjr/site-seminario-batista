<template lang="pug">

  div.block
    img(:src="data.image")
    div.content
      h3.title {{ data.name }}
      span.text {{ data.description }}



</template>
<script>

  export default {
    props: ["data"],
    data() {
      return {
      };
    },
  };

</script>
<style lang="sass" scoped>

  .block
    display: flex
    flex-flow: column
    height: 100%
    img
      // min-height: 200px
      width: 100%
      height: auto
    .content
      padding: 15px
      background: white
      .title
        text-transform: uppercase
        margin-bottom: 10px
      .text
        text-align: justify
      
</style>
