<template>
  <div>
    <i class="fas fa-heart" @click="pokeScrap(pokeId)"></i>
    <img :src="`${imgSrc}${pokeId}.png`" @click="pokeDetail(pokeId)">
    <p>{{ this.pokeName }}</p>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  props: {
    id: String,
    name: String,
  },
  data() {
    return {
      pokeId: this.id,
      pokeName: this.name,
      imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
    }
  },
  methods: {
    ...mapActions([
      'FETCH_POKE_INFO',
    ]),
    pokeDetail(id) {
      this.FETCH_POKE_INFO(id);
    },
    pokeScrap(id) {
      console.log(id)
    },
  }
}
</script>

<style scoped>
img {
  cursor: pointer;
}
i {
  cursor: pointer;
  position: absolute;
  padding: 10px;
  display: block;
}
</style>