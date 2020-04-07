/**
 * 将多个组件中复用的代码写入到混入对象
 */
import BackTop from 'components/content/BackTop'

// 导出返回顶部混入对象
export const BackTopMixin = {
  data() {
    return {
      // 控制BackTop的显示/隐藏
      isShow: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTop() {
      // 返回顶部
      this.$refs.scroll.scroll.scrollTo(0, 0, 500)
    }
  }
}
