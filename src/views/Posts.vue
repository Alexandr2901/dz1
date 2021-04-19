<template>
  <div v-if="getPage(page)" class="home">
    <Post v-for="item in getPage(page).data"
          :key="item.id"
          :title="item.title"
          :text="item.text"
          :author="item.author"
          :id="item.id"
    />
    <div class="PostComponent">
      <button @click="changePage(+1)">вперёд</button>
      <div>на месте</div>
      <button @click="changePage(-1)">назад</button>
      <div>новый пост</div>
    </div>
  </div>
</template>

<script>

import Post from '../components/Post'
import { mapGetters, mapActions } from 'vuex'
import router from '@/router'

export default {
  name: 'Posts',
  data () {
    return {
    }
  },
  components: {
    Post
  },
  computed: {
    ...mapGetters({
      posts: 'server/getPosts',
      getPage: 'server/getPage'
    }),
    page () {
      if (isNaN(+this.$route.params.page)) {
        return 0
      } else {
        return +this.$route.params.page
      }
    }
  },
  methods: {
    ...mapActions({
      pullPage: 'server/pullSpecificPosts'
    }),
    changePage (param) {
      if ((this.page + param) > 0) {
        this.pullPage(this.page + param).then(() => {
          router.push({ path: `/Posts/${this.page + param}` })
        })
      }
    }
  },
  mounted () {
    this.pullPage(this.page)
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.buttons {
  padding: 15px;
  margin: 15px;
}
</style>
