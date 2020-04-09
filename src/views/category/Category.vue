<template>
  <div class="category">
    <navbar class="navabr">
      <div slot="nav_center" class="nav_center">商品分类</div>
    </navbar>
    <category-first :category="category" @toggleCate="toggleCate"></category-first>
    <category-two :subcategory="subcategory"></category-two>
  </div>
</template>

<script>
// 导入网络模块
import { getCategory, getSubCategory } from 'network/category'

// 导入组件模块
import Navbar from 'components/common/navbar/Navbar'
import CategoryFirst from './CategoryChildComps/CartgoryFirst'
import CategoryTwo from './CategoryChildComps/CategoryTow'

export default {
  data() {
    return {
      category: [],
      maitKey: null,
      categoryData: {}, // 存储分类下的数据
      currentIndex: -1
    }
  },
  computed: {
    subcategory() {
      if (this.currentIndex === -1) return []
      return this.categoryData[this.currentIndex].subcategory
    }
  },
  components: {
    Navbar,
    CategoryFirst,
    CategoryTwo
  },
  created() {
    this._getCategory()
  },
  methods: {
    _getCategory() {
      getCategory().then(res => {
        // console.log(res)
        const data = res.data
        if (data.success === true) {
          this.category = data.data.category.list
          for (let i = 0; i <= this.category.length - 1; i++) {
            this.categoryData[i] = {
              subcategory: [],
              categoryDetail: {
                pop: { page: 0, list: [] },
                new: { page: 0, list: [] },
                sell: { page: 0, list: [] }
              }
            }
          }
          // 获取一级分类对应的内容
          this._getSubCategory(0)
        }
      })
    },
    _getSubCategory(index) {
      this.maitKey = this.category[index].maitKey
      // console.log(this.maitKey)
      getSubCategory(this.maitKey).then(res => {
        // console.log(res)
        const data = res.data
        if (data.success === true) {
          this.categoryData[index].subcategory = res.data.data.list
          // console.log(this.categoryData)
          this.currentIndex = index
        }
      })
    },
    toggleCate(index) {
      // console.log(index)
      this._getSubCategory(index)
    }
  }
}
</script>

<style lang="less" scoped>
.category {
  padding-top: 44px;
  padding-bottom: 55px;
  width: 100%;
  height: 100%;
  .navabr {
    font-size: 18px;
    background-color: #ff8a9d;
  }
}
</style>