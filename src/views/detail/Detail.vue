<template>
  <div class="detail">
    <detail-navbar ref="navabr" class="navbar" @changeTop="changeTop"></detail-navbar>
    <scroll ref="scroll" class="scroll" @detailScroll="detailScroll">
      <detail-swiper :swiperImg="swiperImg"></detail-swiper>
      <detail-goods :goods="goods"></detail-goods>
      <detail-sells :sells="sells"></detail-sells>
      <detail-info :info="info" @imgLoad="imgLoad"></detail-info>
      <detail-params ref="params" :params="params"></detail-params>
      <detail-comment ref="comment" :comment="comment"></detail-comment>
      <good-list ref="recommend" :goodlist="recommend"></good-list>
    </scroll>

    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
    <back-top v-if="isShow" @click.native="backTop"></back-top>
  </div>
</template>

<script>
// 数据请求模块
import {
  getDetailList,
  Goods,
  Sells,
  Params,
  getDetailRate
} from 'network/detail'

// 导入混入模块
import { BackTopMixin } from 'common/mixin'

// 子组件模块
import DetailNavbar from './DetailChildComps/DetailNavbar'
import DetailSwiper from './DetailChildComps/DetailSwiper'
import DetailGoods from './DetailChildComps/DetailGoods'
import DetailSells from './DetailChildComps/DetailSells'
import DetailInfo from './DetailChildComps/DetailInfo'
import DetailParams from './DetailChildComps/DetailParams'
import DetailComment from './DetailChildComps/DetailComment'
import GoodList from 'components/content/goods/GoodList'
import Scroll from 'components/common/Scroll'
import DetailBottomBar from './DetailChildComps/DetailBottomBar'

export default {
  data() {
    return {
      iid: 0,
      swiperImg: [],
      goods: {},
      sells: {},
      info: {},
      params: {},
      comment: {},
      recommend: [],
      topControl: []
    }
  },
  mixins: [BackTopMixin],
  created() {
    this.iid = this.$route.params.iid
    this.getDetailList(this.iid)
    // 获取商品推荐数据
    getDetailRate().then(res => {
      // console.log(res)
      if (res.data.success === true) {
        this.recommend = res.data.data.list
      }
    })
  },
  mounted() {
    this.$bus.$on('imgLoaded', () => {
      this.$refs.scroll.scroll.refresh()
    })
    this.$nextTick(() => {
      this.$refs.scroll.scroll.refresh()
    })
  },
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailGoods,
    DetailSells,
    DetailInfo,
    DetailParams,
    DetailComment,
    GoodList,
    Scroll,
    DetailBottomBar
  },
  methods: {
    getDetailList(iid) {
      getDetailList(iid).then(res => {
        if (res.data.status.code === 1001) {
          // console.log(res)
          // 获取轮播图数据
          this.swiperImg = res.data.result.itemInfo.topImages
          const data = res.data.result
          // 获取商品数据
          this.goods = new Goods(
            data.columns,
            data.itemInfo,
            data.shopInfo.services
          )
          // 获取商家数据
          this.sells = new Sells(data.shopInfo, data.shopInfo.score)

          // 获取商家数据信息
          this.info = data.detailInfo

          // 获取商品参数
          this.params = new Params(data.itemParams.info, data.itemParams.rule)

          // 获取评论数据
          this.comment = data.rate.list ? data.rate.list[0] : {} // 避免没有评论

          // 页面中的DOM元素渲染完，BSscroll重新渲染
          this.$nextTick(() => {
            this.$refs.scroll.scroll.refresh()
          })
        }
      })
    },
    // info图片加载完毕，BSscroll重新计算高度
    imgLoad() {
      this.$nextTick(() => {
        this.$refs.scroll.scroll.refresh()
      })
      this.topControl.push(44)
      this.topControl.push(this.$refs.params.$el.offsetTop)
      this.topControl.push(this.$refs.comment.$el.offsetTop)
      this.topControl.push(this.$refs.recommend.$el.offsetTop)
    },
    change(to) {
      this.$bus.$on('change', () => {})
    },
    changeTop(currentIndex) {
      // navbar高亮改变，滚动的位置改变
      this.$refs.scroll.scroll.scrollTo(0, -this.topControl[currentIndex] + 44)
    },
    detailScroll(position) {
      // 滚动的位置改变，对应高亮
      if (-position.y + 44 >= this.topControl[3]) {
        this.$refs.navabr.currentIndex = 3
      } else if (-position.y + 44 >= this.topControl[2]) {
        this.$refs.navabr.currentIndex = 2
      } else if (-position.y + 44 >= this.topControl[1]) {
        this.$refs.navabr.currentIndex = 1
      } else {
        this.$refs.navabr.currentIndex = 0
      }

      this.isShow = -position.y > 1000
    },
    addCart() {
      // 添加购物车
      const cart = {}
      cart.title = this.goods.title
      cart.lowNowPrice = this.goods.lowNowPrice
      cart.desc = this.goods.desc
      cart.swiperImg = this.swiperImg[0]
      cart.iid = this.iid
      // console.log(cart)
      // 将数据添加到Vuex中。添加数据会进行判断要是state中有数据的话数量+1，没数据的话进行添加数据并且设置数量初始值1。这是两件事，mutations中是修改数据状态，每个函数完成的功能尽可能单一。所有使用dispatch分发给actions再交给mutations修改数据

      // 修改了vuex中的数据要想知道操作是否完成，使用actions返回的promise对象。然后调用/then拿到操作的结果
      // actions会返回一个promise对象。
      this.$store.dispatch('addCart', cart).then(res => {
        // console.log(res)
        this.$toast(res)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.detail {
  padding-top: 44px;
  height: 100%;
  padding-bottom: 49px;
  position: relative;
  z-index: 10;
  background-color: #fff;
}
.navbar {
  background-color: #fff;
}
.scroll {
  width: 100%;
  height: 100%;
}
</style>
