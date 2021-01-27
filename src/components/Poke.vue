<template>
  <div>
    <i class="fas fa-heart" @click="pokeScrap(pokeId)" :class="{ isScrap: isScrap }"></i>
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
      isScrap: false,
    }
  },
  created() {
    // 스크랩 여부 체크
    this.isPokeScrap(this.pokeId)
  },
  methods: {
    ...mapActions([
      'FETCH_POKE_INFO',
    ]),
    pokeDetail(id) {
      this.FETCH_POKE_INFO(id);
    },
    isPokeScrap(id) {
      const storageScrapList = this.parsingScrapList();
      const findScrap = storageScrapList.find((scrapId) => scrapId === id);
      this.isScrap = findScrap ? true : false;
    },
    pokeScrap(id) {
      !this.isScrap ? this.addPokeScrap(id) : this.deletePokeScrap(id)
    },
    addPokeScrap(id) {
      const storageScrapList = this.parsingScrapList();
      if (storageScrapList) {
        const findScrap = storageScrapList.find(scrapId => scrapId === id);
        if (findScrap) return false
      }
      storageScrapList.push(id)
      localStorage.scraplist = JSON.stringify(storageScrapList);
      this.isScrap = true
    },
    deletePokeScrap(id) {
      const storageScrapList = this.parsingScrapList();
      const updateScrapList = storageScrapList.filter(scrapId => scrapId !== id)
      localStorage.scraplist = JSON.stringify(updateScrapList);
      this.isScrap = false
    },
    parsingScrapList() {
      return localStorage.scraplist ? JSON.parse(localStorage.scraplist) : [];
    }
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
.isScrap {
  color: #f03e3e;
}
</style>