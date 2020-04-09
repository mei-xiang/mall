;(function() {
  function setRem() {
    // 获取屏幕的宽
    let htmlWidth =
      document.documentElement.clientWidth || document.body.clientWidth
    // 得到html的Dom元素
    let htmlDom = document.documentElement
    // 设置根元素字体大小
    htmlDom.style.fontSize = (htmlWidth / 750) * 32 + 'px'
  }

  // 初始化
  setRem()

  // 改变窗口大小时重新设置 rem
  window.onresize = function() {
    setRem()
  }
})()
