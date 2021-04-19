<template>
  <div>
    Что то пошло не так но вы не волнуйтесь
  </div>
</template>

<script>
import router from '@/router'

export default {
  name: 'Notfound',
  mounted () {
    setTimeout(() => {
      router.push('/')
    }, 999)
  }
}
</script>
