<template>
  <div id="app">
    <keep-alive>
      <!--router-view组件是一个 functional 组件，渲染路径匹配到的视图组件-->
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!--不需要缓存组件-->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
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
