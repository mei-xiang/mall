<template>
  <navbar class="navbar">
    <div slot="nav_left" class="nav_left" @click="back">
      <img src="~assets/img/common/arrow-left.svg" alt />
    </div>
    <div slot="nav_center" class="nav_center">购物车({{getCartListLen}})</div>
  </navbar>
</template>

<script>
// 导入vuex中的mapGetters
import { mapGetters } from 'vuex'

import Navbar from 'components/common/navbar/Navbar'
export default {
  mounted() {},
  components: {
    Navbar
  },
  computed: {
    // 将store中的getters映射到组件中的计算属性中
    ...mapGetters(['getCartListLen'])
  },
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  height: 44px;
  font-size: 18px;
  background-color: #ff8e97;
  .nav_left {
    padding-left: 20px;
    img {
      vertical-align: middle;
      width: 22px;
      height: 22px;
      transform: rotate(180deg);
    }
  }
}
</style>