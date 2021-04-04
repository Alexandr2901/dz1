<template>
  <div>
    <div
      v-on:click.stop="$emit('closeModal')"
      class="modalContainer">
    </div>
  <div class="modal">
    <div
      style="display: flex;
      justify-content: space-between;
      background-color: white;
      border-radius: 10px;
      padding-right: 5px;
">
      <input
        v-bind:value="localData.isIncome"
        v-on:change="dataTypeValidate($event.target.checked)"
        type="checkbox"
        id="checkbox"
        v-model="localData.isIncome">
      <label for="checkbox">
        {{ this.localData.isIncome ? 'доход': 'расход' }}
      </label>
    </div>
    <input
      type="number"
      placeholder="сумма"
      v-bind:value="localData.sum"
      v-on:input="dataSumValidate($event.target.value)"
    >
    <input v-model="localData.title" placeholder="название">
    <textarea
      v-model="localData.description"
      placeholder="описание"/>
    <button v-on:click="sendToParent">
      подтвердить
    </button>
  </div>
  </div>
</template>

<script>

export default {
  name: 'modalVue',
  components: {},
  props: [
    'editData'
  ],
  data () {
    // let objCopy = Object.assign({}, obj);
    return {
      message: '',
      localData: Object.assign({}, this.editData)
      // localData: {
      //   sum: '',
      //   title: '',
      //   description: '',
      //   type: true,
      //   id: null
      // }
    }
  },
  methods: {
    dataSumValidate (sum) {
      if (sum < 0) {
        this.localData.isIncome = false
      } else {
        this.localData.isIncome = true
      }
      this.localData.sum = sum
    },
    dataTypeValidate (type) {
      if (type) {
        this.localData.sum = Math.abs(this.localData.sum)
      } else {
        this.localData.sum = -Math.abs(this.localData.sum)
      }
      this.localData.isIncome = type
      // console.log(this.localData)
    },
    closeModal () {
      this.$emit('closeModal')
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
    // console.log(this.editData)
  },
  computed: {
    // dataToReturn () {
    //   const data = this.localData
    //   data.sum = 1
    //   return data
    // }
  }
  // beforeDestroy () {
  //   this.$emit('saveLocalData', this.localData)
  //   // console.log('123')
  // }
}
</script>

<style>
.modal {
  opacity: 1;
  border-radius: 25px;
  position: absolute;
  background-color: #7578E0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 25px;
}
.modalContainer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: gray;
  width:100%;
  height:100%;
  opacity: 0.5;
}
textarea {
  height: auto;
}
</style>
