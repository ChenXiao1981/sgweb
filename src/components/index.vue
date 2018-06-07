<template>
  <!--每个 template中只能有一个根元素-->
  <body>
    <HeaderDiv></HeaderDiv>
    <HeaderMenu></HeaderMenu>
    <router-view></router-view>
  </body>
</template>
<script>
import Header from './header'
import HeaderMenu from './headermenu'
export default {
  name: 'index',
  components: {
    'HeaderDiv': Header,
    'HeaderMenu': HeaderMenu
  }
}
</script>
<style scoped>
</style>
