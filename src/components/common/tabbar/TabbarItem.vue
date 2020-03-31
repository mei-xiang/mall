<template>
  <div class="tabbar-item" @click="jump">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-active-icon"></slot>
    </div>
    <!-- :class="{hightColor: isActive}" -->
    <div :style="isActive ? {color:activeColor} : {}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: function() {
        return '#f57880'
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    jump() {
      this.$router.push(this.path)
    }
  },
  computed: {
    isActive() {
      // 根据路由地址，确定让哪个标签高亮
      return this.$route.path.indexOf(this.path) !== -1
    }
  }
}
</script>

<style lang="less" scoped>
.tabbar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tabbar-item img {
  width: 24px;
  height: 24px;
}
.hightColor {
  color: #f57880;
}
</style>