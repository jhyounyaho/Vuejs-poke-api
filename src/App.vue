<template>
  <div id="app">
    <div class="poke-wrap">
      <router-link to="/">
        <img
            alt="poke logo"
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
        >
      </router-link>
      <PokeSearch></PokeSearch>
      <NavBar></NavBar>
      <router-view></router-view>
      <PokeDetail v-if="showDetail"></PokeDetail>
    </div>
  </div>
</template>

<script>
import PokeSearch from "@/components/PokeSearch";
import PokeDetail from "@/components/PokeDetail";
import { mapState } from 'vuex';
import NavBar from "@/components/NavBar";

export default {
  components: {
    NavBar,
    PokeDetail,
    PokeSearch,
  },
  computed: {
    ...mapState({
      showDetail: 'showDetail',
    })
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
#app {
  background-color: #42b883;
}
.poke-wrap {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  width: calc(100% - 20px);
  min-height: calc(100vh - 20px);

  font-size: 1rem;
  font-weight: normal;
}
</style>
