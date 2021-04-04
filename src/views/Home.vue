<template>
  <div class="home">
    <h1>
      Расходы и доходы
      <svg
        @click.stop="modalVueShow = true"
        height="469.33333pt"
        viewBox="0 0 469.33333 469.33333"
        width="469.33333pt" xmlns="http://www.w3.org/2000/svg"
        id="fi_1828819">
        <g fill="#4caf50">
          <path
            d="m437.332031 192h-405.332031c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h405.332031c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0"></path>
          <path
            d="m192 32v405.332031c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-405.332031c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32zm0 0"></path>
        </g>
      </svg>
    </h1>
    <div>Итог:{{account}}</div>
    <div class="cardsList">
      <div
        v-for="card in Cards"
        :key="card.id"
        class="cards">
        <Card
          v-on:editCard ="editCard"
          v-on:deleteCard="deleteCard"
          :card-data="card"
        />
      </div>
    </div>
    <modalVue
      v-bind:edit-data="modalData"
      v-on:sendData="modalFunc"
      v-on:closeModal="modalVueShow = false"
      v-if="this.modalVueShow"
    />
  </div>
</template>
<!--      v-on:saveLocalData="modalDataSaved = updateId ? false : $event"-->
<script>
import Card from '@/components/Card'
import modalVue from '@/components/modalVue'

export default {
  name: 'Home',
  components: {
    Card,
    modalVue
  },
  data () {
    return {
      modalVueShow: false,
      newCardId: 0,
      Cards: [],
      modalData: {
        sum: '',
        title: '',
        description: '',
        isIncome: true
      },
      // modalDataSaved: null,
      updateId: false
    }
  },
  mounted () {
    this.newCard(565119, 'test', 'test')
    this.newCard(-106490, 'test', 'test')
    this.newCard(-106580, 'test', 'test')
    this.newCard(161100, 'test', 'test')
  },
  computed: {
    account () {
      let count = 0
      this.Cards.forEach(item => {
        count += +item.sum
      })
      return count
    }
  },
  methods: {
    modalFunc (data) {
      const { sum, title, description } = data
      if (this.updateId) {
        this.changeCard(sum, title, description)
      } else {
        this.newCard(sum, title, description)
      }
      this.modalData = {
        sum: '',
        title: '',
        description: '',
        isIncome: true
      }
      // this.modalDataSaved = false
      this.modalData = false
      this.modalVueShow = false
    },
    newCard (sum, title, description) {
      this.newCardId++
      this.Cards.push({
        id: this.newCardId,
        sum: sum,
        title: title,
        description: description,
        isIncome: (sum > 0),
        date: new Date()
      })
    },
    deleteCard (id) {
      this.Cards.splice(
        this.Cards.indexOf(
          this.Cards.find(
            item => item.id === id
          )
        ), 1)
    },
    changeCard (sum = false, title = false, description = false) {
      this.modalVueShow = true
      const Card = this.Cards.find(item => item.id === this.updateId)
      Card.sum = sum || Card.sum
      Card.title = title || Card.title
      Card.description = description || Card.description
      Card.date = new Date()
      Card.isIncome = (sum > 0)
      this.updateId = false
    },
    editCard (id) {
      // this.modalDataSaved = false
      this.updateId = id
      // console.log(this.Cards.find(item => item.id === id))
      this.modalData = this.Cards.find(item => item.id === id)
      this.modalVueShow = true
    }
  }
}
</script>

<style>
.home {
  /*width: 80vw;*/
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.cardsList {
  text-align: left;
}

/*button{*/
/*  background: url('https://image.flaticon.com/icons/png/128/1828/1828819.png') no-repeat;*/
/*  cursor: pointer;*/
/*  width: 3em;*/
/*  height: 3em;*/
/*}*/
#fi_1828819 {
  width: 1em;
  height: 1em;
}
</style>
