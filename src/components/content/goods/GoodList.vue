<template>
  <div class="good_list">
    <good-list-item v-for="(item, index) in goodlist" :key="index" :goodlistitem="item"></good-list-item>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem'
export default {
  props: {
    goodlist: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  components: {
    GoodListItem
  }
}
</script>

<style lang="less" scoped>
.good_list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>