<template>
  <div
    class="CardList">
    <h2 v-if="title">
      {{title}}
    </h2>
    <Card
      v-for="item in cards" :key="item.id"
      :cardData="item"
      :has-button="hasButton"
    />
  </div>
</template>

<script>
import Card from '../components/Card'
// import { mapState } from 'vuex'
export default {
  name: 'CardList',
  data () {
    return {
      // styles: {
      //   width: this.width + 'vw'
      // }
    }
  },
  // props: [
  //   'cards'
  // ],
  props: {
    cards: {
      type: Array
    },
    hasButton: {
      type: Boolean,
      default: true
    },
    title: {
      type: String
    }
  },
  components: {
    Card
  },
  computed: {
    // styles () {
    //   return {
    //     active: true,
    //     width: this.width + 'vw'
    //   }
    // }
  },
  mounted () {
    // console.log(this.cards)
  },
  methods: {}
}
</script>

<style>
.CardList {
  width: 60vw;
  min-width: 500px;
}
</style>
