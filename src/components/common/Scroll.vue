<template>
  <!-- 外层小盒子 -->
  <div class="wrapper" ref="wrapperRef">
    <!-- 里层大盒子 -->
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BSscroll from 'better-scroll'
export default {
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    // probeType: 0 默认值，不监听滚动  1 不监听滚动
    // probeType: 2 手指滚动时监听滚动的位置，滚动后的惯性不监听
    // probeType: 3 只要是滚动，都会监听
    this.scroll = new BSscroll(this.$refs.wrapperRef, {
      probeType: 3, // 侦测，监听滚动位置
      pullUpLoad: true, // 开启上拉加载
      click: true // 使用了better-scroll区域滚动，要想滚动区域里的内容可以使用点击事件，必须添加 click为true
    })

    this.scroll.on('scroll', position => {
      if (this.$route.path.indexOf('/home') !== -1) {
        this.$emit('positionscroll', position)
      } else if (this.$route.path.indexOf('/detail') !== -1) {
        this.$emit('detailScroll', position)
      }
    })

    this.scroll.on('pullingUp', () => {
      // 将子组件的上拉加载方法传递给父组件
      this.$emit('pullingup')
    })
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.wrapper {
  // vh 视口（屏幕）高度
  height: 100vh;
  width: 100vw;
}
</style>