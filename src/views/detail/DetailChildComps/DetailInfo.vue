<template>
  <div class="info">
    <div v-if="Object.keys(info).length!==0">
      <p v-if="info.detailImage[0].desc">{{info.detailImage[0].desc+'~'}}</p>
      <p class="right">{{info.detailImage[0].key}}</p>
      <div class="imgBox" v-for="(item,index) in info.detailImage[0].list" :key="index">
        <img :src="item" @load="imgLoad" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
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
  // 图片加载完毕，需要BSscroll重新计算高度
  methods: {
    imgLoad() {
      this.count++
      if (this.count === this.info.detailImage[0].list.length) {
        this.$emit('imgLoad')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.info {
  color: #a3a5aa;
  font-size: 14px;
  padding: 0 15px;
}
.right {
  text-align: right;
  margin-bottom: 10px;
}
.imgBox {
  width: 100%;
  img {
    width: 100%;
    display: block;
  }
}
</style>