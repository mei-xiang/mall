<template>
  <div class="home">
    <!-- 导航条 -->
    <navbar class="navabr">
      <div slot="nav_center" class="nav_center">购物街</div>
    </navbar>

    <!-- 滚动区域 -->
    <scroll class="scroll" ref="scroll" @positionscroll="positionscroll" @pullingup="pullingup">
      <!-- 轮播图 -->
      <home-swiper :banners="banners"></home-swiper>
      <!-- 推荐 -->
      <home-recommend :recommend="recommend"></home-recommend>
      <!-- 本周流行 -->
      <home-feature-view></home-feature-view>
      <!-- 商品类别 -->
      <tab-control :titles="['流行','新款','精选']" @tagclick="tagClick" class="tab_control"></tab-control>
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
      isShowBackTop: false
    }
  },
  created() {
    // 获取轮播数据和推荐数据
    this.getAllHomeData()
    this.getAllHomeGoodss('pop', 1)
    this.getAllHomeGoodss('new', 1)
    this.getAllHomeGoodss('sell', 1)
  },
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
    },
    // 上拉加载
    pullingup() {
      console.log('上拉加载更多数据')
      this.getAllHomeGoodss(this.currentType)

      this.$refs.scroll.scroll.finishPullUp()

      // BSscroll实例中DOM结构发生变化，需要重新计算
      this.$nextTick(() => {
        this.$refs.scroll.scroll.refresh()
      })
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  padding-top: 44px;
  height: 100%;
  height: 100vh;
  padding-bottom: 49px;
}
.navabr {
  font-size: 18px;
  background-color: #ff8a9d;
}
.tab_control {
  position: sticky;
  top: 44px;
}
.scroll {
  width: 100%;
  height: 100%;
}
</style>