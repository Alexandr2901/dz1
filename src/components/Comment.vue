<template>
  <div>
    <div class="topLine">
      <div>
        тут могла быть ваша дата
      </div>
      <div>
        {{ Comment.author }}
      </div>
      <div>
        <button
          v-if="editEnable"
          @click="startEdit"
        >
          изменить
        </button>
        <button
          @click="saveComment"
        v-else
        >сохранить</button>
        <button
          @click="deleteComm"
        >
          удалить
        </button>
      </div>
    </div>
    <textarea
      id="commentInput"
      @click="resize"
      @input="resize"
      v-bind:disabled="editEnable"
      class="commentText"
      v-model="Comment.text"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Comment',
  props: {
    startData: Object,
    post_id: Number
  },
  data: function () {
    return {
      Comment: this.startData,
      editEnable: true
    }
  },
  methods: {
    ...mapActions({
      deleteComment: 'server/deleteComment',
      createComment: 'server/createComment',
      updateComment: 'server/updateComment'
    }),
    deleteComm () {
      this.deleteComment(this.Comment.id).then(() => {
        this.$emit('need-update')
      })
    },
    resize (event) {
      event.target.style.height = 'auto'
      event.target.style.height = `${event.target.scrollHeight}px`
    },
    startEdit () {
      this.editEnable = false
      this.$nextTick(() => {
        document.getElementById('commentInput').focus()
      })
    },
    saveComment () {
      if (this.startData.id < 0) {
        console.log(this.Comment)
        this.Comment.id = null
        this.createComment(this.Comment).then(() => {
          this.$emit('need-update')
        })
      } else {
        this.updateComment(this.Comment).then(() => {
          this.$emit('need-update')
        })
      }
    }
  },
  mounted () {
    if (this.startData.id < 0) {
      this.startEdit()
    }
  }
}
</script>

<style scoped>
.topLine {
  display: flex;
  justify-content: space-around;
  border: black 1px solid;
  border-radius: 12px;
}

.commentText {
  background-color: white;
  padding: 5px;
  margin: 5px;
  /*border-radius: 13px;*/
  /*border: grey 3px solid;*/
  resize: none;
  width: 90%;

}
</style>
