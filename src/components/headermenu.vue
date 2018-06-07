<template>
  <div class="navbar">
    <div class="nav">
      <div class="nav-left">
        <a><img src="../assets/images/logo.png"></a>
      </div>
      <div class="nav-right">
        <!--<a>首页</a>-->
        <router-link exact to="/"><a>首页</a></router-link>
        <router-link exact to="/home/login">我要出借</router-link>
        <router-link exact to="/home/login">新手指导</router-link>
        <router-link exact to="/home/login">信息披露 <img src="../assets/images/arrow.png"></router-link>
        <!--<a>我要出借</a>-->
        <!--<a>新手指导</a>-->
        <!--<a>信息披露  <img src="../assets/images/arrow.png"></a>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headermenu'
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
