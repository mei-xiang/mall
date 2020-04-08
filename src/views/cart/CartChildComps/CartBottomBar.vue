<template>
  <div class="bottom">
    <div class="checkout" @click="allCheck">
      <img src="~assets/img/cart/tick.svg" :class="{active: isAllCheck}" alt />
      <span>全选</span>
    </div>
    <div class="total">
      合计:
      <span>￥{{totalPrice}}</span>
    </div>
    <div class="submit" @click="submit">提交订单({{checkLen}})</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  mounted() {
    // 没有数据every返回的是true
    // console.log(this.getCartList.every(item => item.checked))
  },
  computed: {
    // 将vuex中的getters映射到组件中的计算属性中
    ...mapGetters(['getCartList', 'getCartListLen']),
    totalPrice() {
      return this.getCartList
        .filter(item => item.checked)
        .reduce((total, item) => total + item.count * item.lowNowPrice, 0)
        .toFixed(2)
    },
    checkLen() {
      return this.getCartList.filter(item => item.checked).length
    },
    isAllCheck() {
      // 只有每项都选中，全选按钮才被选中
      if (this.$store.state.cartList.length === 0) {
        return false
      }
      return this.$store.state.cartList.every(item => item.checked)
      // return this.$store.state.cartList.filter(item => item.checked).length
    }
  },
  methods: {
    allCheck() {
      if (this.isAllCheck) {
        this.getCartList.forEach(item => (item.checked = false))
      } else {
        this.getCartList.forEach(item => (item.checked = true))
      }
    },
    submit() {
      const isCheck = this.getCartList.some(item => item.checked)
      if (!isCheck) {
        this.$emit('submit')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.bottom {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  position: fixed;
  bottom: 55px;
  left: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  padding: 0 10px;
  .checkout {
    width: 60px;
    line-height: 22px;
    height: 22px;
    img {
      border-radius: 50%;
      border: 2px solid #aaa;
      background-color: #fff;
      &.active {
        border: 2px solid #1989fa;
        background-color: #1989fa;
      }
    }
    span {
      padding-left: 6px;
    }
    img,
    span {
      vertical-align: middle;
    }
  }
  .total {
    flex: 1;
    text-align: center;
    span {
      font-size: 18px;
      color: #ef1f37;
    }
  }
  .submit {
    width: 100px;
    padding: 0 5px;
    background-color: #f42629;
    border-radius: 30px;
    color: #fff;
    text-align: center;
  }
}
</style>