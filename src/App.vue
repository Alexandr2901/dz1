<template>
  <div id="app">
    <Header/>
    <div v-if="categories.length > 0">
      <router-view/>
    </div>
  </div>
</template>

<script>

import Header from '@/components/Header'
import { mapState } from 'vuex'

export default {
  components: {
    Header
  },
  computed: {
    ...mapState({
      categories: state => state.server.categories
    })
  },
  mounted () {
    // console.log(this.categories)
    // setTimeout(() => {
    //   console.log(this.categories)
    // }, 1000)
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
