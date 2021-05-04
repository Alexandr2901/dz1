<template>
  <div class="centered">
    <div class="categoryName">
      {{ this.$route.params.category }}
    </div>
    <div class="products">
      <!--      {{products}}-->
      <Product v-for="product in products" :key="product.id"
               :product="product"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Product from '@/components/Product'

export default {
  name: 'CategoryPage',
  components: { Product },
  props: {
    id: Number
  },
  data () {
    return {
      page: 1,
      products: []
    }
  },
  methods: {
    ...mapActions({
      pullPosts: 'server/pullProducts'
    }),
    getPosts () {
      const data = {
        page: this.page,
        category: this.$route.params.category === 'все_товары' ? null : this.$route.params.category
      }
      this.pullPosts(data).then((products) => {
        this.products = products
      })
    }
  },
  computed: {},
  mounted () {
    this.getPosts()
  },
  beforeRouteUpdate (to, from, next) {
    this.$nextTick(() => {
      this.getPosts()
    })
    next()
  }
}
</script>

<style scoped>
.categoryName {
  width: 77vw;
  /*max-width: 1096px;*/
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
}

.products {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 78vw;
}

.centered {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
