<template lang="pug">

  section
    container
      title-section Professores
      row(class="professores")
        column(md="3" v-for="prof in professores")
          Professor(:data="prof")


</template>
<script>

  import TitleSection from '@/components/utils/Title';
  import Professor from '@/components/professores/BlockProfessor';

  import teachersProvider from '@/providers/teachersProvider';

  export default {
    components: {
      TitleSection,
      Professor,
    },
    data() {
      return {
        professores: [],
      };
    },
    created() {
      this.ready();
    },
    methods: {
      ready() {
        return teachersProvider.getTeachers().then(res => this.professores = res);
      },
    },
  };

</script>
<style lang="sass" scoped>

  section
    padding: 100px 0
    background: white
    text-align: left
    background: #fbfbfb
      
</style>
