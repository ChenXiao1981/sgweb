<!--suppress ALL -->
<template>
  <div class="container">
    name<input v-model="user.name"/>
    password<input v-model="user.password"/>
    <button @click="login">Sign in</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: {}
    }
  },
  methods: {
    login () {
      var data = this.user
      this.$axios({
        method: 'post',
        url: '/login',
        data: data
      }).then(function (response) {
        var res = response.data
        console.log(res.name)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
</style>
