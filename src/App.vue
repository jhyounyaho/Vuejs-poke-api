<template>
  <div id="app">
    <PokeSearch></PokeSearch>
    <PokeList></PokeList>
    <PokeDetail v-if="showDetail"></PokeDetail>
  </div>
</template>

<script>

import PokeList from "@/components/PokeList";
import PokeSearch from "@/components/PokeSearch";
import PokeDetail from "@/components/PokeDetail";
export default {
  name: 'App',
  data() {
    return {
      showDetail: false,
    }
  },
  components: {
    PokeDetail,
    PokeSearch,
    PokeList
  },
  watch: {
  },
}
</script>

<style scoped>
</style>
