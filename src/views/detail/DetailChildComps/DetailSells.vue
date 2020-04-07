<template>
  <div class="sells" v-if="Object.keys(sells).length!==0">
    <div class="title">
      <img :src="sells.shopLogo" alt />
      <span>{{sells.name}}</span>
    </div>
    <div class="info">
      <div class="left">
        <div class="total">
          <p>{{sells.cSells}}</p>
          <p>总数量</p>
        </div>
        <div class="product">
          <p>{{sells.cFans}}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="right">
        <div v-for="(item, index) in sells.score" :key="index">
          <span>{{item.name}}</span>
          <span :class="{current: item.isBetter}">{{item.score}}</span>
          <span :class="{current: item.isBetter}">{{item.isBetter?'高':'低'}}</span>
        </div>
      </div>
    </div>
    <div class="look">
      <a href="javascript:;">进店逛逛</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    sells: {
      type: Object,
      default: function() {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.sells {
  padding: 15px;
  line-height: 25px;
  .title {
    padding-bottom: 15px;
    img {
      width: 80px;
      height: 40px;
    }
    span {
      color: #9c9c9c;
      padding-left: 20px;
    }
    img,
    span {
      vertical-align: middle;
    }
  }
  .info {
    display: flex;
    & > div {
      flex: 1;
    }
    .left {
      padding-top: 13px;
      display: flex;
      text-align: center;
      justify-content: space-around;
      & > div {
        p:first-of-type {
          font-weight: 700;
        }
      }
    }
    .right {
      padding-left: 20px;
      color: #67914b;
      & > div {
        display: flex;
        justify-content: space-between;
        span {
          &:first-child {
            color: #000;
          }
          &.current:nth-of-type(2) {
            color: red;
          }
          &.current:last-child {
            color: #fff;
            background-color: red;
          }
        }
      }
    }
  }
  .look {
    text-align: center;
    padding: 20px 0;
    border-bottom: 3px solid #f5f4f7;
    a {
      color: #a3a5aa;
      display: inline-block;
      width: 150px;
      height: 50px;
      background-color: #f1f5fb;
      font-size: 18px;
      line-height: 50px;
    }
  }
}
</style>