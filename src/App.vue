<template>
  <div id="app">
    <router-view></router-view>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import MainTabbar from 'components/content/MainTabbar'
export default {
  name: 'App',
  components: {
    MainTabbar: MainTabbar
  }
}
</script>

<style lang="less">
@import 'assets/css/normalize.css';
@import 'assets/css/base.css';

#app {
  width: 100%;
  height: 100%;
}
</style>
