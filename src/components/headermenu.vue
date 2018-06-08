<template>
  <div class="navbar">
    <div class="nav">
      <div class="nav-left">
        <a><img src="../assets/images/logo.png"></a>
      </div>
      <div class="nav-right">
        <router-link exact to="/">首页</router-link>
        <router-link exact to="/home/login">我要出借</router-link>
        <!-- name在index.js中定义了-->
        <router-link exact :to="{name:'login',params: { userId: 123 }}">新手指导</router-link>
        <router-link exact to="/home/login">信息披露 <img src="../assets/images/arrow.png"></router-link>
        <!--<a @click="goBack">我要出借</a>-->
      </div>
    </div>
  </div>
</template>

<script>
// watch可以检测指定值的变化
export default {
  name: 'headermenu',
  // data () {
  //   return {
  //     loading: false,
  //     post: null,
  //     error: null
  //   }
  // },
  // created () {
  //   // 组件创建完后获取数据，
  //   // 此时 data 已经被 observed 了
  //   this.fetchData()
  // },
  watch: {
    '$route' (to, from) {
      // alert(to.params.userId)
      // this.fetchData()
    }
  },
  methods: {
    // goBack () {
    //   // 编程式路由
    //   // this.$router.push({path: '/'})
    // },
    // fetchData () {
    //   // 编程式路由
    //   // this.$router.push({path: '/'})
    //   // this.post = {'name': 'aaa'}
    // }
  }
}
</script>

<style scoped>
  .router-link-active {
    text-decoration: none;
    cursor: pointer;
    color:#ff730c;
  }
  a{
    text-decoration: none;
    cursor: pointer;
    color: #000000;
  }
</style>
