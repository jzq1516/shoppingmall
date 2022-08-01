import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {
  addCart({state, commit}, payload) {
    // 查找之前是否添加此商品
    let oldProduct = state.cartList.find(item => item.id === payload.id)
    // 判断oldProduct 
    if (oldProduct) {
      commit(ADD_COUNTER, oldProduct)
    } else {
      payload.count = 1
      commit(ADD_TO_CART, payload)
    }
  }
}