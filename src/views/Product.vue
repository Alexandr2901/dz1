<template>
  <div v-if="product" class="product">
    <div class="content">
      <img class="photo" :src="product.url">
      <div class="description">
        <div class="descriptionText">
          {{ product.description }}
        </div>
        <div class="brand">
          Бренд:
          {{ product.brand }}
        </div>
        <div class="oldPrice" v-if="+product.discount">
          {{ product.price }}
        </div>
        <div class="price" v-bind:style="cPrice">
          {{ product.price * (100 - +product.discount) / 100 }}
        </div>
        <button>
          добавить в корзину
        </button>
        <div style="font-size: 18px;
        line-height: 21px;"><span>О товаре</span></div>
        <div class="specifics">
          <div><span>пол: </span>{{ product.specification.gender }}</div>
          <div><span>цвет: </span>{{ product.specification.color }}</div>
          <div><span>материал: </span>{{ product.specification.material }}</div>
          <div><span>моддель (тип): </span>{{ product.specification.type }}</div>
          <div><span>сезон: </span>{{ product.specification.season }}</div>
          <div><span>арктикул: </span>{{ product.specification.vendorCode }}</div>
          <div><span>страна производитель: </span>{{ product.specification.producingCountry }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Product',
  data () {
    return {
      product: null
    }
  },
  methods: {
    ...mapActions({
      pullProduct: 'server/pullProduct'
    })
  },
  mounted () {
    this.pullProduct(this.$route.params.id).then(data => {
      this.product = data
    })
  },
  computed: {
    cPrice () {
      return { color: (+this.product.discount) ? '#BA1219' : '#3C3C3C' }
    }
  }
}
</script>

<style scoped>
button {
  background-color: #D32F2F;
  color: white;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  width: 18vw;
  min-width: 180px;
  min-height: 50px;
  border-radius: 2px;
  padding: 0;
  border: 0;
  margin-top: 60px;
  margin-bottom: 80px;

}

.product {
  margin-top: 68px;
  /*max-width: 78vw;*/
  /*overflow: hidden;*/
}

.content {
  width: 100%;
  display: flex;
  justify-content: center;
  word-wrap: break-word;
  flex-direction: row;
  align-items: flex-start;

}

.photo {
  width: 31vw;
  margin-right: 40px;
  object-fit: contain;
}

.description {
  color: #3C3C3C;
  width: 45vw;
  /*max-width: 46vw;*/
  /*align-items: flex-start;*/
  display: flex;
  flex-direction: column;
}

.descriptionText {
  margin-bottom: 16px;
  font-size: 26px;
  line-height: 30px;
  color: #3C3C3C;
}

.descriptionText::first-letter {
  text-transform: uppercase;

}

.brand {
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 30px;

}

.price {
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
}

.price::after {
  content: "руб.";
}

.oldPrice {
  padding-left: 3px;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  color: #868686;
  text-decoration: line-through;
}

.specifics {
  color: #000000;
}

.specifics div {
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin-top: 16px;
}

.specifics span {
  font-weight: 300;

}
</style>
