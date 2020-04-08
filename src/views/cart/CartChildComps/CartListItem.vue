<template>
  <div class="listItem">
    <div class="checkout" :class="{active: info.checked}" @click="checkout">
      <img src="~assets/img/cart/tick.svg" alt />
    </div>
    <div class="info">
      <div class="left">
        <img :src="info.swiperImg" alt />
      </div>
      <div class="right">
        <p class="title">{{info.title}}</p>
        <p class="desc">{{info.desc}}</p>
        <div class="num">
          <span class="price">￥{{info.lowNowPrice}}</span>
          <span class="count">x{{info.count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false
    }
  },
  props: {
    info: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  methods: {
    checkout() {
      // 让vuex进行修改数据
      this.$store.commit('updateCheck', this.info)
    }
  }
}
</script>

<style lang="less" scoped>
.listItem {
  background-color: #fff;
  width: 100%;
  height: 100px;
  padding: 8px 20px 8px 50px;
  position: relative;
  margin-bottom: 10px;
  .checkout {
    border-radius: 50%;
    display: flex;
    position: absolute;
    overflow: hidden;
    left: 15px;
    top: 35px;
    border: 2px solid #aaa;
    background-color: #fff;
    &.active {
      border: 2px solid #1989fa;
      background-color: #1989fa;
    }
  }
  .info {
    height: 100%;
    .left {
      float: left;
      height: 100%;
      width: 80px;
      border-radius: 5px;
      overflow: hidden;
      img {
        height: 100%;
        width: 80px;
      }
    }
    .right {
      overflow: hidden;
      padding-left: 8px;
      p {
        overflow: hidden; /*超出部分隐藏*/
        white-space: nowrap; /*不换行*/
        text-overflow: ellipsis; /*超出部分文字以...显示*/
        &.title {
          font-size: 16px;
          color: #323233;
          font-weight: 700;
          padding-bottom: 10px;
        }
        &.desc {
          color: #646566;
          font-size: 14px;
        }
      }
      .num {
        margin-top: 20px;
        .price {
          color: #f30600;
          float: left;
          font-weight: 700;
        }
        .count {
          color: #d3d3d4;
          float: right;
        }
      }
    }
  }
}
</style>