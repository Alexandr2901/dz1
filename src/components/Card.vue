<template>
  <div class="Card">
      <div v-bind:style="bgColor" style="display: flex; justify-content: space-between">
        <h3
          v-on:click="toCard(cardData.id)"
          class="title"
        >{{ cardData.title }}
        </h3>
        <button
          v-if="hasButton" v-on:click="add(cardData.id)">
          <img
            title="favorites"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Favorites.svg/1024px-Favorites.svg.png"/>
        </button>
      </div>
      <div class="description">{{ cardData.text }}</div>
  </div>
</template>

<script>

import { mapMutations, mapGetters } from 'vuex'
import router from '@/router'

export default {
  name: 'Card',
  components: {},
  props: [
    'cardData',
    'hasButton'
  ],
  data: function () {
    return {
      // styles: {
      //   'background-color': '#00ff00'
      // }
    }
  },
  methods: {
    ...mapMutations({
      add: 'User/ADD_OR_DELETE_FROM_FAVORITES'
    }),
    toCard (id) {
      router.push({ path: 'card/' + id })
    }
  },
  computed: {
    ...mapGetters({
      isFavorites: 'User/isFavorites'
    }),
    bgColor () {
      const color = (this.isFavorites(this.cardData.id)) ? '#3def6b' : 'white'
      return 'background-color:' + color
    }
  }
}
</script>

<style scoped>
.Card{
  text-align: left;
  border-radius: 10px;
  margin: 5px;
  padding: 5px;
}
.description{
  word-wrap: anywhere;
}
img {
  height: 1.2em;
  width: 1.3em;
}
button {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
}
.title{
  background-color: white;
  margin: 0;
  text-decoration: blue underline;
}

</style>
