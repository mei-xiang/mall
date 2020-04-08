<template>
  <div class="good_list_item" v-if="Object.keys(goodlistitem).length!==0">
    <!-- @load="imgLoad" 监听图片加载事件 -->
    <!-- 修改图片显示方式未懒加载 将:src 替换成v-lazy -->
    <img v-lazy="goodlistitemImg" alt @click="jumpDetails(goodlistitem.iid||goodlistitem.item_id)" />
    <p>{{goodlistitem.title}}</p>
    <span>{{goodlistitem.price}}</span>
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
  // watch: {
  //   $route(to, from) {
  //     // todos：推荐数据的接口未提供。
  //     // 点击商品获取详情数据(url虽然不一样但页面路由相同，会进行页面复用就不会重新加载数据，需要在watch中监听$route的变化获取数据)，进行展示(将获取到的数据，传给detail父组件的父组件，根据单向数据流，父组件数据变化子组件数据跟着变化)
  //   }
  // },
  computed: {
    goodlistitemImg() {
      return this.goodlistitem.show
        ? this.goodlistitem.show.img
        : this.goodlistitem.image
      // return this.goodlistitem.image || this.goodlistitem.show.img
    }
  },
  methods: {
    imgLoad() {
      // 使用EventBus事件总线，将事件发送过去
      this.$bus.$emit('imgLoaded')
    },
    jumpDetails(iid) {
      // 这里可能实现功能需要修改，将事件传给父组件，让父组件进行跳转
      this.$router.push({
        name: 'detail',
        params: {
          iid: iid
        }
      })
      // this.$router.push('/details/' + iid)
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