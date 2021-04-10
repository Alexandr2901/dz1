<template>
  <div v-if="userData" class="UserProfile">
    <div class="title">
      <img :src="userData.photos[0]">
      <div class="textData ">
        <div><span>человеческое имя : </span>{{userData.name}}</div>
        <div><span>компьютерный аддрес = </span>{{userData.email}}</div>
        <div><span>мировоззрение=> </span>{{userData.status}}</div>
      </div>
      <img :src="userData.photos[1]">
    </div>
    <div class="main mainAnim">
      <CardList
        :title="'любимые'"
        :cards="getFilteredCards(favorite())"/>
      <CardList
        :has-button="false"
        :title="'мои'"
        :cards="getFilteredCards(withMyId(userData.id))"/>
    </div>
  </div>
  <div v-else>
    <Cssload/>
  </div>
</template>

<script>
import CardList from '../components/CardList.vue'
import Cssload from '../components/cssload'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'UserProfile',
  data () {
    return {}
  },
  components: {
    Cssload,
    CardList
  },
  computed: {
    ...mapState('User', {
      userData: 'userProfile'
    }),
    ...mapGetters({
      getFilteredCards: 'getFilteredCards',
      favoriteCards: 'favoriteCards',
      isFavorites: 'isFavorites',
      getFavorites: 'User/getFavorites'
    })
  },
  methods: {
    withMyId (id) {
      return item => item.user_id === id
    },
    favorite () {
      return item => this.getFavorites.has(item.id)
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.UserProfile{
  width: 75vw;
  /*background-color: #b9c8b3;*/
}
@keyframes appearance {
  0% {
    opacity: 0.25;
  }
  100% {
    opacity: 1;
  }
}
.title {
  animation: appearance 0.25s linear;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
img{
  width: 200px;
  border-radius: 20px;
}
.textData{
  border-radius: 20px;
  border-top: 3px solid;
  border-bottom: 3px solid;
  text-align: left;
  padding: 15px;
}
.main{
  animation: appearance 0.5s linear;
  display: flex;
  /*align-items: center;*/
  justify-content: center;
  /*background-color: aqua;*/
}
</style>
