<template>
  <!--每个 template中只能有一个根元素-->
  <body>
    <header-div></header-div>
    <header-menu></header-menu>
    <router-view></router-view>
  </body>
</template>
<script>
import Header from './header'
import HeaderMenu from './headermenu'
export default {
  name: 'index',
  components: {
    'header-div': Header,
    'header-menu': HeaderMenu
  }
}
</script>
<style scoped>
</style>
