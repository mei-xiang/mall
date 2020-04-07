<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.tabbar {
  width: 100vw;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 10px rgba(100, 100, 100, 0.2);
  display: flex;
}
</style>