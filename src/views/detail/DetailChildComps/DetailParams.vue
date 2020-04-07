<template>
  <div class="params">
    <p>商品参数</p>
    <table class="tables">
      <tbody>
        <tr v-for="(item1,index1) in params.tables" :key="index1">
          <td v-for="(item2,index2) in item1" :key="index2">{{item2}}</td>
        </tr>
      </tbody>
    </table>
    <table class="set">
      <tr v-for="(item1,index1) in params.set" :key="index1">
        <td v-for="(item2, index2) in item1" :key="index2">{{item2}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    params: {
      type: Object,
      default: function() {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.params {
  padding: 20px 15px;
  border-top: 3px solid #f5f4f7;
  color: #a3a5aa;
  font-size: 14px;
  .tables {
    color: #000;
    width: 100%;
    font-size: 13px;
    border-bottom: 2px solid #ebebeb;
    tr {
      width: 100%;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ebebeb;
      line-height: 40px;
      &:last-of-type {
        border: none;
      }
    }
  }
  .set {
    font-size: 13px;
    width: 100%;
    color: #000;
    tr {
      display: flex;
      align-items: center;
      height: 40px;
      border-bottom: 1px solid #ebebeb;
      td:first-of-type {
        flex: 3;
      }
      td:last-of-type {
        color: #ff8198;
        flex: 7;
        text-align: left;
      }
    }
  }
}
</style>