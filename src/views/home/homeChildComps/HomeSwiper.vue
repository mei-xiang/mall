<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    banners: {
      type: Array,
      default: function() {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.van-swipe {
  width: 100%;
  height: 200px;
  background-color: pink;
  .van-swipe-item {
    width: 100%;
    height: 100%;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>