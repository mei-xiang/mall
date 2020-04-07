<template>
  <tabbar>
    <tabbar-item path="/home" activeColor="#f57880">
      <img src="~assets/img/tabbar/home.svg" alt slot="item-icon" />
      <img src="~assets/img/tabbar/home_active.svg" alt slot="item-active-icon" />
      <p slot="item-text">首页</p>
    </tabbar-item>
    <tabbar-item path="/category" activeColor="#f57880">
      <img src="~assets/img/tabbar/category.svg" alt slot="item-icon" />
      <img src="~assets/img/tabbar/category_active.svg" alt slot="item-active-icon" />
      <p slot="item-text">分类</p>
    </tabbar-item>
    <tabbar-item path="/cart" activeColor="#f57880">
      <img src="~assets/img/tabbar/shopcart.svg" alt slot="item-icon" />
      <img src="~assets/img/tabbar/shopcart_active.svg" alt slot="item-active-icon" />
      <p slot="item-text">购物车</p>
    </tabbar-item>
    <tabbar-item path="/profile" activeColor="#f57880">
      <img src="~assets/img/tabbar/profile.svg" alt slot="item-icon" />
      <img src="~assets/img/tabbar/profile_active.svg" alt slot="item-active-icon" />
      <p slot="item-text">我的</p>
    </tabbar-item>
  </tabbar>
</template>

<script>
import Tabbar from 'components/common/tabbar/Tabbar'
import TabbarItem from 'components/common/tabbar/TabbarItem'

export default {
  components: {
    Tabbar: Tabbar,
    TabbarItem: TabbarItem
  }
}
</script>

<style lang="less" scoped>
.tabbar{
  padding-top: 6px;
  width: 100vw;
}
</style>