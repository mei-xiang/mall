<template>
  <div class="two">
    <scroll class="scroll">
      <ul class="right clearFix">
        <li v-for="(item,index) in subcategory" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt />
            <span>{{item.title}}</span>
          </a>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/Scroll'
export default {
  props: {
    subcategory: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  components: {
    Scroll
  }
}
</script>

<style lang="less" scoped>
.two {
  height: 100%;
  padding: 5px 0px 10px 20px;
  overflow: hidden;
  .scroll {
    height: 100%;
    width: 100%;
    ul {
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-between;
    }
    li {
      margin-top: 10px;
      margin-right: 13px;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          border-radius: 50%;
          width: 50px;
          height: 50px;
        }
        span {
          color: #7e8c8d;
          font-size: 12px;
          width: 50px;
          text-align: center;
          padding-top: 8px;
        }
      }
    }
  }
}
</style>