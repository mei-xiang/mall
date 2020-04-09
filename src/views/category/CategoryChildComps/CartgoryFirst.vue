<template>
  <div class="first">
    <scroll class="scroll">
      <ul class="left clearFix">
        <li
          v-for="(item,index) in category"
          :key="index"
          :class="{current: currentIndex===index}"
          @click="toggleCategory(index)"
        >{{item.title}}</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/Scroll'
export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    category: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  components: {
    Scroll
  },
  methods: {
    toggleCategory(index) {
      this.currentIndex = index
      this.$emit('toggleCate', index)
    }
  }
}
</script>

<style lang="less" scoped>
.first {
  width: 100px;
  height: 100%;
  background-color: #f6f6f6;
  float: left;
  overflow: hidden;
  .scroll {
    height: 100%;
    width: 100%;
    .left {
      li {
        float: left;
        width: 100%;
        height: 45px;
        text-align: center;
        line-height: 45px;
        border-left: 2px solid transparent;
        &.current {
          border-left: 2px solid #ff5777;
          color: #ff8198;
          background-color: #fff;
        }
      }
    }
  }
}
</style>