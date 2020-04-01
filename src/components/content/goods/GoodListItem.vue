<template>
  <div class="good_list_item">
    <!-- @load="imgLoad" 监听图片加载事件 -->
    <img :src="goodlistitem.show.img" alt />
    <p>{{goodlistitem.title}}</p>
    <span>{{goodlistitem.orgPrice}}</span>
    <span>{{goodlistitem.cfav}}</span>
  </div>
</template>

<script>
export default {
  props: {
    goodlistitem: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      // 使用EventBus事件总线，将事件发送过去
      this.$bus.$emit('imgLoaded')
    }
  }
}
</script>

<style lang="less" scoped>
.good_list_item {
  width: 48%;
  // height: 300px;
  // background-color: pink;
  margin-bottom: 6px;
  position: relative;
  text-align: center;
  font-size: 12px;
  img {
    width: 100%;
    height: 230px;
    margin-bottom: 6px;
  }
  p {
    display: inline-block;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span:first-of-type {
    color: #f46d74;
    margin-right: 6px;
  }
  span:last-of-type::before {
    content: '☆';
  }
}
</style>