export default {
  // 获取商品数据
  getCartList(state, getters) {
    return state.cartList
  },
  // 获取数据长度
  getCartListLen(state, getters) {
    return state.cartList.length
  }
}
