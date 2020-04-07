<template>
  <div class="home">
    <!-- 导航条 -->
    <navbar class="navabr">
      <div slot="nav_center" class="nav_center">购物街</div>
    </navbar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tagclick="tagClick"
      ref="tabControlRef1"
      class="tabControl1"
      v-show="isShowTab"
    ></tab-control>

    <!-- 滚动区域 -->
    <scroll
      class="scroll"
      ref="scroll"
      @positionscroll="positionscroll"
      @pullingup="pullingup"
    >
      <!-- 轮播图 -->
      <home-swiper
        :banners="banners"
        @swiperImgLoad="swiperImgLoad"
      ></home-swiper>
      <!-- 推荐 -->
      <home-recommend :recommend="recommend"></home-recommend>
      <!-- 本周流行 -->
      <home-feature-view></home-feature-view>
      <!-- 商品类别 -->
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tagclick="tagClick"
        ref="tabControlRef"
      ></tab-control>
      <!-- 商品列表 -->
      <good-list :goodlist="goodType"></good-list>
    </scroll>

    <!-- 返回顶部 -->
    <!-- 监听组件的原生事件时，需要在事件后面添加修饰符.native -->
    <!-- 返回顶部，使用better-scroll中的scrollTo(x,y,time) -->
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
// 网络请求js模块
import { getAllHomeData, getAllHomeGoods } from 'network/home'

// home子组件
import HomeSwiper from './homeChildComps/HomeSwiper'
import HomeRecommend from './homeChildComps/HomeRecommend'
import HomeFeatureView from './homeChildComps/HomeFeatureView'

// 公共组件
import Navbar from 'components/common/navbar/Navbar'
import TabControl from 'components/common/Tab-Control'
import GoodList from 'components/content/goods/GoodList'
import BackTop from 'components/content/BackTop'
import Scroll from 'components/common/Scroll'

// import axios from 'axios'
export default {
  data() {
    return {
      banners: [],
      recommend: [],
      // 流行，新款，精选数据结构
      goodList: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      currentType: 'pop', // 当前商品数据的类别
      isShowBackTop: false,
      offsetTop: 0,
      isShowTab: false, // 吸顶效果
      saveY: 0 // 保持位置
    }
  },
  // destroyed() {
  //   console.log('销毁了')
  // },
  // 进入时触发
  created() {
    // 获取轮播数据和推荐数据
    this.getAllHomeData()
    this.getAllHomeGoodss('pop', 1)
    this.getAllHomeGoodss('new', 1)
    this.getAllHomeGoodss('sell', 1)
  },
  mounted() {
    // // 通过EventBus注册事件
    // this.$bus.$on('imgLoaded', () => {
    //   // 图片加载完毕调用滚动插件实例的refresh，
    //   this.$refs.scroll.scroll.refresh()
    // })
    // console.log(this.$refs.scroll.$el === this.$refs.scroll.$refs.wrapperRef)
    this.$refs.scroll.scroll.refresh() // 重新计算滚动的高度
  },
  // 使用keep-alive切换路由状态没有保持时，使用activated和deactivated记录位置滚动
  // activated() {
  //   console.log('activated进入了')
  //   // 将上一次离开时的值赋值给当前进入时滚动的值
  //   this.$refs.scroll.scroll.scrollTo(0, this.saveY)
  // },
  // deactivated() {
  //   console.log('deactivated离开了')
  //   // 获取离开时滚动的位置，进行保存
  //   this.saveY = this.$refs.scroll.scroll.y
  // },
  components: {
    Navbar: Navbar,
    HomeSwiper: HomeSwiper,
    HomeRecommend: HomeRecommend,
    HomeFeatureView: HomeFeatureView,
    TabControl: TabControl,
    GoodList: GoodList,
    BackTop: BackTop,
    Scroll: Scroll
  },
  computed: {
    goodType() {
      return this.goodList[this.currentType].list
    }
  },
  methods: {
    /**
     * 网络数据请求
     */
    // getAllHomeData() {
    //   axios
    //     .get('http://152.136.185.210:8000/api/h3/home/multidata')
    //     .then(res => {
    //       console.log(res)
    //     })
    // }
    getAllHomeData() {
      getAllHomeData().then(res => {
        if (res.data.success === true) {
          this.banners = res.data.data.banner.list
          this.recommend = res.data.data.recommend.list
        }
      })
    },

    getAllHomeGoodss(type) {
      const page = this.goodList[type].page + 1
      getAllHomeGoods(type, page).then(res => {
        const { data } = res.data
        this.goodList[type].list.push(...data.list)
        this.goodList[type].page++
      })
    },

    /**
     * 事件处理
     */
    tagClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControlRef.currentIndex = index
      this.$refs.tabControlRef1.currentIndex = index

      /** todos ----bug  添加了吸附功能后，点击pop,new,sell不同的类别，在每个类别都是获取的不同的页数对应的位置。现在当我们切换类别时，不能保持之前类别对应的滚动位置。解决办法：在每次点击类别时都记录好对应类别滚动的位置（实例.y获取滚动的位置），下次切换这个类别就会自动对应过去 */
    },
    // 返回顶部
    backTop() {
      // 获取better-scroll组件实例，调用实例的scrollTo(x,y,time)
      // this.$refs.scroll  获取scroll组件 然后拿到better-scroll实例
      this.$refs.scroll.scroll.scrollTo(0, 0, 500)
    },
    // 显示/隐藏Top按钮
    positionscroll(position) {
      if (-position.y > 1000) {
        this.isShowBackTop = true
      } else {
        this.isShowBackTop = false
      }
      // console.log(this.$refs.tabControlRef.$el.offsetTop)
      // console.log(-position.y)
      this.isShowTab = -position.y > this.offsetTop
    },
    // 上拉加载
    pullingup() {
      this.getAllHomeGoodss(this.currentType)

      this.$refs.scroll.scroll.finishPullUp()

      // BSscroll实例中DOM结构发生变化，需要重新计算
      // 1. 使用this.$nextTick() DOM加载完毕后再执行,调用refresh()
      // 2. 监听图片加载事件@load，每次加载完成调用refresh()
      this.$nextTick(() => {
        this.$refs.scroll.scroll.refresh()
      })
    },
    // 轮播中的图片加载完毕，获取tab-control offsetTop的距离
    swiperImgLoad() {
      this.offsetTop = this.$refs.tabControlRef.$el.offsetTop - 44
      this.flag = true
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  padding-top: 44px;
  height: 100%;
  height: 100%;
  padding-bottom: 49px;
}
.navabr {
  font-size: 18px;
  background-color: #ff8a9d;
}
.scroll {
  width: 100%;
  height: 100%;
}
.tabControl1 {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
}
</style>
