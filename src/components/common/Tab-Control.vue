<template>
  <div class="tab_control">
    <ul class="clearFix">
      <li v-for="(item, index) in titles" :key="index" @click="tap(index)">
        <span :class="{isActive: index===currentIndex}">{{item}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  methods: {
    tap(index) {
      this.currentIndex = index
      this.$emit('tagclick', index)
    }
  }
}
</script>

<style lang="less">
.tab_control {
  margin-top: 15px;
  background-color: #fff;
  z-index: 8;
  ul {
    li {
      float: left;
      width: 33.33333%;
      height: 40px;
      text-align: center;
      span {
        font-size: 16px;
        padding: 10px;
        &.isActive {
          border-bottom: 3px solid red;
          color: #f5777e;
        }
      }
    }
  }
}
</style>