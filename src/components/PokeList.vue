<template>
  <ul>
    <li v-for="poke in pokeList" :key="poke.name">
      {{ poke.name }}
      <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`">
    </li>
  </ul>
</template>

<script>
export default {

  computed: {
    pokeList() {
      console.log(this.$store.state.list)
      return this.$store.state.list;
    }
  },
  created() {
    this.$store.dispatch('FETCH_POKE_LIST', 10)
  },
}
</script>

<style scoped>

</style>