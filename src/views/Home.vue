<template>
  <div class="home">
    <h1>
      Расходы и доходы
      <svg
        @click.stop="modalVueShow = !modalVueShow"
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
      v-on:sendData="modalFunc"
      v-if="this.modalVueShow"
    />
  </div>
</template>

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
      updateId: false
    }
  },
  // kusbagdflauishdbflasbdflualsfdjasdfyvmfchblfikusbagdflauishdbflasbdflualsfdjasdfyvmfchblfikusbagdflauishdbflasbdflualsfdjasdfyvmfchblfikusbagdflauishdbflasbdflualsfdjasdfyvmfchblfikusbagdflauishdbflasbdflualsfdjasdfyvmfchblfikusbagdflauishdbflasbdflualsfdjasdfyvmfchblfikusbagdflauishdbflasbdflualsfdjasdfyvmfchblfikusbagdflauishdbflasbdflualsfdjasdfyvmfchblfikusbagdflauishdbflasbdflualsfdjasdfyvmfchblfikusbagdflauishdbflasbdflualsfdjasdfyvmfchblfikusbagdflauishdbflasbdflualsfdjasdfyvmfchblfikusbagdflauishdbflasbdflualsfdjasdfyvmfchblfikusbagdflauishdbflasbdflualsfdjasdfyvmfchblfikusbagdflauishdbflasbdflualsfdjasdfyvmfchblfikusbagdflauishdbflasbdflualsfdjasdfyvmfchblfikusbagdflauishdbflasbdflualsfdjasdfyvmfchblfikusbagdflauishdbflasbdflualsfdjasdfyvmfchblfikusbagdflauishdbflasbdflualsfdjasdfyvmfchblfikusbagdflauishdbflasbdflualsfdjasdfyvmfchblfikusbagdflauishdbflasbdflualsfdjasdfyvmfchblfikusbagdflauishdbflasbdflualsfdjasdfyvmfchblfikusbagdflauishdbflasbdflualsfdjasdfyvmfchblfikusbagdflauishdbflasbdflualsfdjasdfyvmfchblfikusbagdflauishdbflasbdflualsfdjasdfyvmfchblfi
  mounted () {
    this.newCard(100)
    this.newCard(100)
    this.newCard(-100)
    this.newCard(100, '123', '')
  },
  methods: {
    modalFunc (data) {
      if (this.updateId) {
      } else {
        const { sum, title, description } = data
        this.newCard(sum, title, description)
      }
    },
    newCard (sum, title, description) {
      this.newCardId++
      this.Cards.push({
        id: this.newCardId,
        sum: sum,
        title: title,
        description: description,
        type: (sum > 0) ? 'income' : 'consumption',
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
    editCard (id) {
      this.updateId = id
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
