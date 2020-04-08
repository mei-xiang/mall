<template>
  <div class="cart">
    <!-- 头部区域 -->
    <cart-navbar class="navbar"></cart-navbar>
    <!-- 当购物车为空时 -->
    <div class="cartImg" v-if="$store.state.cartList.length===0">
      <img :src="require('assets/img/gouwuc.jpg')" />
    </div>
    <!-- 滚动的内容列表区域 -->
    <scroll class="scroll" ref="scroll" v-else>
      <cart-list></cart-list>
    </scroll>
    <!-- 底部区域 -->
    <cart-bottom-bar @submit="submit"></cart-bottom-bar>
  </div>
</template>

<script>
import Scroll from 'components/common/Scroll'
import CartNavbar from './CartChildComps/CartNavbar'
import CartList from './CartChildComps/CartList'
import CartBottomBar from './CartChildComps/CartBottomBar'

// 从vuex中导入mapGetters
import { mapGetters } from 'vuex'

export default {
  activated() {
    // 做了keep-alive mounted等生命周期函数只会执行一次
    // activated 这里进入就会执行
    if (this.getCartListLen) {
      this.$nextTick(() => {
        this.$refs.scroll.scroll.refresh()
      })
    }
  },
  mounted() {
    // 进行了缓存 keep-alive。生命周期函数都只会执行一次。需要在activated中重新计算refresh
  },
  computed: {
    // 将store中的getters映射到组件中的计算属性中
    ...mapGetters(['getCartList', 'getCartListLen'])
  },
  components: {
    CartNavbar,
    CartList,
    Scroll,
    CartBottomBar
  },
  methods: {
    submit() {
      this.$toast('请选择商品')
    }
  }
}
</script>

<style lang="less" scoped>
.cart {
  width: 100%;
  height: 100%;
  padding-top: 44px;
  padding-bottom: 95px;
  background-color: #f2f2f2;
}
.scroll {
  width: 100%;
  height: 100%;
  // overflow: hidden;
  // 文字在过长进行换行，避免出现滚动条
  word-wrap: break-word;
}
.navbar {
  width: 100vw;
}
.cartImg {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
  }
}
</style>