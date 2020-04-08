<template>
  <div class="toast">这是弹出消息</div>
</template>

<script>
export default {
  methods: {
    show() {
      console.log('show')
    }
  }
}
</script>

<style lang="less" scoped>
.toast {
  background-color: rgba(0, 0, 0, 0.75);
  height: 40px;
  line-height: 40px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
}
</style>