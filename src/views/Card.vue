<template>
  <div class="Card" v-if="getCardById(+$route.params.id)">
    <div v-bind:style="bgColor" style="display: flex; justify-content: space-between">
      <h3
        class="title"
      >{{ cardData.title }}
      </h3>
      <button
        v-if="!isMine(cardData.user_id)"
        v-on:click="add(cardData.id)">
        <img
          title="favorites"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Favorites.svg/1024px-Favorites.svg.png"/>
      </button>
    </div>
    <div class="description">{{ cardData.text }}</div>
    <div class="comments">
      тут могли быть ваши коментарии
    </div>
    <img src="https://i.ytimg.com/vi/0J52sT-jIcs/maxresdefault.jpg">
  </div>
</template>

<script>

import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'Card',
  components: {},
  data: function () {
    return {
    }
  },
  methods: {
    ...mapMutations({
      add: 'User/ADD_OR_DELETE_FROM_FAVORITES'
    })
  },
  computed: {
    ...mapGetters({
      isFavorites: 'User/isFavorites',
      getCardById: 'getCardById',
      isMine: 'isMine'
    }),
    cardData () {
      return this.getCardById(+this.$route.params.id)
    },
    bgColor () {
      const color = (this.isFavorites(this.cardData.id)) ? '#3def6b' : 'white'
      return 'background-color:' + color
    }
  }
}
</script>

<style lang="scss" scoped>
.Card{
  display: flex;
  flex-direction: column;
  text-align: left;
  border-radius: 10px;
  margin: 5px;
  padding: 5px;
}
.description{
  word-wrap: anywhere;
}

button {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;

img {
  height: 1.2em;
  width: 1.3em;
}
}
.title{
  background-color: white;
  margin: 0;
}
.comments {
  padding-top: 26px;
  padding-bottom: 24px;
  text-align: center;
}

</style>
