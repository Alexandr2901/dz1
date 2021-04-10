<template>
  <div class="home">
    <CardList
      :cards="newsCards"
    />
  </div>
</template>

<script>

import CardList from '../components/CardList.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    CardList
  },
  computed: {
    ...mapState({
      newsCards: state => state.AppStore.newsCards
    })
  }
}
</script>

<style>
.home {
  display: flex;
  justify-content: center;
}
</style>
