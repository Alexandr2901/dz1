<template>
  <div class="Card"
       v-bind:style="cardStyle"
  >
    <div>
      <div style="display: flex; justify-content: space-between">
        <div>
          sum:{{ cardData.sum }}
        </div>
        <div style="display: flex; flex-wrap: nowrap">
          <button v-on:click="deleteCard">
            <img
              title="delete"
              src="http://s1.iconbird.com/ico/1112/Onebit/w48h481351854534onebit33.png"/>
          </button>
          <button v-on:click="editCard">
            <img
              title="edit"
              src="https://img.icons8.com/android/2x/edit.png"/>
          </button>
        </div>
      </div>
      <div>title:{{ cardData.title }}</div>
      <div class="description">description:{{ cardData.description }}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Card',
  components: {},
  props: [
    'cardData'
  ],
  data: function () {
    return {
      // styles: {
      //   'background-color': '#00ff00'
      // }
    }
  },
  methods: {
    deleteCard () {
      this.$emit('deleteCard', this.cardData.id)
    },
    editCard () {
      this.$emit('editCard', this.cardData.id)
    }
  },
  computed: {
    cardStyle () {
      return {
        'background-color': this.cardData.isIncome ? '#48E07D' : '#E04D48'
      }
    }
  }
}
</script>

<style>
.Card{
  border-radius: 10px;
  margin: 5px;
  padding: 5px;
  /*color: #ae2121;*/
}
.description{
  word-wrap: anywhere;
}
img {
  height: 1.2em;
  width: 1.3em;
}
button {
  /*border: none;*/
  background-color: white;
  border-color: black;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
}
</style>
