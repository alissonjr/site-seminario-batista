<template lang="pug">

  a(:class="type" :href="link")
    slot {{ text }}
    |
    i(class="fa fa-chevron-right")

</template>
<script>

  export default {
    props: ['type', 'text', 'link'],
    data() {
      return {
        type,
        text,
      };
    },
  };

</script>
<style lang="sass" scoped>

  a
    padding: 20px
    font-weight: bold
    border-radius: 50px
    text-decoration: none
    color: white
    &.outline
      border: 3px solid #41caf4
    .fa
      margin-left: 10px

</style>
