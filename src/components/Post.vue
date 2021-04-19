<template>
  <div @click="toPost()" class="PostComponent">
    <div style="display: flex; flex-direction: row; justify-content: space-around">
      <div>{{author}}</div>
      <div>{{title}}</div>
    </div>
    <div>{{text}}</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import router from '@/router'

export default {
  name: 'PostComponent',
  props: {
    id: Number,
    title: String,
    text: String,
    author: String
  },
  methods: {
    ...mapActions({
      pullPost: 'server/pullPost'
    }),
    toPost () {
      this.pullPost(this.id)
      router.push({ path: `/Post/${this.id}` })
    }
  }
}
</script>

<style lang="scss">
.PostComponent {
  max-width: 400px;
  max-height: 300px;
  margin: 10px;
  padding: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  border: black 3px solid;
  border-radius: 15px;

}
</style>
