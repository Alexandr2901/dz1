<template>
  <div class="categoryPage centered">
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
        category: this.$route.params.category === 'Все товары' ? null : this.$route.params.category
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
@media (max-width: 700px) {
  .products {
    min-width: 100vw;
  }
}
.categoryName {
  width: 77vw;
  margin-top: 29px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
}

.categoryPage {
  background-color: #F4F4F4;
  width: 100%;
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
