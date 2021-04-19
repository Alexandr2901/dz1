<template>
  <div id="app">
    <header style="display: flex; justify-content: space-around">
      <router-link to="/Posts">home</router-link>
      <router-link to="/Post/new">new post</router-link>
    </header>
    <hr>
    <router-view/>
  </div>
</template>

<script>

export default {
  methods: {
  },
  mounted () {

  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
