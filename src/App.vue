<template>
  <div id="app">
    <div class="poke-wrap">
      <img
        alt="poke logo"
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
      >
      <PokeSearch></PokeSearch>
      <PokeList></PokeList>
      <PokeDetail v-if="showDetail"></PokeDetail>
    </div>
  </div>
</template>

<script>

import PokeList from "@/components/PokeList";
import PokeSearch from "@/components/PokeSearch";
import PokeDetail from "@/components/PokeDetail";
import { mapState } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    PokeDetail,
    PokeSearch,
    PokeList
  },
  watch: {
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
  background: #e9ecef;
}
.poke-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  width: calc(100% - 20px);
  min-height: calc(100vh - 20px);

  font-size: 1rem;
  font-weight: normal;
}
</style>
