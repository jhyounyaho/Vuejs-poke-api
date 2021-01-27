<template>
  <div>
    PokeSearch
    <input type="text" v-model="pokeId" @keyup.enter="searchPoke" placeholder="e.g., 34">
    <button @click="searchPoke">조회</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      pokeId: '',
    }
  },
  methods: {
    ...mapActions([
      'FETCH_POKE_INFO',
    ]),
    searchPoke() {
      this.FETCH_POKE_INFO(this.pokeId);
    },
  },
}
</script>

<style scoped>

</style>