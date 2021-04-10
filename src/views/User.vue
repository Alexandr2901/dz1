<template>
  <div class="User">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'User',
  components: {
  }
}
</script>

<style>
.User{
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
