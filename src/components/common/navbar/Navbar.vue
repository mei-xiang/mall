<template>
  <div class="navbar">
    <div class="nav_left">
      <slot name="nav_left"></slot>
    </div>
    <div class="nav_center">
      <slot name="nav_center"></slot>
    </div>
    <div class="nav_right">
      <slot name="nav_right"></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.navbar {
  width: 100vw;
  height: 44px;
  display: flex;
  line-height: 44px;
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 6;
}
.nav_left,
.nav_right {
  width: 60px;
}
.nav_center {
  flex: 1;
  text-align: center;
}
</style>