<template>
  <div id="app">
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from 'components/tabbar/Tabbar.vue'
export default {
  name: 'App',
  components: {
    Tabbar: Tabbar
  }
}
</script>

<style lang="less">
@import 'assets/css/normalize.css';
@import 'assets/css/base.css';
</style>
