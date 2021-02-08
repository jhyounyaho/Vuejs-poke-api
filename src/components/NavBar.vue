<template>
  <div class="router-wrap">
    <span><router-link to="/list">Poke List</router-link></span> |
    <span><router-link to="/scrap">Scrap List</router-link></span>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.router-wrap,
.router-wrap a {
  color: #ffffff;
}
.router-wrap span {
  padding: 0 5px;
}
.router-wrap .router-link-exact-active {
  color: #ffd43b;
  font-weight: bold;
}
</style>