<template>
  <div class="Header">
    <div class="Header-nav" v-if="categories.length > 0">
      <button
        v-on:click="selectCategory('все_товары')"
      >Все товары</button>
      <button
        v-on:click="selectCategory(category.name)"
        v-for="category in categories" :key="category.id"
      >
        {{ category.name }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import router from '@/router'

export default {
  name: 'Header',
  data () {
    return {
      categories: []
    }
  },
  methods: {
    ...mapActions({
      getCategories: 'server/pullCategories',
      getCategory: 'server/pullCategoryData',
      pullProducts: 'server/pullProducts'
    }),
    selectCategory (category) {
      this.getCategory(1)
      router.push({ path: `/category/${category}` })
    }
  },
  mounted () {
    this.getCategories().then(data => {
      this.categories = data
    })
    this.pullProducts()
  }
}
</script>

<style scoped lang="scss">
@media (orientation: landscape) {
  .Header {
    padding: 0 11vw 0 11vw;
  }
}

@media (orientation: portrait) {
  .Header {
    padding: 0 2.5vw 0 2.5vw;
  }
}

button {
  height: 100%;
  border: none;
  background-color: inherit;
  border-radius: 0 0 5px 5px;
}

.Header {
  display: flex;
  align-items: center;
  min-height: 44px;
  background-color: white;
}

.Header-nav {
  height: 1px;
  min-height: 44px;

  :first-child {
    background: #F4F4F4;
  }
}
</style>
