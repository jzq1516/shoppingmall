import { request } from "./request";

// 获取商品详情数据
export function getGoodsDetailData(goods_id) {
  return request({
    url: '/goods/detail',
    params: {
      goods_id
    }
  })
}