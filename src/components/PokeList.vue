<template>
  <div @scroll="scroll">
    <div class="list">
      <div v-for="poke in pokeList" :key="poke.id" class="poke">
        <Poke :id="poke.id" :name="poke.name" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import Poke from "@/components/Poke";

export default {
  data() {
    return {
      offset: 0,
      limit: 20,
    }
  },
  components: {
    Poke
  },
  computed: {
    pokeList() {
      return this.$store.state.list;
    },
  },
  created() {
    this.RESET_POKE_LIST()
    this.offset = 0;
    this.fetchData();
  },
  methods: {
    ...mapMutations([
      'SET_SCRAP_POKE_LIST',
      'RESET_POKE_LIST',
    ]),
    ...mapActions([
      'FETCH_POKE_LIST',
    ]),
    fetchData() {
      this.$route.name === 'list'
          ? this.FETCH_POKE_LIST({ offset: this.offset, limit: this.limit })
          : this.SET_SCRAP_POKE_LIST({ offset: this.offset, limit: this.limit })
    },
    scroll () {
      window.onscroll = () => {
        let bottomOfWindow = Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
        if (bottomOfWindow) {
          this.next()
        }
      }
    },
    next() {
      this.offset += this.limit;
      this.fetchData();
    },
  },
  mounted () {
    this.scroll()
  }
}
</script>

<style scoped>
.list {
  /*
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;
  */
  width: 100%;
  max-width: 510px;
}
.poke {
  height: 150px;
  background-color: #efefef;
  text-align: center;
  text-transform: capitalize;
  border-radius: 5px;
  box-shadow: 0 15px 30px rgba(0,0,0,.2),
  0 10px 10px rgba(0,0,0,.2);
  float: left;
  width: 230px;
  margin: 10px;
}
i {
  padding-bottom: 10px;
  cursor: pointer;
}
</style>