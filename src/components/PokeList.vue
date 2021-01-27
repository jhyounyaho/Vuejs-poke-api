<template>
  <div @scroll="scroll" class="list">
    <div v-for="poke in pokeList" :key="poke.name" class="poke" @click="pokeDetail(poke.id)">
      <img :src="`${imgSrc}${poke.id}.png`">
      <p>{{ poke.name }}</p>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
      isBottom: false,
      offset: 0,
      scrolledToBottom: false,
    }
  },
  computed: {
    pokeList() {
      console.log(this.$store.state.list)
      return this.$store.state.list;
    },
  },
  created() {
    this.fetchData();
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    ...mapMutations([
      'SHOW_DETAIL_LIST',
    ]),
    ...mapActions([
      'FETCH_POKE_LIST',
      'FETCH_POKE_INFO',
    ]),
    fetchData() {
      this.FETCH_POKE_LIST(this.offset)
    },
    scroll () {
      window.onscroll = () => {
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
        if (bottomOfWindow) {
          console.log('bottom!!')
          // this.scrolledToBottom = true // replace it with your code
          //this.next()
        }
      }
    },
    next() {
      this.offset += 20;
      this.fetchData();
    },
    pokeDetail(id) {
      this.FETCH_POKE_INFO(id);
    },
  },
  mounted () {
    this.scroll()
  }
}
</script>

<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  width: 100%;
  max-width: 510px;
}
.poke {
  height: 150px;
  background-color: #efefef;
  text-align: center;
  text-transform: capitalize;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 15px 30px rgba(0,0,0,.2),
  0 10px 10px rgba(0,0,0,.2);
}
</style>