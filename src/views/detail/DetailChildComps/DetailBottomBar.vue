<template>
  <div class="bottomBar">
    <div class="left">
      <a href="javascript:;">
        <van-icon name="chat-o" size="16px" />
        <p>客服</p>
      </a>
      <a href="javascript:;">
        <van-icon name="shop-o" size="16px" />
        <p>店铺</p>
      </a>
      <a href="javascript:;">
        <van-icon name="star-o" size="16px" />
        <p>收藏</p>
      </a>
    </div>
    <div class="right">
      <a href="javascript:;" class="cart" @click="addCart">加入购物车</a>
      <a href="javascript:;" class="buy">立即购买</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addCart() {
      this.$emit('addCart')
    }
  }
}
</script>

<style lang="less" scoped>
.bottomBar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  background-color: #fff;
  display: flex;
  padding: 4px;
  .left {
    flex: 4;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    a {
      color: #2e2e2e;
      p {
        font-size: 12px;
      }
    }
  }
  .right {
    flex: 6;
    background-color: skyblue;
    display: flex;
    border-radius: 50px;
    overflow: hidden;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 14px;
      &.cart {
        background-color: #ff9918;
        flex: 1;
      }
      &.buy {
        background-color: #f6332c;
        flex: 1;
      }
    }
  }
}
</style>