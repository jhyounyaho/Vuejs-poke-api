<template>
  <div>
    PokeSearch
    <input type="text" v-model="pokeId" @keyup.enter="searchPoke" placeholder="e.g., 34">
    <button @click="searchPoke">조회</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokeId: '',
    }
  },
  methods: {
    searchPoke() {
      console.log(this.pokeId)
      this.$store.dispatch('FETCH_POKE_INFO', this.pokeId)
    },
  },
}
</script>

<style scoped>

</style>