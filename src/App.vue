<template>
  <div id="app">
    <header>
      <router-link to="/Posts">home</router-link>
      <router-link to="/Post/new">new</router-link>
    </header>
    <router-view/>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      deletePost: 'server/deletePost',
      createPost: 'server/createPost',
      updatePost: 'server/updatePost'
    })
  },
  mounted () {
    // this.updatePost()
    // this.test()
    // this.test()
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
