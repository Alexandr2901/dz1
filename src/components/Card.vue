<template>
  <div class="Card"
       v-bind:style="styles"
  >
    <div>
      <div style="display: flex; justify-content: space-between">
        <div>
          sum:{{cardData.sum}}
        </div>
        <div>
          <img
            v-on:click="deleteCard"
            src="http://s1.iconbird.com/ico/1112/Onebit/w48h481351854534onebit33.png"/>
          <img
            v-on:click="editCard"
            src="https://img.icons8.com/android/2x/edit.png"/>
        </div>
      </div>
      <div>title:{{cardData.title}}</div>
      <div class="description">description:{{cardData.description}}</div>
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
      styles: {
        'background-color': '#00ff00'
      }
    }
  },
  mounted () {
    if (this.cardData.sum < 0) {
      this.styles['background-color'] = 'red'
    }
  },
  methods: {
    deleteCard () {
      this.$emit('deleteCard', this.cardData.id)
    },
    editCard () {
      this.$emit('editCard', this.cardData.id)
    }
  }
}
</script>

<style>
.Card{
  border-radius: 10px;
  margin: 5px;
  padding: 5px;
  /*color: #00ff00;*/
}
.description{
  word-wrap: anywhere;
}
img {
  height: 1.2em;
  width: 1.3em;
}
</style>
