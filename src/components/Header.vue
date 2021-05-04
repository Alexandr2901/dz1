<template>
  <div class="Header">
    <div class="Header-nav" v-if="categories.length > 0">
      <button
        v-on:click="selectCategory('Все товары')"
      >{{'Все товары'}}
      </button>
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
      if (this.$route.path !== `/category/${category}`) {
        this.getCategory(1)
        router.push({ path: `/category/${category}` })
      }
    }
  },
  mounted () {
    this.getCategories().then(data => {
      this.categories = data
    })
  }
}
</script>

<style scoped lang="scss">
button {
  height: 100%;
  border: none;
  background-color: inherit;
  font-size: 16px;
  margin-right: 34px;
  margin-left: 12px;
  padding: 0;
}

.Header {
  display: flex;
  min-height: 44px;
  background-color: white;
  justify-content: center;
}

.Header-nav {
  width: 78vw;
  height: 1px;
  min-height: 44px;

  :first-child {
    background: #F4F4F4;
    line-height: 20px;
    border-radius: 5px 5px 0 0;
    padding: 0 14px 0 14px;
  }

}
</style>
