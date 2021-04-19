<template>
  <div v-if="Post" class="Post">
    <div
      style="display: flex; flex-direction: row; justify-content: space-around">
      <div v-if="editIsTrue">{{ Post.author }}</div>
      <div v-else>вы видимо автор</div>
      <div>
        <button
          v-if="!editIsTrue && !newIsTrue"
          @click="startEdit"
        >edit
        </button>
        <button
          @click="save"
          v-else>
          save
        </button>
        <button
          @click="deletePostInVue"
        >delete
        </button>
      </div>
      <input
        placeholder="Пока тут ничего нет"
        v-bind:disabled="isDisabled"
        v-model="Post.title">
    </div>
    <div
      v-if="isDisabled"
      class="PostText">
      {{ Post.text }}
    </div>
    <textarea
      placeholder="Пока тут ничего нет"
      class="PostText"
      v-else
      maxlength="5000"
      @click="resize"
      @input="resize"
      v-model="Post.text"/>
    <div
      v-if="!editIsTrue"
      class="Comments">
      <Comment
        v-for="comment in Post.comments"
        :data="comment"
        :key="comment.id"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Comment from '../components/Comment'
import router from '@/router'

export default {
  name: 'Post',
  components: {
    Comment
  },
  data () {
    return {
      blankPost: {
        author: '',
        title: '',
        text: ''
      },
      Post: null,
      stl: null
    }
  },
  props: {
    msg: String
  },
  methods: {
    ...mapActions({
      pullPost: 'server/pullPost',
      deletePost: 'server/deletePost',
      updatePost: 'server/updatePost',
      createPost: 'server/createPost'
    }),
    ...mapMutations({
      setPost: 'server/SET_POST'
    }),
    resize (event) {
      event.target.style.height = 'auto'
      event.target.style.height = `${event.target.scrollHeight}px`
    },
    startEdit () {
      router.push({ path: `/Post/${this.Post.id}/edit` })
    },
    deletePostInVue () {
      this.deletePost(this.Post.id)
    },
    setMountData (ts) {
      if (!ts.newIsTrue) {
        this.pullPost(+ts.$route.params.id).then((payload) => {
          ts.Post = payload.data
        })
      } else {
        ts.Post = ts.blankPost
      }
    },
    save () {
      if (this.newIsTrue) {
        this.createPost(this.Post).then((payload) => {
          // console.log('payload')
          router.push({ path: `/Post/${payload.data.id}` })
        })
      } else {
        this.updatePost(this.Post).then(() => {
          router.push({ path: `/Post/${this.Post.id}` })
        })
      }
    }
  },
  computed: {
    ...mapGetters({
      getPost: 'server/getPost'
    }),
    editIsTrue () {
      return this.$route.name === 'EditPost'
    },
    newIsTrue () {
      return this.$route.name === 'NewPost'
    },
    isDisabled () {
      return !(this.newIsTrue || this.editIsTrue)
    }
  },
  mounted () {
    this.setMountData(this)
  },
  beforeRouteUpdate (to, from, next) {
    this.$nextTick(() => {
      this.setMountData(this)
    })
    next()
  }
}
</script>

<style lang="scss">
.Post {
  margin: 10px;

  div {
    margin: 10px;
  }
}

input {
  border: none;
  width: auto;
  background-color: white;
}

textarea {
  border: none;
}

.PostText {
  padding: 15px;
  width: 90%;
  resize: none;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
}
</style>
