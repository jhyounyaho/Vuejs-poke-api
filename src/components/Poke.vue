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
    // 포켓몬 상세 정보
    pokeDetail(id) {
      this.FETCH_POKE_INFO(id);
    },
    // 스크랩 여부 체크
    isPokeScrap(id) {
      const storageScrapList = this.parsingScrapList();
      const findScrap = storageScrapList.find(scrap => scrap.id === id);
      this.isScrap = findScrap ? true : false;
    },
    // 스크랩 여부에 따라 추가, 삭제
    pokeScrap(id) {
      !this.isScrap ? this.addPokeScrap(id, this.pokeName) : this.deletePokeScrap(id)
    },
    // 스크랩 추가
    addPokeScrap(id) {
      const storageScrapList = this.parsingScrapList();
      if (storageScrapList) {
        const findScrap = storageScrapList.find(scrap => scrap.id === id);
        if (findScrap) return false
      }
      storageScrapList.push({id, name: this.pokeName})
      localStorage.scraplist = JSON.stringify(storageScrapList);
      this.isScrap = true
    },
    // 스크랩 제거
    deletePokeScrap(id) {
      const storageScrapList = this.parsingScrapList();
      const updateScrapList = storageScrapList.filter(scrap => scrap.id !== id)
      localStorage.scraplist = JSON.stringify(updateScrapList);
      this.isScrap = false
    },
    // localStorage 파싱
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