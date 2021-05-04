<template>
  <div @click="goToProduct" class="product">
    <img :src="product.url">
    <div class="price">
      <div v-bind:style="cPrice">
        {{ product.price * (100 - product.discount) / 100 }}
      </div>
      <div class="oldPrice" v-if="+product.discount">
        {{ product.price }}
      </div>
    </div>
    <div>
      {{ product.brand }}
    </div>
    <div class="description">
      <div>
        {{ product.description }}
      </div>
      <div v-if="+product.discount" class="discount">
        {{ product.discount }}

      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router'

export default {
  name: 'Product',
  props: {
    product: Object
  },
  methods: {
    goToProduct () {
      router.push({ path: `/product/${this.product.id}` })
    }
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
  box-sizing: content-box;

  margin-left: 22px;
  min-width: 252px;
  /*max-width: 1000px;*/
  width: 17.7vw;
}

.price div::after {
  content: "руб.";
}

.price {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.oldPrice {
  text-decoration: line-through;
}

.discount {
  background-color: #CC0008;
  color: #FBFEFF;
  padding: 0 5px 0 5px;
}

.discount::after {
  content: "%";
}

img {
  width: 100%;
  border: 2px solid #FFFFFF;

}

.description {
  flex-direction: row;
  display: flex;
  justify-content: space-between;
}
</style>
