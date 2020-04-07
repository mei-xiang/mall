// mutations是进行修改状态的地方。mutations中每个函数完成的功能要尽可能单一

export default {
  // 数量加1
  increase(state, payload) {
    payload.count++
  },
  // 添加数据
  addProduct(state, payload) {
    state.cartList.push(payload)
  },
  // 修改选中状态
  updateCheck(state, payload) {
    payload.checked = !payload.checked
  }
}
