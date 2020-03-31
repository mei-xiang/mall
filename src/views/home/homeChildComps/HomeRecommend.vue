<template>
  <div class="recommend">
    <div class="recomment-item" v-for="(item,index) in recommend" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt />
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array,
      default: function() {
        return []
      }
    }
  }
}
</script>

<style lang="less">
.recommend {
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  .recomment-item {
    // flex: 1;
    text-align: center;
    img {
      width: 70px;
      height: 70px;
      display: block;
      margin-bottom: 5px;
    }
  }
}
</style>