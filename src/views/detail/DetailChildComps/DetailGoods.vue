<template>
  <div class="goods">
    <p class="title">{{ goods.title }}</p>
    <div class="price">
      <span>{{ goods.price }}</span>
      <span>{{ goods.oldPrice }}</span>
      <span>{{ goods.discountDesc }}</span>
    </div>
    <div class="cloumn">
      <span v-for="(item, index) in goods.columns" :key="index">{{ item }}</span>
    </div>
    <div class="services">
      <span v-for="(item, index) in goods.services" :key="index">
        <img :src="item.icon" alt />
        <span>{{item.name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default: function() {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.goods {
  padding: 10px;
}
.title {
  color: #000;
  font-weight: 700;
  font-size: 14px;
}
.price {
  margin: 15px 0;
  position: relative;
}
.price span:nth-child(1) {
  color: #f23a45;
  font-weight: 700;
  font-size: 20px;
}
.price span:nth-child(2) {
  color: #808080;
  margin: 0 15px;
  text-decoration: line-through;
}
.price span:nth-child(3) {
  background-color: #f44247;
  padding: 5px;
  border-radius: 10px;
  color: #fff;
}
.cloumn {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
  span {
    color: #808080;
    &:nth-of-type(2) {
      text-align: center;
    }
    &:last-of-type {
      text-align: right;
    }
  }
}
.services {
  padding: 20px 0;
  border-bottom: 3px solid #f5f4f7;
  display: flex;
  text-align: center;
  justify-content: space-between;
  span {
    // flex: 1;
    font-size: 10px;
    img {
      width: 10px;
      height: 10px;
    }
  }
}
</style>
