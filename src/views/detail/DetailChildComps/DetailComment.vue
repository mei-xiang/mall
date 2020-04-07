<template>
  <div class="comment" v-if="Object.keys(comment).length !==0">
    <div class="title">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="user">
      <img :src="comment.user.avatar" alt />
      <span>{{comment.user.uname}}</span>
    </div>
    <div class="text">{{comment.content}}</div>
    <div class="time">
      <span class="create">{{comment.created | format}}</span>
      <span class="style">{{comment.style}}</span>
    </div>
  </div>
</template>

<script>
// 导入公共函数
import { dateFormat } from 'common/utils'

export default {
  data() {
    return {}
  },
  props: {
    comment: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  filters: {
    format(value) {
      return dateFormat('yyyy-MM-dd hh:mm', new Date(value * 1000))
    }
  }
}
</script>

<style lang="less" scoped>
.comment {
  border-top: 3px solid #f5f4f7;
  padding: 0 15px;
  color: #999;
  .title {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f5f4f7;
    padding: 20px 15px;
  }
  .user {
    padding: 10px 0;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 15px;
    }
    img,
    span {
      vertical-align: middle;
    }
  }
  .text {
    line-height: 20px;
  }
  .time {
    font-size: 12px;
    padding: 10px 0;
    .create {
      padding-right: 15px;
    }
  }
}
</style>