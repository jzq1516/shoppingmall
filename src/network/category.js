import { request } from "./request";

//  获取商品分类数据
export function getCategoryData() {
  return request({
    url: '/categories'
  })
}