<template>
  <div>
    CategoryPage
    {{this.$route.params}}
  </div>
</template>

<script>
export default {
  name: 'CategoryPage',
  props: {
    id: Number
  }

}
</script>

<style scoped>

</style>
