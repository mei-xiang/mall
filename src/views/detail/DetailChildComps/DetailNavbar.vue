<template>
  <navbar>
    <div slot="nav_left" class="nav_left" @click="back">
      <img src="~assets/img/common/back.svg" alt />
    </div>
    <div slot="nav_center" class="nav_center">
      <div :class="{ active: currentIndex === 0 }" @click="jump(0)">商品</div>
      <div :class="{ active: currentIndex === 1 }" @click="jump(1)">参数</div>
      <div :class="{ active: currentIndex === 2 }" @click="jump(2)">评论</div>
      <div :class="{ active: currentIndex === 3 }" @click="jump(3)">推荐</div>
    </div>
  </navbar>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'
export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  components: {
    Navbar
  },
  methods: {
    jump(index) {
      this.currentIndex = index
      this.$emit('changeTop', this.currentIndex)
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.nav_left {
  text-align: center;
  position: relative;
  img {
    position: absolute;
    top: 12px;
    left: 17px;
  }
}
.nav_center {
  display: flex;
  color: #999;
  div {
    flex: 1;
    &.active {
      color: #f5777e;
    }
  }
}
</style>
