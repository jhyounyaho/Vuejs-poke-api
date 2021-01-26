<template>
  <div>
    PokeDetail
    {{ pokeInfo }}
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    pokeInfo() {
      return this.$store.state.info;
    }
  },
  created() {
    //this.$store.dispatch('FETCH_POKE_INFO', 1)
  },
}
</script>

<style scoped>

</style>