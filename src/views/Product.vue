<template>
  <div v-if="product" class="product">
    <div class="content">
      <img class="photo" :src="product.url">
      <div class="description">
        <div>
          Бренд:
          {{ product.brand }}
        </div>
        <div class="oldPrice" v-if="+product.discount">
          {{ product.price }}
        </div>
        <div v-bind:style="cPrice">
          {{ product.price * (100 - product.discount) / 100 }}
        </div>
        <button>
          button
        </button>
        <div class="specifics">
          <div><span>О товаре</span></div>
          <div><span>пол: </span>{{ product.specification.gender }}</div>
          <div><span>цвет:{{ product.specification.color }}</span></div>
          <div><span>материал: {{ product.specification.material }}</span></div>
          <div><span>моддель (тип): {{ product.specification.type  }}</span></div>
          <div><span>сезон: {{ product.specification.season }}</span></div>
          <div><span>арктикул: {{ product.specification.vendorCode }}</span></div>
          <div><span>страна производитель: {{ product.specification.producingCountry }}</span></div>
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
  width: 45vw;
  /*max-width: 46vw;*/
  /*align-items: flex-start;*/
  display: flex;
  flex-direction: column;
}
</style>
