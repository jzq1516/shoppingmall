import { request } from "./request";

// 获取商品列表数据
export function getGoodsListData(cid, pagenum) {
  return request({
    url: '/goods/search',
    params: {
      cid,
      pagenum
    }
  })
}