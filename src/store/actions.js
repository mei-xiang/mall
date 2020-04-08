export default {
  // actions会返回promise对象，外面就可以进行.then拿到操作的结果
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 判断要添加的数据是否以及存在
      const item = context.state.cartList.find(item => item.iid === payload.iid)
      // 如果存在
      if (item) {
        // 修改这条数据中 count+1
        context.commit('increase', item)
        resolve('当前商品数量+1')
      } else {
        // 初始化count=1，checkout=true，交给mutations添加数据
        payload.count = 1
        payload.checked = true
        // state.cartList.push(payload)
        context.commit('addProduct', payload)
        resolve('商品添加完成')
      }
    })
  }
}
