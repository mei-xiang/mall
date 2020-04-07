<template>
  <div class="cartList">
    <cart-list-item v-for="(item, index) in getCartList" :key="index" :info="item"></cart-list-item>
  </div>
</template>

<script>
// 导入vuex中的mapGetters
import { mapGetters } from 'vuex'
import CartListItem from './CartListItem'
export default {
  computed: {
    // 将store中的getters映射到组件中的计算属性中
    ...mapGetters(['getCartList'])
  },
  components: {
    CartListItem
  }
}
</script>

<style lang="less" scoped>
.cartList {
  width: 100%;
  padding-top: 10px;
}
</style>