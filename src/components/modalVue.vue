<template>
  <div class="modal">
    <div style="display: flex; justify-content: space-between ">
      <input
        v-bind:value="localData.type"
        v-on:change="dataTypeValidate($event.target.checked)"
        type="checkbox"
        id="checkbox"
        v-model="localData.type">
      <label for="checkbox">
        {{ this.localData.type ? 'доход': 'расход' }}
      </label>
    </div>
    <input
      type="number"
      placeholder="сумма"
      v-bind:value="localData.sum"
      v-on:input="dataSumValidate($event.target.value)"
    >
    <input v-model="localData.title" placeholder="название">
    <textarea v-model="localData.description" placeholder="описание"/>
    <button v-on:click="sendToParent">
      подтвердить
    </button>
  </div>
</template>

<script>

export default {
  name: 'modalVue',
  components: {},
  // props: [
  //   'cardData'
  // ],
  data () {
    return {
      message: '',
      localData: {
        sum: '',
        title: '',
        description: '',
        type: true
      }
    }
  },
  methods: {
    dataSumValidate (sum) {
      if (sum < 0) {
        this.localData.type = false
      } else {
        this.localData.type = true
      }
      this.localData.sum = sum
    },
    dataTypeValidate (type) {
      if (type) {
        this.localData.sum = Math.abs(this.localData.sum)
      } else {
        this.localData.sum = -Math.abs(this.localData.sum)
      }
      this.localData.type = type
    },
    sendToParent () {
      if (this.localData.sum === '') {
        alert('что-то не так')
      } else if (this.localData.title === '') {
        alert('что-то не так')
      } else if (this.localData.description === '') {
        alert('что-то не так')
      } else {
        this.$emit('sendData', this.localData)
      }
    }
  },
  mounted () {
  },
  computed: {
    dataToReturn () {
      const data = this.localData
      data.sum = 1
      return data
    }
  }
}
</script>

<style>
.modal {
  position: absolute;
  background-color: aqua;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 100px;
}
</style>
